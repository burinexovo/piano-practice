const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const pagePath = path.join(__dirname, 'piano-practice.html');
const clients = new Set();
const pagePaths = [pagePath, path.join(__dirname, 'piano-practice-en.html')];
const versions = new Map(pagePaths.map(file => [file, fs.statSync(file).mtimeMs]));
const reloadScript = `<script>
(() => {
  const events = new EventSource('/__reload');
  events.addEventListener('change', () => location.reload());
})();
</script>`;

const server = http.createServer((req, res) => {
  const route = new URL(req.url, 'http://127.0.0.1').pathname;
  if (route === '/__reload') {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    });
    res.write(': connected\n\n');
    clients.add(res);
    req.on('close', () => clients.delete(res));
    return;
  }
  if (!['/', '/piano-practice.html', '/piano-practice-en.html'].includes(route)) {
    res.writeHead(404);
    res.end('Not found');
    return;
  }
  const requestedPage = route === '/piano-practice-en.html' ? pagePaths[1] : pagePath;
  fs.readFile(requestedPage, 'utf8', (error, html) => {
    if (error) {
      res.writeHead(500);
      res.end('Unable to read piano-practice.html');
      return;
    }
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store',
    });
    res.end(html.replace('</body>', reloadScript + '</body>'));
  });
});

// Polling also catches editors that save by replacing the file atomically.
const watcher = setInterval(() => {
  for (const file of pagePaths) fs.stat(file, (error, stat) => {
    if (!error && stat.mtimeMs !== versions.get(file)) {
      versions.set(file, stat.mtimeMs);
      for (const client of clients) client.write('event: change\ndata: reload\n\n');
    }
  });
}, 500);
const heartbeat = setInterval(() => {
  for (const client of clients) client.write(': heartbeat\n\n');
}, 20000);
server.listen(5173, '127.0.0.1', () => {
  console.log('Piano practice: http://127.0.0.1:5173 — auto reload enabled');
});
server.on('error', error => {
  console.error(error.message);
  process.exit(1);
});
function shutdown() {
  clearInterval(watcher);
  clearInterval(heartbeat);
  for (const client of clients) client.end();
  server.close(() => process.exit(0));
}
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

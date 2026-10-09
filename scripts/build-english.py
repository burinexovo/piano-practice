"""Generate the standalone English page from the Chinese source and dictionary."""
from pathlib import Path
import json
import re

root = Path(__file__).resolve().parent.parent
source = (root / 'piano-practice.html').read_text()
translations = json.loads((root / 'scripts/en-translations.json').read_text())
pattern = re.compile('|'.join(re.escape(key) for key in sorted(translations, key=len, reverse=True)))
# Embedded fonts/audio and CSS must remain byte-for-byte unchanged.
protected = re.compile(r'<style\b[^>]*>.*?</style>|<script id="piano-samples"[^>]*>.*?</script>', re.S)
parts = []
last = 0
for match in protected.finditer(source):
    parts.append(pattern.sub(lambda item: translations[item.group()], source[last:match.start()]))
    parts.append(match.group())
    last = match.end()
parts.append(pattern.sub(lambda item: translations[item.group()], source[last:]))
english = ''.join(parts).replace('lang="zh-Hant"', 'lang="en"', 1)
english = english.replace('href="piano-practice-en.html" id="language-switch" title="Switch to English" aria-label="Switch to English" lang="en"', 'href="piano-practice.html" id="language-switch" title="切換至繁體中文" aria-label="切換至繁體中文" lang="zh-Hant"', 1)
(root / 'piano-practice-en.html').write_text(english)
print('Generated piano-practice-en.html')

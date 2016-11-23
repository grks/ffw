const inputTags = ['INPUT', 'FRAME', 'IFRAME', 'OBJECT',
  'SELECT', 'TEXTAREA', 'EMBED'];

// TODO: try to rate these based on current language
// '»'
//const SpecialWords = [];
const LanguageToWords = {
  'cs': ['Další', 'Následující', 'Více'],
  'de': ['Nächste', 'Nächste Seite', 'Naechste', 'Naechste Seite', 'Weiter'],
  'dk': ['Næste'],
  'fi': ['Seuraava'],
  'fr': ['Suiv', 'Suivant', 'Prochaine'],
  'is': ['Næst'],
  'jp': ['次へ'],
  'ko': ['다음'],
  'nl': ['Volgende'],
  'no': ['Neste', 'Neste side'],
  'pl': ['Dalej', 'Nastę'],
  'pt': ['Próximo', 'Página próximo', 'Página seguinte'],
  'ru': ['Следующая'],
  'se': ['Nästa'],
  'tr': ['Sonraki'],
  'zh': ['下一頁', '下一页'],
  'en': ['Next Page', 'Next', '\\[Next\\]', 'More'],
};

// Some URLs that we should ignore, to override major sites
const IgnoreURLs = [
  'http://www.google.com/intl/en/options/',
  'https://duckduckgo.com/settings#appearance'
];

// Some URLs we should ignore the feature "space at end fast forward"
// on
const IgnoreSpaceForwardRegexps = [
  /^https*:\/\/[www.]*youtube.com/
];

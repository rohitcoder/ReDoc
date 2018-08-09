import * as Prism from 'prismjs';
import 'prismjs/components/prism-bash.js';
import 'prismjs/components/prism-c.js';
import 'prismjs/components/prism-clike.js';
import 'prismjs/components/prism-coffeescript.js';
import 'prismjs/components/prism-cpp.js';
import 'prismjs/components/prism-csharp.js';
import 'prismjs/components/prism-go.js';
import 'prismjs/components/prism-java.js';
import 'prismjs/components/prism-lua.js';
import 'prismjs/components/prism-markup-templating.js'; // dep of php
import 'prismjs/components/prism-markup.js'; // xml
import 'prismjs/components/prism-objectivec.js';
import 'prismjs/components/prism-perl.js';
import 'prismjs/components/prism-php.js';
import 'prismjs/components/prism-python.js';
import 'prismjs/components/prism-ruby.js';
import 'prismjs/components/prism-scala.js';
import 'prismjs/components/prism-swift.js';

const DEFAULT_LANG = 'clike';

/**
 * map language names to Prism.js names
 */
export function mapLang(lang: string): string {
  return (
    {
      json: 'js',
      'c++': 'cpp',
      'c#': 'csharp',
      'objective-c': 'objectivec',
      shell: 'bash',
      viml: 'vim',
    }[lang] || DEFAULT_LANG
  );
}

/**
 * Highlight source code string using Prism.js
 * @param source source code to highlight
 * @param lang highlight language
 * @return highlighted souce code as **html string**
 */
export function highlight(source: string, lang: string = DEFAULT_LANG): string {
  lang = lang.toLowerCase();
  let grammar = Prism.languages[lang];
  if (!grammar) {
    grammar = Prism.languages[mapLang(lang)];
  }
  return Prism.highlight(source, grammar);
}

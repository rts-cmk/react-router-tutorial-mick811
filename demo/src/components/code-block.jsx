import { useEffect, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers';

export default function CodeBlock({ language = 'javascript', code }) {
  const preRef = useRef(null);

  useEffect(() => {
    if (preRef.current) {
      Prism.highlightAllUnder(preRef.current);
    }
  }, [code, language]);

  const lines = code.split('\n');
  const showLineNumbers = lines.length > 1;

  return (
    <pre 
      ref={preRef} 
      className={`rounded-md overflow-x-auto ${showLineNumbers ? 'line-numbers' : ''}`}
    >
      <code className={`language-${language}`}>
        {code}
      </code>
    </pre>
  );
}
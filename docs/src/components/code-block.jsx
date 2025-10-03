import { useEffect, useRef } from 'react';
import Prism from 'prismjs';
import 'prism-themes/themes/prism-vsc-dark-plus.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers';

export function CodeBlock({ language = 'javascript', code }) {
  const preRef = useRef(null);

  useEffect(() => {
    if (preRef.current) {
      Prism.highlightAllUnder(preRef.current);
    }
  }, [code, language]);

  const lines = code.split('\n');
  const showLineNumbers = lines.length > 1;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code)
  };

  return (
    <div className='code-block-container'>
      <button 
        onClick={handleCopyCode}
        className='copy-code-button'
        aria-label="Copy code to clipboard"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleCopyCode();
          }
        }}
      >
        Copy
      </button>
      <pre 
        ref={preRef} 
        className={`code-block-pre ${showLineNumbers ? 'line-numbers' : ''}`}
      >
        <code className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  );
}

export function Markdown({ language, children }) {
  const preRef = useRef(null);

  useEffect(() => {
    if (preRef.current && language) {
      Prism.highlightAllUnder(preRef.current);
    }
  }, [children, language]);

  if (!children) return null;

  const codeContent = typeof children === 'string' ? children : String(children);

  const lines = codeContent.split('\n');
  const isInlineCode = lines.length === 1 && !codeContent.includes('```');

  if (isInlineCode) {
    return (
      <code className="inline-code">
        {codeContent}
      </code>
    );
  }

  const showLineNumbers = lines.length > 1;

    return (
      <pre
        ref={preRef}
        className={`code-block-pre ${showLineNumbers ? 'line-numbers' : ''}`}
      >
        <code className={language ? `language-${language}` : 'language-text'}>
          {codeContent}
        </code>
      </pre>
    );
}


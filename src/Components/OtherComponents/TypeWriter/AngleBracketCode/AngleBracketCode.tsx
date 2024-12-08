import "./AngleBracketCode.css";

export const OpenBracketCode = () => {
    return (
      <pre>
        <code className="custom-code">
          <span className="bracket">&lt;</span>code<span className="bracket">&gt; </span>
        </code>
      </pre>
    );
}

export const CloseBracketCode = () => {
  return (
    <pre>
      <code className="custom-code">
        <span className="bracket"> &lt;/</span>code<span className="bracket">&gt;</span>
      </code>
    </pre>
  );
};
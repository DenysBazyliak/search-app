import React from "react";

import style from "../components/Article/Articles.module.css";

interface HighlightedTextProps {
  text: string;
  keywords: string;
}

const HighlightedText: React.FC<HighlightedTextProps> = ({
  text,
  keywords,
}) => {
  const highlightKeywords = (text: string, keywords: string) => {
    const regex = new RegExp(keywords, "g");
    const parts = text.split(regex);

    return parts.map((part, index) => (
      <React.Fragment key={index}>
        {index !== 0 && <span className={style.highlighted}>{keywords}</span>}
        {part}
      </React.Fragment>
    ));
  };

  return <div>{highlightKeywords(text, keywords)}</div>;
};

export default HighlightedText;

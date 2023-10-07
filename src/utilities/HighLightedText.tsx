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
    const regex = new RegExp(keywords, "gi");
    const matches = text.match(regex);
    const parts = text.split(regex);
    return parts.map((part, index) => {
      if (matches) {
        return (
          <React.Fragment key={index}>
            {index !== 0 && (
              <span className={style.highlighted}>{matches[index - 1]}</span>
            )}
            {part}
          </React.Fragment>
        );
      } else {
        return part;
      }
    });
  };

  return <div>{highlightKeywords(text, keywords)}</div>;
};

export default HighlightedText;

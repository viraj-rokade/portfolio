import React, { useEffect, useState } from "react";
import { OpenBracketCode, CloseBracketCode } from "./AngleBracketCode/AngleBracketCode";
import "./TypeWriter.css";

interface TypeWriterProps {
  texts: string[];
  typingSpeed?: number; // Speed of typing each character (ms)
  deletingSpeed?: number; // Speed of deleting each character (ms)
  pauseBetweenWords?: number; // Pause before deleting the text (ms)
}

const TypeWriter: React.FC<TypeWriterProps> = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseBetweenWords = 1000,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    if (!isDeleting && displayedText.length < currentText.length) {
      // Typing the text
      const timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, displayedText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayedText.length > 0) {
      // Deleting the text
      const timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, displayedText.length - 1));
      }, deletingSpeed);
      return () => clearTimeout(timeout);
    }

    if (!isDeleting && displayedText.length === currentText.length) {
      // Pause before deleting
      const timeout = setTimeout(() => setIsDeleting(true), pauseBetweenWords);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayedText.length === 0) {
      // Move to next text after deleting
      setIsDeleting(false);
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length); // Loop back to the first text
    }
  }, [
    displayedText,
    isDeleting,
    texts,
    textIndex,
    typingSpeed,
    deletingSpeed,
    pauseBetweenWords,
  ]);

  return (
    <div className="type-writer-container">
      <OpenBracketCode />
      <span>{displayedText}</span>
      <span className="typewriter-cursor">|</span>
      <CloseBracketCode />
    </div>
  );
};

export default TypeWriter;

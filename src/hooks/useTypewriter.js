import { useEffect, useState } from "react";

/**
 * Effet machine à écrire bouclé : saisit un texte, marque une pause,
 * s'efface, puis passe au texte suivant dans la liste `words`.
 */
export function useTypewriter(
  words,
  { typeSpeed = 70, deleteSpeed = 45, pauseTyped = 2200, pauseDeleted = 400 } = {}
) {
  const wordsArray = Array.isArray(words) ? words : [words];
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = wordsArray[wordIndex % wordsArray.length];
    let timer;

    if (isDeleting) {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length - 1));
        }, deleteSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % wordsArray.length);
        }, pauseDeleted);
      }
    } else {
      if (displayText.length < currentWord.length) {
        timer = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, typeSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTyped);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex, wordsArray, typeSpeed, deleteSpeed, pauseTyped, pauseDeleted]);

  return { displayText, currentWord: wordsArray[wordIndex % wordsArray.length], isDeleting };
}


import React, { useRef } from "react";
import type { AnswersProps } from "../types/data-types.ts";
import { shuffled } from "../utils/array-util.ts";

const Answers: React.FC<AnswersProps> = ({
  answers,
  selectedAnswer,
  answerState,
  onSelect,
}) => {
  const shuffledAnswers = useRef<string[]>([]);
  if (shuffledAnswers.current.length === 0) {
    shuffledAnswers.current = shuffled([...answers]);
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClass = "";

        if (answerState === "answered" && isSelected) {
          cssClass = "selected";
        }

        if (
          isSelected &&
          (answerState === "correct" || answerState === "wrong")
        ) {
          cssClass = answerState;
        }

        return (
          <li key={answer} className="answer">
            <button
              onClick={() => onSelect(answer)}
              className={cssClass}
              disabled={answerState !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Answers;

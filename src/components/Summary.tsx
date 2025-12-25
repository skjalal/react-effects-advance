import React from "react";

import QUESTIONS from "../utils/questions.ts";
import quizCompleteImg from "../assets/quiz-complete.png";
import type { SummaryProps } from "../types/data-types.ts";

const Summary: React.FC<SummaryProps> = ({ userAnswers }) => {
  const skippedAnswers: string[] = userAnswers.filter(
    (answer) => answer === ""
  );
  const correctAnswers: string[] = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );
  const skippedAnswersShare: number = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );
  const correctAnswersShare: number = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );
  const wrongAnswersShare: number =
    100 - skippedAnswersShare - correctAnswersShare;
  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Trophy icon" />
      <h2>Quiz Complete!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersShare}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswersShare}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnswersShare}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = "user-answer";
          if (answer === "") {
            cssClass += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }
          return (
            <li key={index + 1}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{answer === "" ? "Skipped" : answer}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Summary;

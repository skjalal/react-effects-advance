import React, { useState, useCallback } from "react";

import QUESTIONS from "../utils/questions.ts";
import Question from "./Question.tsx";
import Summary from "./Summary.tsx";

const Quiz: React.FC = () => {
  const [userAnswers, setUserAnswers] = useState<string[]>([]);

  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete: boolean = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback((selectedAnswer: string) => {
    setUserAnswers((prevUserAnswer) => {
      return [...prevUserAnswer, selectedAnswer];
    });
  }, []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(""),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
};

export default Quiz;

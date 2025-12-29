import React, { useState, useEffect } from "react";
import type { QuestionTimerProps } from "../types/data-types.ts";

const QuestionTimer: React.FC<QuestionTimerProps> = ({
  timeout,
  onTimeout,
  mode,
}) => {
  const [remainingTime, setRemainingTime] = useState<number>(timeout);

  useEffect(() => {
    const timer = onTimeout ? setTimeout(onTimeout, timeout) : null;
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      id="question-time"
      value={remainingTime}
      max={timeout}
      className={mode}
    />
  );
};

export default QuestionTimer;

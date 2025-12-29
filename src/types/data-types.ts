type Question = {
  id: string;
  text: string;
  answers: string[];
};

type QuestionTimerProps = {
  timeout: number;
  onTimeout?: () => void;
  mode: string;
};

type AnswersProps = {
  answers: string[];
  selectedAnswer: string;
  answerState: string;
  onSelect: (answer: string) => void;
};

type QuestionProps = {
  index: number;
  onSelectAnswer: (answer: string) => void;
  onSkipAnswer: () => void;
};

type AnswerState = {
  selectedAnswer: string;
  isCorrect: boolean | null;
};

type SummaryProps = {
  userAnswers: string[];
};

export {
  type Question,
  type QuestionTimerProps,
  type AnswersProps,
  type QuestionProps,
  type AnswerState,
  type SummaryProps,
};

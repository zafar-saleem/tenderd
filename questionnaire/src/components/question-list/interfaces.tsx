interface IQuestion {
  question: string;
  answer: string;
}

interface IQuestions {
  questions: IQuestion[];
}

export interface IQuestionListProps {
  questions: IQuestions;
}

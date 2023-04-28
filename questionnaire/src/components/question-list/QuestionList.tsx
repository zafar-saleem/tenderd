import { QuestionContainer } from '../question-container';
import { IQuestionContainerProps } from '../question-container/interfaces';
import { IQuestionListProps } from './interfaces';

export const QuestionList: React.FC<IQuestionListProps> = ({ questions }) => {
  return (
    <>
      {
        questions?.questions?.map((question: IQuestionContainerProps, index: number) => (
          <QuestionContainer data-testid={`test-container-${index}`} key={`${index}-${question.question}`} {...question} />
        ))
      }
    </>
  );
};

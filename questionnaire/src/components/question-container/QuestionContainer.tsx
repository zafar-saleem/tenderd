import { Confirmation } from '@/Confirmation';
import React from 'react';
import { IQuestionContainerProps } from './interfaces';

export const QuestionContainer: React.FC<IQuestionContainerProps> = (props) => {
  const [toggleAnswer, updateToggleAnswer] = React.useState<boolean>(false);
  const [toggleConfirmation, updateToggleConfirmation] = React.useState<boolean>(false);
  const {
    question,
    answer,
  } = props;

  const accept = React.useCallback(() => {
    updateToggleAnswer(!toggleAnswer);
    updateToggleConfirmation(!toggleConfirmation);
  }, [toggleConfirmation, toggleAnswer]);

  const decline = React.useCallback(() => {
    updateToggleConfirmation(!toggleConfirmation);
  }, [toggleConfirmation]);

  return (
    <div className="container">
      {
        toggleConfirmation && <Confirmation data-testid="confirmation-test" {...{
          message: 'Reveal the answer?',
          type: 'info',
          accept,
          decline,
        }} />
      }
      <p className="question">{question}</p>
		  <button
        data-testid="btn-test"
        className="btn btn-primary show-answer"
        onClick={() => updateToggleConfirmation(!toggleConfirmation)}
        disabled={toggleAnswer ? true : false}
      >Show Answer</button>
      {
        toggleAnswer && <p className="answer">{answer}</p>
      }
    </div>
  );
};

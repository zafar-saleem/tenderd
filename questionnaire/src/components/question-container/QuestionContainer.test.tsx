import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { QuestionContainer } from '../question-container';

describe('test contents', () => {
  it('should render list of questions with a button' , async () => {
    render(<QuestionContainer {...{question: 'What are the first 10 digits of PI?', answer: '3.141592653'}} />);
    const question = screen.getByText(/What are the first 10 digits of PI?/i);
    expect(question).toBeInTheDocument();
    expect(screen.getByTestId('btn-test')).toBeInTheDocument();
  });

  it('should render answer', async () => {
    render(<QuestionContainer {...{question: 'What are the first 10 digits of PI?', answer: '3.141592653'}} />);
    await fireEvent.click(screen.getByText('Show Answer'));
    // @eslint-ignore
    await waitFor(() => screen.queryByTestId('confirmation-test'));
    expect(screen.getByText(/What are the first 10 digits of PI?/i)).toBeInTheDocument();
  });
});

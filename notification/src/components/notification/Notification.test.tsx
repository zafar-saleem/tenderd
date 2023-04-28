import React from 'react';
import { render, screen } from '@testing-library/react';
import { Notification } from './Notification';

const contents={
  notification: {
    message: 'This is message.',
    type: 'success',
  },
};

test('renders learn react link', () => {
  render(<Notification contents={contents} />);
  const message = screen.getByText(/This is message./i);
  expect(message).toBeInTheDocument();
});

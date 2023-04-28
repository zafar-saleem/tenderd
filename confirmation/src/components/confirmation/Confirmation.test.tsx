import React from 'react';
import { render, screen } from '@testing-library/react';
import { Confirmation } from './Confirmation';

describe('test contents', () => {
  it('should renders contents based on "CAUTION" type' , () => {
    const contents={
      message: 'Should we bake a pie?',
      type: 'caution',
      accept: Function,
      decline: Function,
    };

    render(<Confirmation {...contents} />);
    const message = screen.getByText(/Should we bake a pie?/i);
    
    expect(message).toBeInTheDocument();
    expect(screen.getByText('Sure')).toBeInTheDocument();
    expect(screen.getByText('No Thanks')).toBeInTheDocument();
  });

  it('should renders contents based on "INFO" type' , () => {
    const contents={
      message: 'Should we bake a pie?',
      type: 'info',
      accept: Function,
      decline: Function,
    };
    
    render(<Confirmation {...contents} />);
    const message = screen.getByText(/Should we bake a pie?/i);

    expect(message).toBeInTheDocument();
    expect(screen.getByText('Yes Please')).toBeInTheDocument();
    expect(screen.getByText('Not Yet')).toBeInTheDocument();
  });
})

import './Confirmation.css';
import React from 'react';
import { IConfirmationProps } from './interfaces';

const labels: any = {
  caution: {
    confirm: 'Sure',
    reject: 'No Thanks',
  },
  info: {
    confirm: 'Yes Please',
    reject: 'Not Yet',
  }
};

export const Confirmation: React.FC<IConfirmationProps> = (props) => {
  const {
    accept,
    decline,
    message,
    type,
  } = props;

  return (
    <div className="alert alert-info">
      <p>{message}</p>
      <button className="btn btn-primary" onClick={accept}>
        {labels[type].confirm}
      </button>
      <button className="btn btn-danger" onClick={decline}>
        {labels[type].reject}
      </button>
    </div>
  );
};

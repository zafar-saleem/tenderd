import { INotificationProps, IData } from './interfaces';

export const Notification: React.FC<INotificationProps> = ({ contents }) => {
  const {
    notification: { message, type },
  } = contents;

  if (!message) {
    return <></>;
  }

  const render: any = {
    success({ message, type }: IData) {
      return <div className={`alert alert-${type}`}>{message}</div>;
    },
    error({ message }: IData) {
      return <div className={`alert alert-danger`}>{message}</div>;
    },
    caution({ message }: IData) {
      return <div className={`alert alert-warning`}>{message}</div>;
    },
    message({ message }: IData) {
      return <div className={`alert alert-info`}>{message}</div>;
    },
  };

  return render[type]({ message, type });
};

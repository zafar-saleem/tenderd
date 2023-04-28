interface IContents {
  notification: INotification;
}

interface INotification {
  message: string;
  type: string;
  notification?: INotification;
}

export interface INotificationProps {
  contents: IContents;
  notification?: INotification;
}

export interface IData {
  message: string;
  type?: string;
}

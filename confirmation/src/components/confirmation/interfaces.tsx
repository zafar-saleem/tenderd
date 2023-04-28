export interface IConfirmationProps {
  accept: () => void;
  decline: () => void;
  message: string;
  type: string;
}
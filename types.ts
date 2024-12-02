export interface ThemeStoreState {
  theme: string;
  updateTheme: (newTheme: string) => void;
}

export enum AlertType {
  SUCCESS = 1,
  WARNING = 2,
  INFO = 3,
  ERROR = 4,
}

export interface Alert {
  message: string;
  type: AlertType;
}

export interface AlertStoreState {
  alerts: Alert[];
  addAlert: (alert: Alert) => void;
  deleteAlert: (alertIndex: number) => void;
}

export interface AlertProps {
  message: string;
}

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
  onCancel: () => void;
}

export interface ThemeOptionsProps {
  updateTheme: (newTheme: string) => void;
  theme: string;
}

export interface UserAvatarProps {
  user: any;
}

export interface LinksProps {
  isMobile: boolean;
}

export enum LEMONSQUEEZY_WEBHOOK_EVENT {
  ORDER_CREATED = "order_created",
  ORDER_REFUNDED = "order_refunded",
  SUBSCRIPTION_CREATED = "subscription_created",
  SUBSCRIPTION_UPDATED = "subscription_updated",
  SUBSCRIPTION_CANCELLED = "subscription_cancelled",
  SUBSCRIPTION_RESUMED = "subscription_resumed",
  SUBSCRIPTION_EXPIRED = "subscription_expired",
  SUBSCRIPTION_PAUSED = "subscription_paused",
  SUBSCRIPTION_UNPAUSED = "subscription_unpaused",
  SUBSCRIPTION_PAYMENT_SUCCESS = "subscription_payment_success",
  SUBSCRIPTION_PAYMENT_FAILED = "subscription_payment_failed",
  SUBSCRIPTION_PAYMENT_RECOVERED = "subscription_payment_recovered",
  SUBSCRIPTION_PAYMENT_REFUNDED = "subscription_payment_refunded",
  LICENSE_KEY_CREATED = "license_key_created",
  LICENSE_KEY_UPDATED = "license_key_updated",
}

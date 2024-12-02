import { useEffect } from "react";
import { SuccessAlert, WarningAlert, InfoAlert, ErrorAlert } from "../ui/Alerts";
import { useAlertStore } from "../state/alertStore";
import ms from "ms";
import { ALERT_TIME } from "@/constants/times";
import { AlertType } from "@/types";

export default function Toast() {
  const alertStore = useAlertStore();

  useEffect(() => {
    const timers = alertStore.alerts.map((alert, alertIndex) =>
      setTimeout(() => {
        alertStore.deleteAlert(alertIndex);
      }, ALERT_TIME)
    );

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [alertStore.alerts]);

  return (
    <>
      <div className="toast">
        {alertStore.alerts.map((alert) => {
          switch (alert.type) {
            case AlertType.SUCCESS:
              return (
                <SuccessAlert key={alert.message} message={alert.message} />
              );
            case AlertType.WARNING:
              return (
                <WarningAlert key={alert.message} message={alert.message} />
              );
            case AlertType.INFO:
              return <InfoAlert key={alert.message} message={alert.message} />;
            case AlertType.ERROR:
              return <ErrorAlert key={alert.message} message={alert.message} />;
          }
        })}
      </div>
    </>
  );
}

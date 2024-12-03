import { AlertProps } from "@/types";
import {
  FaCircleCheck,
  FaCircleInfo,
  FaCircleStop,
  FaCircleXmark,
  FaX,
} from "react-icons/fa6";

export function SuccessAlert(props: AlertProps) {
  return (
    <div role="alert" className="p-2 w-80 max-w-80 alert alert-success" id="alert">
      <FaCircleCheck />
      <span className="truncate">{props.message}</span>
      <button className="btn btn-ghost btn-square" onClick={props.onCancel}>
        <FaX />
      </button>
    </div>
  );
}

export function WarningAlert(props: AlertProps) {
  return (
    <div role="alert" className="p-2 w-80 max-w-80 alert alert-warning" id="alert">
      <FaCircleStop />
      <span className="truncate">{props.message}</span>
      <button className="btn btn-ghost btn-square" onClick={props.onCancel}>
        <FaX />
      </button>
    </div>
  );
}

export function InfoAlert(props: AlertProps) {
  return (
    <div role="alert" className="p-2 w-80 max-w-80 alert alert-info" id="alert">
      <FaCircleInfo />
      <span className="truncate">{props.message}</span>
      <button className="btn btn-ghost btn-square" onClick={props.onCancel}>
        <FaX />
      </button>
    </div>
  );
}

export function ErrorAlert(props: AlertProps) {
  return (
    <div role="alert" className="p-2 w-80 max-w-80 alert alert-error" id="alert">
      <FaCircleXmark />
      <span className="truncate">{props.message}</span>
      <button className="btn btn-ghost btn-square" onClick={props.onCancel}>
        <FaX />
      </button>
    </div>
  );
}

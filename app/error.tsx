"use client";

import { useAlertStore } from "@/components/state/alertStore";
import Header from "@/components/ui/Header";
import { AlertType } from "@/types";
import { useEffect } from "react";

export default function Error({ error }: { error: Error }) {
  const alertStore = useAlertStore();

  useEffect(() => {
    alertStore.addAlert({
      message: error.message,
      type: AlertType.ERROR,
    });
  }, []);

  return (
    <>
      <div className="p-4">
        <Header />
      </div>
      <div className="flex flex-col justify-center items-center gap-3 w-full h-full">
        <span className="font-semibold text-2xl">
          Something terrible has happened \(˚☐˚”)/ !
        </span>
        <div className="bg-base-200 p-4 rounded-xl w-fit h-fit">
          <span className="text-error text-sm truncate whitespace-break-spaces">
            {error.stack}
          </span>
        </div>
        <span className="font-normal text-xl">
          Please report this to the developer
        </span>
      </div>
    </>
  );
}

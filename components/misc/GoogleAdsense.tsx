import { ADSENSE_ENABLED, ADSENSE_URL } from "@/constants/googleadsense";
import Script from "next/script";

export default function GoogleAdsense() {
  return (
    <>
      {ADSENSE_ENABLED ? (
        <Script
          async
          src={ADSENSE_URL}
          crossOrigin="anonymous"
          type="text/partytown"
        />
      ) : null}
    </>
  );
}

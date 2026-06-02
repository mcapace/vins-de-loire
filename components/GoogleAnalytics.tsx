"use client";

import Script from "next/script";
import { useSyncExternalStore } from "react";
import { hasAnalyticsConsent, subscribeToConsent } from "@/lib/consent";
import { gaMeasurementId } from "@/lib/site";

export default function GoogleAnalytics() {
  const enabled = useSyncExternalStore(
    subscribeToConsent,
    hasAnalyticsConsent,
    () => false,
  );

  if (!gaMeasurementId || !enabled) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaMeasurementId}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}

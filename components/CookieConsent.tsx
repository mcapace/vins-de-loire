"use client";

import { useSyncExternalStore } from "react";
import {
  needsConsentBanner,
  setConsent,
  subscribeToConsent,
} from "@/lib/consent";

export default function CookieConsent() {
  const visible = useSyncExternalStore(
    subscribeToConsent,
    needsConsentBanner,
    () => false,
  );

  function choose(value: "accepted" | "declined") {
    setConsent(value);
  }

  if (!visible) {
    return null;
  }

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-loire-blue-faint bg-loire-blue-deep p-4 text-loire-blue-faint shadow-lg sm:p-6"
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-desc"
    >
      <div className="mx-auto flex w-full max-w-7xl min-w-0 flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0 sm:max-w-2xl">
          <p
            id="cookie-consent-title"
            className="text-sm font-semibold text-white sm:text-base"
          >
            Cookie preferences
          </p>
          <p
            id="cookie-consent-desc"
            className="mt-2 text-sm leading-relaxed text-loire-blue-pale"
          >
            We use cookies to measure site traffic and improve this experience.
            You can accept analytics cookies or continue with essential cookies
            only. See our{" "}
            <a
              href="#"
              className="underline underline-offset-2 hover:text-white"
            >
              Privacy Policy
            </a>{" "}
            for details.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:gap-3">
          <button
            type="button"
            onClick={() => choose("declined")}
            className="min-h-11 rounded-sm border border-loire-blue-pale/50 px-5 py-2 text-sm font-semibold uppercase tracking-[0.1em] text-loire-blue-pale transition-colors hover:border-white hover:text-white"
          >
            Essential only
          </button>
          <button
            type="button"
            onClick={() => choose("accepted")}
            className="min-h-11 rounded-sm bg-white px-5 py-2 text-sm font-semibold uppercase tracking-[0.1em] text-loire-blue transition-colors hover:bg-loire-blue-faint"
          >
            Accept analytics
          </button>
        </div>
      </div>
    </div>
  );
}

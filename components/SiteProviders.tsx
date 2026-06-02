import CookieConsent from "@/components/CookieConsent";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export default function SiteProviders() {
  return (
    <>
      <GoogleAnalytics />
      <CookieConsent />
    </>
  );
}

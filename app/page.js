import { headers } from "next/headers";
import Script from "next/script";

export default function Page() {
  const nonce = headers().get("x-nonce");
  return (
    <>
    <Script src="https://www.googletagmanager.com/gtag/js"strategy="afterInteractive" nonce={nonce} />
    <Script src="https://bcdn-4ff4f23f.we-stats.com/scripts/4ff4f23f/4ff4f23f.js"strategy="afterInteractive" nonce={nonce} />
    </>
  )
}

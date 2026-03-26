import type { Metadata } from "next"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"

import "./globals.css"
import { getSiteUrl } from "@/lib/site-url"

export const metadata: Metadata = {
  title: "TurboQuant - Extreme Compression for AI Efficiency",
  description:
    "TurboQuant is an online vector quantization algorithm for compressing KV cache with minimal accuracy loss and large memory savings.",
  metadataBase: new URL(getSiteUrl()),
  generator: "v0.app",
  other: {
    "google-adsense-account": "ca-pub-8738419268805262",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
    shortcut: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const clarityScript = `
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "w1bdxrevya");
  `

  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Script
          id="google-adsense"
          async
          strategy="afterInteractive"
          crossOrigin="anonymous"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8738419268805262"
        />
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {clarityScript}
        </Script>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

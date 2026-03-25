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
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
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
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {clarityScript}
        </Script>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

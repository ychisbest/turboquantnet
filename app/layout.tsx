import type { Metadata } from "next"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"

import "./globals.css"
import { getSiteUrl } from "@/lib/site-url"

export const metadata: Metadata = {
  title: "TurboQuant.net - Independent Analysis Of TurboQuant And KV-Cache Compression",
  description:
    "Independent analysis, explainers, and implementation notes covering TurboQuant, PolarQuant, QJL, and long-context KV-cache compression.",
  metadataBase: new URL(getSiteUrl()),
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
        <Script id="adsterra-smartlink" strategy="afterInteractive">
          {`(function(){var u="https://araplhn.org/4/4cb420440e85fd3be4a3e8294e18fb0d",k="__tq_sl_ts",ck="__tq_sl_c";document.addEventListener("click",function(e){var el=e.target&&e.target.closest&&e.target.closest("a,button");if(!el||el.closest("[data-no-smartlink]"))return;try{var c=Number(sessionStorage.getItem(ck)||"0")+1;sessionStorage.setItem(ck,String(c));if(c<2)return;var now=Date.now(),last=Number(localStorage.getItem(k)||"0");if(now-last<12*3600*1000)return;localStorage.setItem(k,String(now));window.open(u,"_blank","noopener,noreferrer");}catch(_){}},{passive:true});})();`}
        </Script>
        <Script id="evidence-telemetry" strategy="afterInteractive">
          {`(function(){try{var p=JSON.stringify({site:"turboquant.net",event:"page_view",meta:window.location.pathname,locale:"en",device:window.innerWidth<768?"mobile":"desktop"});if(navigator.sendBeacon){navigator.sendBeacon("https://evidence-telemetry.ych8398527.workers.dev/e",new Blob([p],{type:"application/json"}));}}catch(_){}})();`}
        </Script>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

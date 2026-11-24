import Script from "next/script"

export function AdBanner() {
  return (
    <section className="px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl border border-primary/20 bg-card/80 p-6 shadow-sm backdrop-blur-sm md:p-8">
          <div className="mb-4 text-center text-xs font-medium tracking-[0.24em] text-muted-foreground uppercase">
            Sponsored
          </div>
          <div className="min-h-[90px] overflow-hidden rounded-2xl border border-border bg-background/60 p-3">
            <Script
              id="adsterra-native-banner"
              async
              data-cfasync="false"
              strategy="afterInteractive"
              src="https://bauval.org/21/74a5df60af95149d9bde86d9957e513e"
            />
            <div id="container-74a5df60af95149d9bde86d9957e513e" />
          </div>
        </div>
      </div>
    </section>
  )
}

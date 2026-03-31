"use client"

import { useEffect, useRef } from "react"

export function HomepageAd() {
  const slotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const slot = slotRef.current

    if (!slot) {
      return
    }

    slot.innerHTML = ""

    const configScript = document.createElement("script")
    configScript.text = `
      atOptions = {
        'key' : 'bbaadcf8ebd21d01f15ccda024c6ed44',
        'format' : 'iframe',
        'height' : 90,
        'width' : 728,
        'params' : {}
      };
    `

    const invokeScript = document.createElement("script")
    invokeScript.src =
      "https://www.highperformanceformat.com/bbaadcf8ebd21d01f15ccda024c6ed44/invoke.js"
    invokeScript.async = true

    slot.append(configScript, invokeScript)

    return () => {
      slot.innerHTML = ""
    }
  }, [])

  return (
    <section className="px-6 py-8">
      <div className="mx-auto flex max-w-5xl justify-center overflow-x-auto">
        <div ref={slotRef} className="min-w-[728px]" aria-label="Advertisement" />
      </div>
    </section>
  )
}

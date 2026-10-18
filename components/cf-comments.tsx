"use client"

import { useEffect } from "react"

const SITE_ID = "site_8157b60302"
const WIDGET = "https://cf-comment-system.ych8398527.workers.dev/widget.js"

export function CfComments() {
  useEffect(() => {
    if (document.querySelector(`script[data-site="${SITE_ID}"]`)) return
    const s = document.createElement("script")
    s.src = WIDGET
    s.defer = true
    s.dataset.site = SITE_ID
    s.dataset.lang = "en"
    document.body.appendChild(s)
  }, [])

  return (
    <section
      className="cf-comments"
      style={{
        maxWidth: "48rem",
        margin: "2.5rem auto",
        padding: "0 1rem",
        ["--cm-accent" as string]: "#2563eb",
      }}
    >
      <h2
        style={{
          fontSize: "1.25rem",
          fontWeight: 700,
          marginBottom: "1rem",
        }}
      >
        Comments
      </h2>
      <div id="comments" />
    </section>
  )
}

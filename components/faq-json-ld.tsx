type FaqItem = { question: string; answer: string }

/** Server-friendly FAQPage JSON-LD. Pass plain text answers (no HTML). */
export function FaqJsonLd({ items }: { items: FaqItem[] }) {
  const payload = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  )
}

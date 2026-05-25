import { toId } from "./utils"
import { PageLink } from "./Link"

export function SectionNav({ sections }: { sections: string[] }) {
  if (sections.length === 0) return null
  return (
    <div
      style={{
        margin: "1rem 0.5rem",
        display: "flex",
        gap: "0.5rem",
        marginBottom: "1rem",
      }}
    >
      {sections.map((title) => (
        <PageLink key={title} href={`#${toId(title)}`}>
          {title}
        </PageLink>
      ))}
    </div>
  )
}

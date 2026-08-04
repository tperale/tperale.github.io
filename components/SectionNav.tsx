import { toId } from "./utils"
import { PageLink } from "./Link"

function SectionNavWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        margin: "1rem 0.5rem",
        display: "flex",
        flexWrap: "wrap",
        gap: "0.5rem",
      }}
    >
      {children}
    </div>
  )
}

export function SectionNav({ sections }: { sections: string[] }) {
  if (sections.length === 0) return null
  return (
    <SectionNavWrapper>
      {sections.map((title) => (
        <PageLink key={title} href={`#${toId(title)}`}>
          {title}
        </PageLink>
      ))}
    </SectionNavWrapper>
  )
}

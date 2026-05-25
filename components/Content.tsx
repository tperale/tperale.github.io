import "./Content.css"
import { Divider } from "./Divider"
import { InlineLink } from "./Link"

export function Content({ children }: { children: React.ReactNode }) {
  return <div className="content">{children}</div>
}

export function MdxContent({
  children: Mdx,
  components,
}: {
  children: React.ComponentType<{
    components: Record<string, React.ComponentType>
  }>
  components?: Record<string, React.ComponentType>
}) {
  return <Mdx components={{ h2: Divider, a: InlineLink, ...components }} />
}

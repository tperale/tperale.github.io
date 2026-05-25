import "./Link.css"
import { usePageContext } from "vike-react/usePageContext"

export function PageLink({
  href,
  children,
}: {
  href: string
  children: string
}) {
  const pageContext = usePageContext()
  const { urlPathname } = pageContext
  const isActive =
    href === "/" ? urlPathname === href : urlPathname.startsWith(href)
  return (
    <a href={href} className={isActive ? "link is-active" : "link"}>
      {children}
    </a>
  )
}

export function InlineLink({
  href,
  children,
}: {
  href: string
  children: string
}) {
  return (
    <a href={href} className="inline-link" target="#">
      {children}
    </a>
  )
}

import "./NavBar.css"
import { PageLink } from "./Link"

interface NavBarLink {
  label: string
  href: string
}

export function NavBar({ items }: { items: NavBarLink[] }) {
  return (
    <div className="navbar">
      {items.map(({ label, href }) => (
        <PageLink className="navbar-link" key={`${href}-${label}`} href={href}>
          {label}
        </PageLink>
      ))}
    </div>
  )
}

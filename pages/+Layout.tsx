import "./Layout.css"
import { usePageContext } from "vike-react/usePageContext"

import { Header } from "../components/Header"
import { NavBar } from "../components/NavBar"
import { Content } from "../components/Content"

const LINKS = [
  { label: "/", href: "/" },
  { label: "Hyperlinks", href: "/links" },
  { label: "About", href: "/abouts" },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const pageContext = usePageContext()
  const { urlPathname } = pageContext

  return (
    <div className="container">
      <Header>{`:/${urlPathname}`}</Header>
      <NavBar items={LINKS} />
      <Content>{children}</Content>
    </div>
  )
}

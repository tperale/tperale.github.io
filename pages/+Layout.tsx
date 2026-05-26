import "./Layout.css"

import { Header } from "../components/Header"
import { NavBar } from "../components/NavBar"
import { Content } from "../components/Content"

const LINKS = [
  { label: "/", href: "/" },
  { label: "Hyperlinks", href: "/links" },
  { label: "About", href: "/abouts" },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container">
      <Header>{"://"}</Header>
      <NavBar items={LINKS} />
      <Content>{children}</Content>
    </div>
  )
}

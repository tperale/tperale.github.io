import logoUrl from "../assets/logo.svg"
import { usePageContext } from "vike-react/usePageContext"

export function Head() {
  const pageContext = usePageContext()
  const { urlPathname } = pageContext

  return (
    <>
      <link rel="icon" href={logoUrl} />
      <title>{`:/${urlPathname}`}</title>
      <meta content={`:/${urlPathname}`} property="og:title" />
      <meta content="website" property="og:type" />
    </>
  )
}

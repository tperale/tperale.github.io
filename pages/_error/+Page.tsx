import { usePageContext } from "vike-react/usePageContext"
import { Title } from "../../components/Title"

export default function Page() {
  const { is404 } = usePageContext()
  if (is404) {
    return (
      <>
        <Title>Page Not Found</Title>
        <p>This page could not be found.</p>
      </>
    )
  }
  return (
    <>
      <Title>Internal Error</Title>
      <p>Something went wrong.</p>
    </>
  )
}

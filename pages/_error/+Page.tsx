import { usePageContext } from "vike-react/usePageContext"

export default function Page() {
  const { is404 } = usePageContext()
  if (is404) {
    return (
      <>
        <h1>PAGE NOT FOUND</h1>
        <p>This page could not be found.</p>
      </>
    )
  }
  return (
    <>
      <h1>INTERNAL ERROR</h1>
      <p>Something went wrong.</p>
    </>
  )
}

import Content from "./Content.mdx"
import { useData } from "vike-react/useData"
import type { Data } from "./+data"
import { MdxContent } from "../../components/Content"
import { Divider } from "../../components/Divider"
import { SectionNav } from "../../components/SectionNav"

export default function Page() {
  const { sections } = useData<Data>()
  return (
    <>
      <Divider position="right">Tags</Divider>
      <SectionNav sections={sections} />
      <MdxContent>{Content}</MdxContent>
    </>
  )
}

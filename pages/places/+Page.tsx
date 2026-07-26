import img from "./firminy/drawing.svg"
import { Divider } from "../../components/Divider"
import {
  CardContainer,
  Card,
  CardDate,
  CardImg,
  CardContent,
  CardTitle,
  CardSubtitle,
  CardLink,
} from "../../components/Card"
import { CardAsLink } from "../../components/Link"

import { Header as VeniceHeader } from "./venice/+Page"
import { Header as FirminyHeader } from "./firminy/+Page"

export default function Page() {
  return (
    <>
      <Divider>Cool places & photos</Divider>
      <CardAsLink href="/places/venice">
        <VeniceHeader />
        <span style={{ position: "absolute", right: "1rem", bottom: "0.5rem" }}>
          <CardLink href="/places/venice">Visit</CardLink>
        </span>
      </CardAsLink>
    </>
  )
}

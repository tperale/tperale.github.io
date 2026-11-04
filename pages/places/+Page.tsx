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
import type { PlacePage } from "./types"

import * as Venice from "./venice"

function PlaceLink({ href, subpage }: { href: string; subpage: PlacePage }) {
  return (
    <CardAsLink href={href}>
      <subpage.Header />
      <span style={{ position: "absolute", right: "1rem", bottom: "0.5rem" }}>
        <CardLink href={href}>Visit</CardLink>
      </span>
    </CardAsLink>
  )
}

export default function Page() {
  return (
    <>
      <Divider>Cool places & photos</Divider>
      <PlaceLink href="/places/venice" subpage={Venice} />
    </>
  )
}

import { Divider } from "../../components/Divider"
import { CardLink } from "../../components/Card"
import { CardAsLink } from "../../components/Link"
import type { PlacePage } from "./types"

import * as Venice from "./venice"
import * as Scarpa from "./carlo-scarpa"

function PlaceLink({ href, subpage }: { href: string; subpage: PlacePage }) {
  return (
    <CardAsLink href={href}>
      <subpage.Header />
      <span style={{ position: "absolute", right: "1rem", bottom: "0.5rem" }}>
        <CardLink>Visit</CardLink>
      </span>
    </CardAsLink>
  )
}

export default function Page() {
  return (
    <>
      <PlaceLink href="/places/venice" subpage={Venice} />
      <PlaceLink href="/places/carlo-scarpa" subpage={Scarpa} />
    </>
  )
}

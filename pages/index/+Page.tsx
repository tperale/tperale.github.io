import {
  Card,
  CardContainer,
  CardTitle,
  CardDescription,
  CardLink,
} from "../../components/Card"
import { CardAsLink } from "../../components/Link"

export default function Page() {
  return (
    <>
      <CardAsLink href="/places">
        <CardContainer columns={3}>
          <Card span={3}>
            <CardTitle>Places</CardTitle>
            <CardDescription>
              Place I visited, with location I want to save.
            </CardDescription>
            <CardLink href="/links">Visit</CardLink>
          </Card>
        </CardContainer>
      </CardAsLink>
      <CardAsLink href="/links">
        <CardContainer columns={3}>
          <Card span={3}>
            <CardTitle>Hyperlinks</CardTitle>
            <CardDescription>
              Links to things I liked, find useful, want to bookmark.
            </CardDescription>
            <CardLink href="/links">Visit</CardLink>
          </Card>
        </CardContainer>
      </CardAsLink>
      <CardAsLink href="/abouts">
        <CardContainer columns={3}>
          <Card span={3}>
            <CardTitle>About</CardTitle>
            <CardDescription>
              About this website. Font & open-source library used.
            </CardDescription>
            <CardLink href="/abouts">Visit</CardLink>
          </Card>
        </CardContainer>
      </CardAsLink>
    </>
  )
}

import { Card, CardContainer, CardTitle, CardDescription, CardLink } from "../../components/Card"
import { SvgMask } from "../../components/SvgMask"
import sideBannerSvg from "../../assets/side-banner.svg"

export default function Page() {
  return (
    <CardContainer>
      <Card>
        <CardTitle>Hyperlinks</CardTitle>
        <CardDescription>Links to things I liked, find useful, want to bookmark.</CardDescription>
        <CardLink href="/links">Visit</CardLink>
      </Card>
      <Card>
        <CardTitle>About</CardTitle>
        <CardDescription>About this website. Font & open-source library used.</CardDescription>
        <CardLink href="/abouts">Visit</CardLink>
      </Card>
    </CardContainer>
  )
}

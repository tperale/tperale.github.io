import { Card } from "../../components/Card"

export default function Page() {
  return (
    <>
      <div className="card-container">
        <Card
          title="Hyperlinks"
          description="Links to things I liked, find useful."
          href="/links"
        />
        <Card
          title="About"
          description="About this website. Font & open-source library used."
          href="/abouts"
        />
      </div>
    </>
  )
}

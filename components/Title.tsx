import "./Title.css"

interface TitleProps {
  children: string
}

export function Title({ children }: TitleProps) {
  return (
    <div className="title title-background">
      <h1 className="title-content">{children.toUpperCase()}</h1>
    </div>
  )
}

export function SubTitle({ children }: TitleProps) {
  return (
    <div className="title">
      <h2 className="title-content">{children.toUpperCase()}</h2>
    </div>
  )
}

import "./Card.css"
import type { PropsWithChildren, CSSProperties } from "react"

export function CardContent({ children }: PropsWithChildren) {
  return <div className="card-content">{children}</div>
}

type CardBadgeProps = PropsWithChildren<{
  onHover?: React.ReactNode
  styleName?: string
  style?: CSSProperties
}>

export function CardBadgeOnHover({ children }: CardBadgeProps) {
  return <span className="card-badge__hover">{children}</span>
}

export function CardBadgeOnNoHover({ children }: CardBadgeProps) {
  return <span className="card-badge__no-hover">{children}</span>
}

export function CardBadge({ children, styleName, style }: CardBadgeProps) {
  return (
    <div
      className={["card-badge", styleName].filter(Boolean).join(" ")}
      style={style}
    >
      {children}
    </div>
  )
}

export function CardTitle({ children }: PropsWithChildren) {
  return <div className="card-title">{children}</div>
}

export function CardSubtitle({ children }: PropsWithChildren) {
  return <div className="card-subtitle">{children}</div>
}

export function CardDescription({ children }: PropsWithChildren) {
  return <div className="card-description">{children}</div>
}

export function CardAuthor({ children }: PropsWithChildren) {
  return <div className="card-author">{children}</div>
}

export function CardDate({ children }: PropsWithChildren) {
  return <div className="card-date">{children}</div>
}

type CardLinkProps = PropsWithChildren<{
  href?: string
}>

export function CardLink({ href, children }: CardLinkProps) {
  if (href) {
    return (
      <div>
        <a href={href} className="card-link">
          {children}
        </a>
      </div>
    )
  } else {
    return (
      <div>
        <span className="card-link">{children}</span>
      </div>
    )
  }
}

type CardImgProps = {
  src?: string
  alt?: string
  dotted?: boolean
  children?: React.ReactNode
}

export function CardImg({ src, alt, dotted, children }: CardImgProps) {
  return (
    <div className={`card-image-wrapper ${dotted ? "card-image-dotted" : ""}`}>
      {src ? <img src={src} alt={alt} /> : children}
    </div>
  )
}

type CardProps = PropsWithChildren<{
  span: number
}>

export function Card({ children, span = 1 }: CardProps) {
  const style = {
    "--card-span": span
  }

  return (
    <div className="card" style={style}>
      {children}
    </div>
  )
}

type CardContainerProps = PropsWithChildren<{
  columns?: number
  padding?: string
}>

export function CardContainer({
  children,
  columns,
  padding = "0",
}: CardContainerProps) {
  const style = {
    padding,
    ...(columns ? { "--card-columns": columns } : {})
  }

  return (
    <div className="card-container" style={style}>
      {children}
    </div>
  )
}

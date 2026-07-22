import "./Card.css"

type CardContentProps = {
  children: React.ReactNode
}

export function CardContent({ children }: CardContentProps) {
  return <div className="card-content">{children}</div>
}

type CardBadgeProps = {
  children: React.ReactNode
  onHover?: React.ReactNode
  styleName?: string
  style?: React.CSSProperties
}

export function CardBadgeOnHover({ children }: CardBadgeProps) {
  return <span className="card-badge__hover">{children}</span>
}

export function CardBadgeOnNoHover({ children }: CardBadgeProps) {
  return <span className="card-badge__no-hover">{children}</span>
}

export function CardBadge({
  children,
  styleName,
  style,
}: CardBadgeProps) {
  return (
    <div
      className={["card-badge", styleName].filter(Boolean).join(" ")}
      style={style}
    >
      {children}
    </div>
  )
}

type CardTitleProps = {
  children: React.ReactNode
}

export function CardTitle({ children }: CardTitleProps) {
  return <div className="card-title">{children}</div>
}

type CardSubtitleProps = {
  children: React.ReactNode
}

export function CardSubtitle({ children }: CardSubtitleProps) {
  return <div className="card-subtitle">{children}</div>
}

type CardDescriptionProps = {
  children: React.ReactNode
}

export function CardDescription({ children }: CardDescriptionProps) {
  return <div className="card-description">{children}</div>
}

type CardAuthorProps = {
  children: React.ReactNode
}

export function CardAuthor({ children }: CardAuthorProps) {
  return <div className="card-author">{children}</div>
}

type CardDateProps = {
  children: React.ReactNode
}

export function CardDate({ children }: CardDateProps) {
  return <div className="card-date">{children}</div>
}

type CardLinkProps = {
  href: string
  children: React.ReactNode
}

export function CardLink({ href, children }: CardLinkProps) {
  return (
    <div>
      <a href={href} className="card-link">
        {children}
      </a>
    </div>
  )
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

type CardProps = {
  children: React.ReactNode
  span?: number
}

export function Card({ children, span = 1 }: CardProps) {
  return (
    <div className="card" style={{ "--card-span": span }}>
      {children}
    </div>
  )
}

type CardContainerProps = {
  children: React.ReactNode
  columns?: number
}

export function CardContainer({ children, columns = 3 }: CardContainerProps) {
  return (
    <div className="card-container" style={{ "--card-columns": columns }}>
      {children}
    </div>
  )
}

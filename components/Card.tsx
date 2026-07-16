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
  onHover,
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
  return <p className="card-description">{children}</p>
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
    <p>
      <a href={href} className="card-link">
        {children}
      </a>
    </p>
  )
}

type CardImgProps = {
  src?: string
  alt?: string
  children?: React.ReactNode
}

export function CardImg({ src, alt, children }: CardImgProps) {
  return (
    <div className="card-image-wrapper">
      {src ? <img src={src} alt={alt} /> : children}
    </div>
  )
}

type CardProps = {
  children: React.ReactNode
}

export function Card({ children }: CardProps) {
  return <div className="card">{children}</div>
}

type CardContainerProps = {
  children: React.ReactNode
}

export function CardContainer({ children }: CardContainerProps) {
  return <div className="card-container">{children}</div>
}

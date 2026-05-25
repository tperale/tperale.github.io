import "./Card.css"

function CardLink({ href, children }: { href: string; children: string }) {
  return (
    <a href={href} className="card-link">
      {children}
    </a>
  )
}

export type CardProps = {
  id?: string
  date: string
  image: string
  author?: string
  title: string
  subtitle?: string
  publisher?: string
  description?: string
  href?: string
}

export function Card({
  date,
  title,
  image,
  author = "",
  subtitle,
  description,
  href,
}: CardProps) {
  return (
    <div className="card">
      {date && <div className="card-date">{date}</div>}

      {image && (
        <div className="card-image-wrapper">
          <img src={image} alt={title} />
        </div>
      )}

      <div className="card-content">
        <div className="card-author">{author}</div>
        <div className="card-title">{title}</div>

        {subtitle && <div className="card-subtitle">{subtitle}</div>}

        {description && <div className="card-description">{description}</div>}

        {href && <CardLink href={href}>{"Enter"}</CardLink>}
      </div>
    </div>
  )
}

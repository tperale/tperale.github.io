import { useRef, useEffect } from "react"
import {
  useMapWithContext,
  type PointBaseData,
  type ImagePointBaseData,
} from "../../providers/MapWithContext.tsx"
import { ImgLightbox } from "../ImgLightbox"
import { SvgEye } from "../Svg"
import { Card, CardImg } from "../Card"
import { CardBadge, CardBadgeOnHover, CardBadgeOnNoHover } from "../Card"
import {
  CardDate,
  CardDescription,
  CardContent,
  CardLink,
  CardTitle,
  CardSubtitle,
  CardAuthor,
} from "../Card"
import "./ImagePoint.css"

let idCounter = 0

export type PointProps = PointBaseData

export function Point(props: PointProps) {
  const { date, title, subtitle, description, location, href, color } = props
  const { selected, points, toggle, addPoint, removePoint } =
    useMapWithContext()
  const idRef = useRef<string | null>(null)

  if (idRef.current === null) {
    idRef.current = `image-point-${idCounter++}`
  }

  const id = idRef.current

  // Register the image to the provider.
  // This is a way to receive a single index re-usable by the map component.
  useEffect(() => {
    addPoint({ id, ...props })
    return () => removePoint(id)
  }, [])

  const isSelected = selected.has(id)
  const index = points.findIndex((point) => point.id === id) + 1

  return (
    <Card>
      <CardBadge
        styleName={`map-card-badge ${isSelected ? "selected" : "not-selected"}`}
        style={
          {
            "--marker-color": color ?? "var(--color-black)",
          } as React.CSSProperties
        }
      >
        <>
          <CardBadgeOnNoHover>
            <span className="map-with-gallery-number">{index}</span>
          </CardBadgeOnNoHover>
          <CardBadgeOnHover>
            <button
              type="button"
              className="map-with-gallery-eye"
              onClick={(e) => {
                e.stopPropagation()
                toggle(id)
              }}
              aria-label={isSelected ? "Deselect" : "Select"}
            >
              <SvgEye crossed={isSelected} />
            </button>
          </CardBadgeOnHover>
        </>
      </CardBadge>
      {date ?? <CardDate>{date}</CardDate>}
      {title && <CardTitle>{title}</CardTitle>}
      {subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
      <CardContent>
        {description && <CardDescription>{description}</CardDescription>}
      </CardContent>
      {typeof(href) === "string" && <CardLink href={href}>Maps</CardLink>}
      {typeof(href) === "object" && Object.entries(href).map(([text, link]) => (<CardLink href={link}>{text}</CardLink>))}
    </Card>
  )
}

export type ImagePointProps = ImagePointBaseData

export function ImagePoint({ location, src, alt, color }: ImagePointProps) {
  const { selected, points, toggle, addPoint, removePoint } =
    useMapWithContext()
  const idRef = useRef<string | null>(null)

  if (idRef.current === null) {
    idRef.current = `image-point-${idCounter++}`
  }

  const id = idRef.current

  // Register the image to the provider.
  // This is a way to receive a single index re-usable by the map component.
  useEffect(() => {
    addPoint({ id, location, src, alt: alt ?? "", color })
    return () => removePoint(id)
  }, [])

  const isSelected = selected.has(id)
  const index = points.findIndex((point) => point.id === id) + 1

  // TODO Support passing Title and Description components.
  // TODO They will register the content to the parent provider
  // TODO when clicking on the lightbox the title and lightbox
  //  shows up in the right of under on mobile with scrollbar.

  return (
    <Card>
      <CardBadge
        styleName={`map-card-badge ${isSelected ? "selected" : "not-selected"}`}
        style={
          {
            "--marker-color": color ?? "var(--color-black)",
          } as React.CSSProperties
        }
      >
        <>
          <CardBadgeOnNoHover>
            <span className="map-with-gallery-number">{index}</span>
          </CardBadgeOnNoHover>
          <CardBadgeOnHover>
            <button
              type="button"
              className="map-with-gallery-eye"
              onClick={(e) => {
                e.stopPropagation()
                toggle(id)
              }}
              aria-label={isSelected ? "Deselect" : "Select"}
            >
              <SvgEye crossed={isSelected} />
            </button>
          </CardBadgeOnHover>
        </>
      </CardBadge>
      <CardImg>
        <ImgLightbox src={src} alt={alt ?? ""} />
      </CardImg>
    </Card>
  )
}

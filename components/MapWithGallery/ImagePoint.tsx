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

function useMapPoint<T extends { color?: string }>(point: T) {
  const { selected, points, toggle, addPoint, removePoint } =
    useMapWithContext()

  const idRef = useRef<string>()

  if (!idRef.current) {
    idRef.current = `map-point-${idCounter++}`
  }

  const id = idRef.current

  useEffect(() => {
    addPoint({ id, ...point })
    return () => removePoint(id)
  }, [])

  return {
    id,
    isSelected: selected.has(id),
    index: points.findIndex((p) => p.id === id) + 1,
    toggle: () => toggle(id),
  }
}

type MapBadgeProps = {
  color?: string
  index: number
  isSelected: boolean
  onToggle(): void
}

function MapBadge({ color, index, isSelected, onToggle }: MapBadgeProps) {
  return (
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
              onToggle()
            }}
          >
            <SvgEye crossed={isSelected} />
          </button>
        </CardBadgeOnHover>
      </>
    </CardBadge>
  )
}

type MapCardProps = {
  point: PointBaseData | ImagePointBaseData
  children: React.ReactNode
}

function MapCard({ point, children }: MapCardProps) {
  const { color } = point
  const { index, isSelected, toggle } = useMapPoint(point)

  return (
    <Card>
      <MapBadge
        color={color}
        index={index}
        isSelected={isSelected}
        onToggle={toggle}
      />
      {children}
    </Card>
  )
}

function PointContent(props: PointProps) {
  const { date, title, subtitle, description, href } = props

  return (
    <>
      {date && <CardDate>{date}</CardDate>}
      {title && <CardTitle>{title}</CardTitle>}
      {subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}

      <CardContent>
        {description && <CardDescription>{description}</CardDescription>}
      </CardContent>

      {typeof href === "string" && <CardLink href={href}>Maps</CardLink>}
      {typeof href === "object" &&
        Object.entries(href).map(([text, link]) => (
          <CardLink key={`cardlink-${text}-${href}`} href={link}>
            {text}
          </CardLink>
        ))}
    </>
  )
}

export function Point(props: PointProps) {
  return (
    <MapCard point={props}>
      <PointContent {...props} />
    </MapCard>
  )
}

export type ImagePointProps = ImagePointBaseData

function ImagePointContent(props: ImagePointProps) {
  const { src, alt } = props

  return (
    <CardImg>
      <ImgLightbox src={src} alt={alt ?? ""} />
    </CardImg>
  )
}

export function ImagePoint(props: ImagePointProps) {
  return (
    <MapCard point={props}>
      <ImagePointContent {...props} />
    </MapCard>
  )
}

type ImageWithDescPointProps = PointBaseData & ImagePointBaseData

export function ImageWithDescPoint(props: ImageWithDescPointProps) {
  return (
    <MapCard point={props}>
      <ImagePointContent {...props} />
      <PointContent {...props} />
    </MapCard>
  )
}

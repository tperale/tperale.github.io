import type { PropsWithChildren, CSSProperties } from "react"

import "./Layout.css"

type SectionProps = PropsWithChildren

export function Section({ children }: SectionProps) {
  return <section className="layout-section">{children}</section>
}

type StickyColumnProps = PropsWithChildren<{
  style?: CSSProperties
}>

export function StickyColumn({ children, style }: StickyColumnProps) {
  return (
    <div style={style} className="layout-colum layout-colum-sticky">
      <picture>{children}</picture>
    </div>
  )
}

type ColumnProps = PropsWithChildren

export function Column({ children }: ColumnProps) {
  return <div className="layout-colum">{children}</div>
}

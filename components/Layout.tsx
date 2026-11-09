import type { PropsWithChildren, CSSProperties } from "react"

import "./Layout.css"

export function Section({ children }: PropsWithChildren) {
  return <section className="layout-section">{children}</section>
}

type ColumnProps = PropsWithChildren<{
  style?: CSSProperties
}>

export function StickyColumn({ children, style }: ColumnProps) {
  return (
    <div style={style} className="layout-colum layout-colum-sticky">
      <picture>{children}</picture>
    </div>
  )
}

export function Column({ children, style }: ColumnProps) {
  return (
    <div style={style} className="layout-colum">
      {children}
    </div>
  )
}

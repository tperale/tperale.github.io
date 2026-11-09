import "./Layout.css"

export function Section({ children }) {
  return <section className="layout-section">{children}</section>
}

export function StickyColumn({ children, style }) {
  return (
    <div style={style} className="layout-colum layout-colum-sticky">
      <picture>{children}</picture>
    </div>
  )
}

export function Column({ children }) {
  return <div className="layout-colum">{children}</div>
}

import type { ReactNode } from "react"
import { toId } from "./utils"

export function Divider({
  children,
  position = "left",
}: {
  children: ReactNode
  position?: "left" | "right"
}) {
  return (
    <div
      id={toId(String(children))}
      style={{
        marginTop: "1.5rem",
        width: "100%",
        borderTop: "1px solid black",
      }}
    >
      <span
        style={{
          padding: "0.2rem",
          position: "relative",
          top: "-10px",
          ...(position === "right"
            ? { right: "20px", float: "right" }
            : { left: "20px" }),
          border: "1px solid black",
          backgroundColor: "white",
        }}
      >
        {children}
      </span>
    </div>
  )
}

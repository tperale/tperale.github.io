import "./Header.css"
import bannerSvg from "../assets/banner.svg"

interface HeaderProps {
  children: React.ReactNode
  backgroundColor?: string
  imageColor?: string
}

export function Header({
  children,
  backgroundColor = "grey",
  imageColor = "AntiqueWhite",
}: HeaderProps) {
  return (
    <div
      id="sidebar"
      className="header"
      style={{
        position: "relative",
        display: "flex",
        height: 120,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: imageColor,
          WebkitMaskImage: `url("${bannerSvg}")`,
          maskImage: `url("${bannerSvg}")`,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
          WebkitMaskSize: "cover",
          maskSize: "cover",
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  )
}

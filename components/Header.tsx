import "./Header.css"
import bannerSvg from "../assets/banner.svg"
import { SvgMask } from "./SvgMask"

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
    <div id="sidebar" className="header">
      <SvgMask
        svg={bannerSvg}
        backgroundColor={backgroundColor}
        imageColor={imageColor}
        height={150}
      >
        {children}
      </SvgMask>
    </div>
  )
}

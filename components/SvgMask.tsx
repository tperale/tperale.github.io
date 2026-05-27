interface SvgMaskProps {
  svg: string
  height: number 
  backgroundColor?: string
  imageColor?: string
  children?: React.ReactNode
}

export function SvgMask({
  svg,
  backgroundColor = "grey",
  imageColor = "AntiqueWhite",
  height,
  children,
}: SvgMaskProps) {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor,
        height: height,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: imageColor,
          WebkitMaskImage: `url("${svg}")`,
          maskImage: `url("${svg}")`,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
          WebkitMaskSize: "cover",
          maskSize: "cover",
        }}
      />
      {children && (
        <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
      )}
    </div>
  )
}

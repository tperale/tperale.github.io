import { useState, useCallback, useEffect } from "react"
import "./ImgLightbox.css"

type ImgLightboxProps = {
  src: string
  alt: string
  className?: string
}

function LightboxOverlay({
  src,
  alt,
  onClose,
}: {
  src: string
  alt: string
  onClose: () => void
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [onClose])

  return (
    <button type="button" className="img-lightbox-overlay" onClick={onClose}>
      <div className="img-lightbox-content img-lightbox-mat" role="dialog">
        <img src={src} alt={alt} />
        <span className="img-lightbox-close">&times;</span>
      </div>
    </button>
  )
}

export function ImgLightbox({ src, alt, className }: ImgLightboxProps) {
  const [isOpen, setIsOpen] = useState(false)
  const openLightbox = useCallback(() => setIsOpen(true), [])
  const closeLightbox = useCallback(() => setIsOpen(false), [])

  return (
    <>
      <button
        type="button"
        className={["img-lightbox-trigger", className]
          .filter(Boolean)
          .join(" ")}
        onClick={openLightbox}
      >
        <img src={src} alt={alt} />
      </button>
      {isOpen && (
        <LightboxOverlay src={src} alt={alt} onClose={closeLightbox} />
      )}
    </>
  )
}

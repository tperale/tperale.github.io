import { useState, useRef, useEffect } from "react"
import maplibregl from "maplibre-gl"
import "maplibre-gl/dist/maplibre-gl.css"
import { useMapWithContext } from "../../providers/MapWithContext.tsx"
import "./MapComponent.css"

type MapComponentProps = {
  style: maplibregl.StyleSpecification
  center: [number, number]
  zoom: number
}

export function MapComponent({ style, center, zoom }: MapComponentProps) {
  const { points, selected, toggle } = useMapWithContext()
  const [loaded, setLoaded] = useState(false)
  // Keep of the map container
  const mapContainer = useRef<HTMLDivElement>(null)
  const mapRef = useRef<maplibregl.Map | null>(null)
  // Keep track of the markers based on 'id'.
  const markersRef = useRef<Map<string, maplibregl.Marker>>(new Map())

  useEffect(() => {
    if (!mapContainer.current || mapRef.current) return

    const map = new maplibregl.Map({
      container: mapContainer.current,
      style,
      center,
      zoom,
    })

    map.addControl(new maplibregl.NavigationControl(), "top-right")

    map.on("load", () => setLoaded(true))
    mapRef.current = map

    return () => {
      map.remove()
      mapRef.current = null
      markersRef.current = new Map()
      setLoaded(false)
    }
  }, [style, center, zoom])

  useEffect(() => {
    const map = mapRef.current
    if (!map || !loaded) return

    const prevIds = new Set(markersRef.current.keys())
    const nextIds = new Set(points.map((p) => p.id))

    // Verify that the markers are still present in the point list.
    // Delete markers no longer present.
    prevIds.forEach((id) => {
      if (!nextIds.has(id)) {
        markersRef.current.get(id)?.remove()
        markersRef.current.delete(id)
      }
    })

    points.forEach((point, index) => {
      // If marker is not present yet.
      if (!markersRef.current.has(point.id)) {
        const el = document.createElement("div")
        el.className = "map-component-marker not-selected"
        el.style.setProperty(
          "--marker-color",
          point.color ?? "var(--color-black)",
        )
        el.textContent = String(++index)
        el.addEventListener("click", () => toggle(point.id))

        const marker = new maplibregl.Marker({ element: el })
          .setLngLat(point.location)
          .addTo(map)

        markersRef.current.set(point.id, marker)
      }
    })
  }, [loaded, points, toggle])

  // Change the marker style based on selection.
  useEffect(() => {
    markersRef.current.forEach((marker, id) => {
      const el = marker.getElement()
      if (selected.has(id)) {
        el.classList.add("selected")
        el.classList.remove("not-selected")
      } else {
        el.classList.add("not-selected")
        el.classList.remove("selected")
      }
    })
  }, [selected])

  return <div ref={mapContainer} className="map-component-map" />
}

import {
  useState,
  useCallback,
  createContext,
  useContext,
  type ReactNode,
} from "react"

export type PointBaseData = {
  location: [number, number]
  title?: string
  subtitle?: string
  description?: string
  date?: string
  color?: string
  href?: string
  tags: string[]
}

export type ImagePointBaseData = PointBaseData & {
  src: string
  alt?: string
}

type PointData = ImagePointBaseData & {
  id: string
}

export type MapContextValue = {
  selected: Set<string>
  points: Array<PointData>
  toggle: (id: string) => void
  addPoint: (data: PointData) => void
  removePoint: (data: PointData["id"]) => void
}

export const MapContext = createContext<MapContextValue | null>(null)

export function useMapWithContext() {
  const ctx = useContext(MapContext)
  if (!ctx) throw new Error("ImagePoint must be used within MapContextProvider")
  return ctx
}

export function MapWithContextProvider({ children }: { children: ReactNode }) {
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [points, setPoint] = useState<Array<PointData>>([])

  const toggle = useCallback((id: string) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }, [])

  // TODO remove and use better suited logic
  const addPoint = useCallback((point: PointData) => {
    setPoint((prev) => {
      return [...prev, point]
    })
  }, [])

  const removePoint = useCallback((point: PointData["id"]) => {
    setPoint((prev) => {
      return prev.filter(({ id }) => id !== point)
    })
  }, [])

  return (
    <MapContext.Provider
      value={{ selected, points, toggle, addPoint, removePoint }}
    >
      {children}
    </MapContext.Provider>
  )
}

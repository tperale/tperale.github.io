export type SvgEyeProps = {
  crossed: boolean
}

export function SvgEye({ crossed }: SvgEyeProps) {
  const label = crossed ? "Deselect" : "Select"
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="16"
      height="16"
      role="img"
      aria-label={label}
    >
      <title>{label}</title>
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
      {crossed && <line x1="1" y1="1" x2="23" y2="23" />}
    </svg>
  )
}

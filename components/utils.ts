export function toId(title: string): string {
  return title.toLowerCase().replace(/\s+/g, "-")
}

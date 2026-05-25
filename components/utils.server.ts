import fs from "node:fs"
import path from "node:path"

export function readPageContent(pageDir: string): string[] {
  const content = fs.readFileSync(
    path.join(process.cwd(), "pages", pageDir, "Content.mdx"),
    "utf-8",
  )
  return content
    .split("\n")
    .filter((line) => /^## /.test(line))
    .map((line) => line.slice(3).trim())
}

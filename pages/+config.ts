import type { Config } from "vike/types"
import vikeReact from "vike-react/config"

// https://vike.dev/config

export default {
  title: "://",
  description: "Bits and things",
  prerender: true,

  extends: [vikeReact],
} satisfies Config

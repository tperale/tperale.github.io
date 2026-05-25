import { readPageContent } from "../../components/utils.server"

export type Data = {
  sections: string[]
}

export async function data(): Promise<Data> {
  return { sections: readPageContent("abouts") }
}

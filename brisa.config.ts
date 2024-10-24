import type { Configuration } from 'brisa'
import brisaPandaCSS from 'brisa-pandacss'

export default {
  integrations: [brisaPandaCSS()],
  assetCompression: true,
} satisfies Configuration

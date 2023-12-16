import { createRequestHandler } from '@netlify/remix-adapter'
import * as build from '@remix-run/dev/server-build'

const handler = createRequestHandler({
  build,
  mode: process.env.NODE_ENV,
})

export default handler
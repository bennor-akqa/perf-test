import { NextRequest, NextResponse } from 'next/server'

export const config = {
  runtime: 'edge'
}

export default function handler(
  _request: NextRequest,
) {
  return new NextResponse(JSON.stringify({ name: 'perf-test' }), {
    'headers': {
      'content-type': 'application/json'
    }
  })
}

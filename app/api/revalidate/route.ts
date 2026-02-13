import { revalidate } from '@/lib/shopify/revalidate'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  return revalidate(request)
}

// Only allow POST requests
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}

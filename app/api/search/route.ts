import { getProducts } from '@/lib/shopify'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('q')
    const sortKey = searchParams.get('sort')
    const reverse = searchParams.get('reverse') === 'true'

    if (!query) {
      return NextResponse.json(
        { error: 'Search query required' },
        { status: 400 }
      )
    }

    const products = await getProducts({
      query: query,
      sortKey: sortKey || undefined,
      reverse: reverse,
    })

    return NextResponse.json({
      success: true,
      count: products.length,
      products,
    })
  } catch (error) {
    console.error('Search API error:', error)
    return NextResponse.json(
      { error: 'Failed to search products' },
      { status: 500 }
    )
  }
}

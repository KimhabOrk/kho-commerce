'use client'

import { useEffect } from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

export function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Error caught by boundary:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
          Something went wrong
        </h1>
        <p className="text-muted-foreground mb-6">
          We encountered an unexpected error. Please try again or return to the home page.
        </p>
        {error.message && (
          <p className="text-sm text-muted-foreground mb-6 bg-secondary p-3 rounded">
            {error.message}
          </p>
        )}
        <div className="flex gap-4 justify-center">
          <Button onClick={reset} size="lg">
            Try Again
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/">Go Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

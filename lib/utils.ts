import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function ensureStartsWith(stringToCheck: string, stringToFind: string): string {
  return stringToCheck.startsWith(stringToFind) ? stringToCheck : `${stringToFind}${stringToCheck}`;
}

export function getShopifyProductId(globalId: string) {
  const segments = globalId.split('/')
  return segments.pop() ?? globalId
}

export function createUrl(pathname: string, searchParams?: URLSearchParams): string {
  const url = new URL(pathname, 'http://localhost');
  if (searchParams) {
    url.search = searchParams.toString();
  }
  return url.pathname + url.search;
}

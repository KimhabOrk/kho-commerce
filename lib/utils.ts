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

export const validateEnvironmentVariables = () => {
  const requiredEnvironmentVariables = ['NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN', 'NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN'];
  const missingEnvironmentVariables = [] as string[];

  requiredEnvironmentVariables.forEach((envVar) => {
    if (!process.env[envVar]) {
      missingEnvironmentVariables.push(envVar);
    }
  });

  if (missingEnvironmentVariables.length) {
    throw new Error(
      `The following environment variables are missing. Your site will not work without them. Read more: https://vercel.com/docs/integrations/shopify#configure-environment-variables\n\n${missingEnvironmentVariables.join(
        '\n'
      )}\n`
    );
  }

  if (
    process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN?.includes('[') ||
    process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN?.includes(']')
  ) {
    throw new Error(
      'Your `NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN` environment variable includes brackets (ie. `[` and / or `]`). Your site will not work with them there. Please remove them.'
    );
  }
};

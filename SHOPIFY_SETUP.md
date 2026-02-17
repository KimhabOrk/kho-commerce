# Shopify Integration Setup Guide

This application is now configured to use **Shopify Storefront API exclusively** as the primary data source. All fallback/mock product data has been removed.

## Environment Configuration

The application requires two environment variables to be set in `.env.local`:

### Required Variables

```env
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
SHOPIFY_STOREFRONT_ACCESS_TOKEN=your_access_token_here
```

### Optional Variables (for webhooks)

```env
SHOPIFY_REVALIDATION_SECRET=your_webhook_secret
```

## Current Configuration

Your `.env.local` file is currently set to:

```
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=kimhab-ork.myshopify.com
SHOPIFY_STOREFRONT_ACCESS_TOKEN=67dea156fe01dc925cdf4d956bea9d0c
```

## Routing Changes

The application now uses product **handles** (slugs) instead of product IDs for routing:

- **Old Route**: `/product/[id]` 
- **New Route**: `/product/[handle]` ✅

This ensures seamless integration with Shopify's product structure.

## Data Flow

1. **Product Grid** (`/components/product-grid.tsx`)
   - Fetches products from `getProducts()` Shopify API
   - Transforms Shopify products to use `handle` for routing
   - Shows error message if Shopify API is unavailable

2. **Product Page** (`/app/product/[handle]/page.tsx`)
   - Fetches single product using `getProduct(handle)` 
   - Displays full product details with gallery
   - Uses ProductProvider for variant selection

3. **Collections** (`/app/collections/[handle]/page.tsx`)
   - Fetches collections and products from Shopify
   - Maps products with proper handles for routing

## Troubleshooting

### "Unable to load products from Shopify"

This error appears when:
1. `SHOPIFY_STOREFRONT_ACCESS_TOKEN` is not set or is invalid
2. `NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN` is incorrect
3. Shopify API is unreachable

**Solution**: 
- Verify your Shopify API token is valid
- Ensure your store domain is correct (check Shopify admin settings)
- Check that your token has the required API scopes

### Products not appearing

1. Verify products exist in your Shopify store
2. Check that products have proper titles and handles
3. Ensure featured images are set for products

## API Endpoints Used

- `getProducts()` - Fetches all products with pagination
- `getProduct(handle)` - Fetches single product details
- `getCollections()` - Fetches store collections
- `getCollectionProducts(handle)` - Fetches products in a collection

## Components Removed

The following fallback/mock data has been completely removed:
- Fallback products in `ProductGrid`
- Fallback products in product page
- Fallback collections in Collections page
- All hardcoded test product data

## Next Steps

1. Generate a valid Shopify Storefront API access token from your Shopify admin
2. Update the `SHOPIFY_STOREFRONT_ACCESS_TOKEN` in your deployment environment
3. Test all routes to ensure products load correctly

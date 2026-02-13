# Thudarum - Minimalist Fashion E-commerce

A modern Next.js e-commerce application integrated with Shopify Storefront API.

## Project Structure

\`\`\`
app/                  # Next.js app router pages and layouts
├── layout.tsx       # Root layout with Header and Footer
├── page.tsx         # Homepage
├── shop/            # Product shop page
├── product/[id]/    # Dynamic product detail page
├── cart/            # Shopping cart
├── checkout/        # Checkout page
├── collections/     # Product collections
├── about/           # About page
└── profile/         # User profile page

components/         # Reusable React components
├── header.tsx       # Navigation header
├── footer.tsx       # Footer component
├── product-grid.tsx # Product grid display
├── product-card.tsx # Individual product card
├── product-detail.tsx
├── cart-provider.tsx
└── ui/              # shadcn/ui components

lib/                # Utility and API functions
├── shopify/        # Shopify API integration
│   ├── index.ts         # Main API wrapper
│   ├── types.ts         # TypeScript definitions
│   ├── revalidate.ts    # Webhook revalidation handler
│   ├── queries/         # GraphQL query files
│   └── mutations/       # GraphQL mutation files
├── constants.ts     # App-wide constants
├── type-guards.ts   # Runtime type validation
└── utils.ts         # Utility functions

public/            # Static assets and images
\`\`\`

## Setup Instructions

### 1. Environment Variables

Create a `.env.local` file in the project root:

\`\`\`env
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
SHOPIFY_STOREFRONT_ACCESS_TOKEN=shpat_xxxxxxxxxxxxx
SHOPIFY_REVALIDATION_SECRET=your-secure-random-string
\`\`\`

### 2. Get Shopify Credentials

1. **Store Domain**: Found in Shopify Admin > Settings > Business
   - Format: `your-store.myshopify.com`

2. **Storefront Access Token**:
   - Go to Shopify Admin > Settings > Apps and integrations > Develop apps
   - Create a new app, enable Storefront API access
   - Set scopes: `unauthenticated_read_product_listings`, `unauthenticated_read_products`, `unauthenticated_read_checkouts`, `unauthenticated_read_customer_orders`
   - Generate and copy the access token

3. **Revalidation Secret**:
   - Generate a secure random string (use: `openssl rand -base64 32`)

### 3. Install Dependencies

\`\`\`bash
npm install
\`\`\`

### 4. Run Development Server

\`\`\`bash
npm run dev
\`\`\`

Visit [http://localhost:3000](http://localhost:3000)

## Key Features

- **Shopify Integration**: Real-time product catalog from Shopify Storefront API
- **Responsive Design**: Mobile-first minimalist design
- **Server Components**: Next.js 16 App Router with server-side data fetching
- **Type Safety**: Full TypeScript support with type guards
- **Caching**: Next.js native caching with webhook-based revalidation
- **Cart Management**: Context-based shopping cart
- **Modular Components**: Reusable Header and Footer components

## Shopify API Integration

The app uses Shopify's Storefront GraphQL API for:

- Product queries (single, multiple, by collection)
- Collection queries
- Cart operations (create, add items, remove items, update)
- Product recommendations
- Menu queries

All API calls are wrapped in a `shopifyFetch` function that:
- Includes authentication headers
- Handles errors gracefully
- Supports caching and revalidation tags
- Provides type-safe responses

## Webhook Revalidation

Configure webhooks in Shopify Admin:

1. Go to Settings > Apps and integrations > Webhooks
2. Create webhooks for:
   - `products/update`, `products/create`, `products/delete`
   - `collections/update`, `collections/create`
3. Set URL to: `https://your-domain.com/api/revalidate`
4. Include `x-shopify-revalidation-secret` header with your secret

## File Organization

- **No duplicate files**: Consolidated constants, types, and utilities
- **Clear separation of concerns**: Queries/mutations organized by domain
- **Type safety throughout**: All API responses are typed
- **Minimal documentation**: Focused on code clarity and inline comments

## Troubleshooting

### "Cannot destructure property 'query' of 'undefined'"
- Ensure `getProducts()` is called without required parameters
- Check that all environment variables are set correctly

### Products not loading
- Verify `SHOPIFY_STOREFRONT_ACCESS_TOKEN` is set as server-side variable (no `NEXT_PUBLIC_` prefix)
- Check Shopify API scopes are enabled in your app

### Webhook errors
- Ensure `SHOPIFY_REVALIDATION_SECRET` matches the header in requests
- Verify webhook URL is publicly accessible

## Building for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## License

MIT

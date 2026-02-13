# Kimhab Ork E-Commerce - Deployment Guide

## Pre-Deployment Checklist

### Environment Variables
- [ ] `NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN` - Set to your Shopify store domain (e.g., mystore.myshopify.com)
- [ ] `SHOPIFY_STOREFRONT_ACCESS_TOKEN` - Set to your Shopify Storefront API access token
- [ ] `SHOPIFY_REVALIDATION_SECRET` - Secret for webhook revalidation (optional, for ISR)

### Shopify Configuration
- [ ] Shopify store created and configured
- [ ] Storefront API access enabled
- [ ] Products created with proper titles, descriptions, and images
- [ ] Collections organized with appropriate handles
- [ ] Variants configured for all products (size, color, etc.)
- [ ] Menu created and configured in Shopify admin

### Code Review
- [ ] No `[v0]` console.log debug statements remain
- [ ] All environment variables referenced in code
- [ ] TypeScript builds without errors (`npm run build`)
- [ ] No unused imports or dependencies
- [ ] All error boundaries implemented for critical pages
- [ ] Fallback products display when API is unavailable

### Features Verification
- [ ] **Home Page**: Hero section and new arrivals display correctly
- [ ] **Shop Page**: Products load from Shopify, search and sort work
- [ ] **Collections**: All collections visible and queryable
- [ ] **Product Detail**: Dynamic routing works with handle-based lookups
- [ ] **Cart**: Add/remove items, quantity updates work smoothly
- [ ] **Checkout**: Cart summary displays correctly, checkout flow works
- [ ] **Collections Detail**: Individual collection pages show correct products
- [ ] **About Page**: Displays without errors
- [ ] **Header**: Navigation works, cart count updates
- [ ] **Footer**: Displays correctly with links

### Performance Optimization
- [ ] Images optimized with `next/image`
- [ ] ISR configured with appropriate revalidation times
- [ ] ProductGrid caching enabled (3600s default)
- [ ] No N+1 API queries
- [ ] Bundle size within acceptable limits

### SEO & Metadata
- [ ] Root layout metadata configured
- [ ] Product pages have dynamic metadata
- [ ] Collection pages have dynamic metadata
- [ ] Open Graph tags configured (optional)
- [ ] Sitemap generated (optional)
- [ ] robots.txt configured (optional)

### Security
- [ ] No API keys exposed in client-side code
- [ ] SHOPIFY_STOREFRONT_ACCESS_TOKEN only used server-side
- [ ] Input validation on search queries
- [ ] Cart operations validate merchandise IDs

### Testing
- [ ] Test with real Shopify products
- [ ] Test with empty cart state
- [ ] Test with no collection/products available
- [ ] Test with fallback data when API unavailable
- [ ] Test search functionality with various queries
- [ ] Test mobile responsiveness on key pages

### Browser Compatibility
- [ ] Chrome/Edge latest
- [ ] Firefox latest
- [ ] Safari latest (including iOS)
- [ ] Mobile browsers

## Deployment Steps

### Vercel Deployment
1. Connect GitHub repository to Vercel
2. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN`
   - `SHOPIFY_STOREFRONT_ACCESS_TOKEN`
3. Enable automatic deployments from main branch
4. Monitor build logs for errors

### Shopify Webhook Setup (Optional)
For automatic ISR revalidation when products are updated:
1. Go to Shopify Admin > Settings > Apps and integrations > Webhooks
2. Create webhooks for:
   - `products/update`
   - `products/delete`
   - `collections/update`
3. Point webhook URLs to `/api/webhooks/shopify` on your deployment

### DNS & Domain
1. Update domain DNS records to point to Vercel
2. Configure custom domain in Vercel dashboard
3. Enable automatic SSL certificate

## Post-Deployment Verification

### Immediate Checks
- [ ] Website loads without errors
- [ ] Home page displays with real products from Shopify
- [ ] Shop page shows all products
- [ ] Search functionality works
- [ ] Cart operations work
- [ ] Checkout flow completes

### 24-Hour Checks
- [ ] Monitor Vercel analytics for errors
- [ ] Check server logs for failed API calls
- [ ] Verify products display correct prices
- [ ] Test mobile experience on multiple devices

### Ongoing Monitoring
- [ ] Set up error tracking (Sentry, etc.)
- [ ] Monitor API response times
- [ ] Track conversion metrics
- [ ] Monitor bundle sizes

## Troubleshooting

### Products Not Showing
- Verify `NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN` matches exactly
- Verify `SHOPIFY_STOREFRONT_ACCESS_TOKEN` is valid
- Check Shopify API rate limits in admin
- Ensure products are published to Storefront

### Cart Not Working
- Verify Cart API is enabled in Shopify
- Check browser console for error messages
- Verify localStorage is not disabled

### Search Not Working
- Ensure search query is properly URL-encoded
- Verify Shopify product titles contain search terms
- Check API rate limits

### Images Not Loading
- Verify Shopify image URLs are accessible
- Check CORS settings if using external CDN
- Ensure alt text is properly set

## Rollback Procedure
If deployment has critical issues:
1. Revert to previous commit in GitHub
2. Vercel will automatically re-deploy
3. Verify site is functional before re-attempting fixes

## Support

For issues or questions:
- Check Shopify API documentation: https://shopify.dev/api/storefront
- Check Next.js documentation: https://nextjs.org
- Review application logs in Vercel dashboard

## Performance Targets

- [ ] Lighthouse Performance: > 80
- [ ] Time to First Contentful Paint: < 2s
- [ ] Cumulative Layout Shift: < 0.1
- [ ] API Response Time: < 500ms

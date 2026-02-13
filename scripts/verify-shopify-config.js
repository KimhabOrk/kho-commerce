#!/usr/bin/env node

/**
 * Verification script for Shopify configuration
 * Run: node scripts/verify-shopify-config.js
 */

const path = require('path')
const fs = require('fs')

const envFile = path.join(process.cwd(), '.env.local')
let envContent = ''

try {
  envContent = fs.readFileSync(envFile, 'utf-8')
} catch (error) {
  console.error('Error reading .env.local file:', error.message)
  process.exit(1)
}

const envVars = {}
envContent.split('\n').forEach((line) => {
  const [key, ...valueParts] = line.split('=')
  if (key && !key.startsWith('#')) {
    envVars[key.trim()] = valueParts.join('=').trim()
  }
})

console.log('\n📋 Shopify Configuration Verification\n')
console.log('=' * 50)

const required = [
  'NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN',
  'SHOPIFY_STOREFRONT_ACCESS_TOKEN',
  'SHOPIFY_REVALIDATION_SECRET',
]

let hasErrors = false

console.log('\n✓ Required Environment Variables:\n')

required.forEach((varName) => {
  const value = envVars[varName]
  const isSet = !!value && value !== `${varName}_here`
  const status = isSet ? '✅' : '❌'

  console.log(`  ${status} ${varName}`)

  if (!isSet) {
    hasErrors = true
    if (!value) {
      console.log(`     ⚠️  Not set`)
    } else {
      console.log(
        `     ⚠️  Appears to be a placeholder (value: ${value.substring(0, 20)}...)`
      )
    }
  } else {
    // Show masked value for sensitive vars
    const displayValue =
      varName.includes('TOKEN') || varName.includes('SECRET')
        ? value.substring(0, 10) + '***'
        : value
    console.log(`     Value: ${displayValue}`)
  }
})

console.log('\n' + '=' * 50)

if (hasErrors) {
  console.log(
    '\n❌ Configuration incomplete. Please update .env.local with your values.\n'
  )
  console.log('Setup instructions:')
  console.log('1. Read SHOPIFY_SETUP.md for detailed configuration steps')
  console.log('2. Get your Storefront API token from Shopify Admin')
  console.log('3. Generate a secure revalidation secret\n')
  process.exit(1)
} else {
  console.log('\n✅ All required environment variables are configured!\n')
  console.log('Next steps:')
  console.log('1. Deploy your application to production')
  console.log('2. Set up webhooks in Shopify Admin (see SHOPIFY_SETUP.md)')
  console.log('3. Test product updates to verify cache revalidation\n')
}

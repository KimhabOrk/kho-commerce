import Link from 'next/link'
import Image from 'next/image'
import { ThemeToggle } from "@/components/theme-toggle"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-border mt-16 md:mt-24">
      <div className="container relative mx-auto max-w-6xl justify-center items-center flex flex-col px-6 md:px-8 lg:px-10 py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10 mb-4">
          {/* Company Links */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4">KIMHAB ORK</h3>
            <p className="text-sm text-muted-foreground">An Affordable Luxury Womenswear Brand</p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2 text-sm md:text-md">Shop</h4>
            <ul className="space-y-2 text-sm md:text-md">
              <li>
                <Link
                  href="/shop"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/collections"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Collections
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-2 text-sm md:text-md">Support</h4>
            <ul className="space-y-2 text-sm md:text-md">
              <li>
                <Link
                  href="/company/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/company/creative-director"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Creative Director
                </Link>
              </li>
              <li>
                <Link
                  href="/services/custom-made"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Custom Made
                </Link>
              </li>
              <li>
                <Link
                  href="/services/care-guides"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Care Guides
                </Link>
              </li>
              <li>
                <Link
                  href="/company/responsibility"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Responsibility
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-2 text-sm md:text-md">Legal</h4>
            <ul className="space-y-2 text-sm md:text-md">
              <li>
                <Link
                  href="/legal/notes"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Legal Notes
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/sales"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Sales Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/services/orders"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Shipping & Return
                </Link>
              </li>
              <li>
                <Link
                  href="/services/helps"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Helps & FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/privacy"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/terms"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex flex-wrap gap-4 md:gap-8 mx-auto justify-evenly items-center py-4 md:py-10">
          <Link href="https://facebook.com/kimhaborkofficial">
            <Image
              src="https://ik.imagekit.io/kimhabork/assets/socials/facebook.png?updatedAt=1767797839119"
              width={32}
              height={32}
              alt="Facebook Logo"
              className="object-cover md:w-11 md:h-11"
            />
          </Link>
          <Link href="https://www.instagram.com/kimhabork_official">
            <Image
              src="https://ik.imagekit.io/kimhabork/assets/socials/instagram.png?updatedAt=1767797839255"
              width={32}
              height={32}
              alt="Instagram Logo"
              className="object-cover md:w-11 md:h-11"
            />
          </Link>
          <Link href="https://www.tiktok.com/@kimhabork_official">
            <Image
              src="https://ik.imagekit.io/kimhabork/assets/socials/tiktok.png?updatedAt=1769794402290"
              width={32}
              height={32}
              alt="Tiktok Logo"
              className="object-cover md:w-11 md:h-11"
            />
          </Link>
          <Link href="https://www.pinterest.com/kimhab_ork">
            <Image
              src="https://ik.imagekit.io/kimhabork/assets/socials/pinterest.png?updatedAt=1767797839021"
              width={32}
              height={32}
              alt="Pinterest Logo"
              className="object-cover md:w-11 md:h-11"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/kimhabork-official">
            <Image
              src="https://ik.imagekit.io/kimhabork/assets/socials/linkedin.png?updatedAt=1767797838945"
              width={32}
              height={32}
              alt="LinkedIn Logo"
              className="object-cover md:w-11 md:h-11"
            />
          </Link>
        </div>

        {/* Divider */}
        <div className="pt-4 md:pt-8 flex mx-auto text-center justify-center items-center">
          <div className="relative flex flex-col gap-4 mx-auto justify-center items-center">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Kimhab Ork. All rights reserved.
            </p>
            {/***
            <div className="flex flex-wrap gap-2">
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-sm text-muted-foreground">|</span>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
            */}
          </div>
        </div>
      </div>
      <ThemeToggle />
    </footer>
  )
}

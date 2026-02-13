import { Metadata } from 'next'
import Image from 'next/image'
import { HeroGradient } from '@/components/hero-gradient'

export const metadata: Metadata = {
  title: 'Cookie Policy | Kimhab Ork',
  description: 'Cookie Policy for Kimhab Ork - Information about cookies and tracking technologies used',
  openGraph: {
    title: 'Cookie Policy | Kimhab Ork',
  },
}

export default function CookiePolicyPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <HeroGradient 
        title="Cookie Policy"
        description="Understanding how we use cookies and tracking technologies to enhance your experience"
      />

      {/* Cookie Policy Content */}
      <section className="py-12 md:py-16 px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-12">
          {/* Cookie List */}
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
              Cookie List
            </h2>
            <div className="text-foreground/70 space-y-4">
              <p>
                A cookie is a small piece of data (text file) that a website — when visited by a user — asks your browser to store on your device in order to remember information about you, such as your language preference or login information. These cookies are set by Kimhab Ork and are called first-party cookies. We also use third-party cookies — which are set by other parties — for advertising and marketing efforts.
              </p>
              <p>
                More specifically, we use cookies and other similar technologies for the following purposes:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex gap-3">
                  <span className="text-primary font-semibold">•</span>
                  <span>To remember your preferences and settings</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold">•</span>
                  <span>To authenticate users and manage sessions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold">•</span>
                  <span>To analyze website performance and usage patterns</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold">•</span>
                  <span>To deliver personalized content and advertisements</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold">•</span>
                  <span>To prevent fraud and enhance security</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Targeting Cookies */}
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
              Targeting Cookies
            </h2>
            <div className="text-foreground/70 space-y-4 mb-6">
              <p>
                These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. They do not directly store personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies you will still see adverts, although they may be less tailored to you.
              </p>
            </div>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-border/40">
                <thead>
                  <tr className="bg-muted/80">
                    <th className="border border-border/40 p-3 text-left font-semibold text-foreground text-sm">Cookie Subgroup</th>
                    <th className="border border-border/40 p-3 text-left font-semibold text-foreground text-sm">Cookies</th>
                    <th className="border border-border/40 p-3 text-left font-semibold text-foreground text-sm">Cookies Used</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-muted/40">
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">www.tomfordfor fashion.com</td>
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">bc_invalidateUICache_targeting, dwanonymous_xxxxxxx, dwac_xxxxxx_xxxxxxxxxxxxxxxx</td>
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">First Party</td>
                  </tr>
                  <tr className="hover:bg-muted/40">
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">tomfordfor fashion.com</td>
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">_fbo_, oci_au_, uidsid</td>
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">First Party</td>
                  </tr>
                  <tr className="hover:bg-muted/40">
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">facebook.com</td>
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">fr</td>
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">Third Party</td>
                  </tr>
                  <tr className="hover:bg-muted/40">
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">bat.bing.com</td>
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">MR</td>
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">Third Party</td>
                  </tr>
                  <tr className="hover:bg-muted/40">
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">bing.com</td>
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">MUID, MSPTIC</td>
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">Third Party</td>
                  </tr>
                  <tr className="hover:bg-muted/40">
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">doubleclick.net</td>
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">IDE, test_cookie</td>
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">Third Party</td>
                  </tr>
                  <tr className="hover:bg-muted/40">
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">www.facebook.com</td>
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">—</td>
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">Third Party</td>
                  </tr>
                  <tr className="hover:bg-muted/40">
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">casuotient.com</td>
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">uuid__cq_seg</td>
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">Third Party</td>
                  </tr>
                  <tr className="hover:bg-muted/40">
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">api.bluecore.com</td>
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">bluecoreNV, mp_tom_ford_us_mixpanel, bc_invalidateUICache_targeting</td>
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">Third Party</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Functional Cookies */}
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
              Functional Cookies
            </h2>
            <div className="text-foreground/70 space-y-4 mb-6">
              <p>
                These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages. If you do not allow these cookies then some or all of these services may not function properly.
              </p>
            </div>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-border/40">
                <thead>
                  <tr className="bg-muted/80">
                    <th className="border border-border/40 p-3 text-left font-semibold text-foreground text-sm">Cookie Subgroup</th>
                    <th className="border border-border/40 p-3 text-left font-semibold text-foreground text-sm">Cookies</th>
                    <th className="border border-border/40 p-3 text-left font-semibold text-foreground text-sm">Cookies Used</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-muted/40">
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">tomfordfor fashion.com</td>
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">weird_get_top_level_domain, _cq_seg</td>
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">First Party</td>
                  </tr>
                  <tr className="hover:bg-muted/40">
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">www.tomfordfor fashion.com</td>
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">_cq_dti_GlobalEE_CT_Data</td>
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">First Party</td>
                  </tr>
                  <tr className="hover:bg-muted/40">
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">affirm.com</td>
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">_cfuid_t_v3_, _cf_bm, affirm-cart-header</td>
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">Third Party</td>
                  </tr>
                  <tr className="hover:bg-muted/40">
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">cdn1.affirm.com</td>
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">checkout_continuity_service</td>
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">Third Party</td>
                  </tr>
                  <tr className="hover:bg-muted/40">
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">www.affirm.com</td>
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">chameleon-profile-id, exp-override, session</td>
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">Third Party</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Performance Cookies */}
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
              Performance Cookies
            </h2>
            <div className="text-foreground/70 space-y-4 mb-6">
              <p>
                These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance.
              </p>
            </div>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-border/40">
                <thead>
                  <tr className="bg-muted/80">
                    <th className="border border-border/40 p-3 text-left font-semibold text-foreground text-sm">Cookie Subgroup</th>
                    <th className="border border-border/40 p-3 text-left font-semibold text-foreground text-sm">Cookies</th>
                    <th className="border border-border/40 p-3 text-left font-semibold text-foreground text-sm">Cookies Used</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-muted/40">
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">www.tomfordfor fashion.com</td>
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">_ga_xxxxxxx, _gid, _cquid</td>
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">First Party</td>
                  </tr>
                  <tr className="hover:bg-muted/40">
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">tomfordfor fashion.com</td>
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">_ga, mip_tom_ford_us_mixpanel, _ca_bc, _uetsid, _ca_uid</td>
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">First Party</td>
                  </tr>
                  <tr className="hover:bg-muted/40">
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">affirm.com</td>
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">tracker_device, 300673443491</td>
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">Third Party</td>
                  </tr>
                  <tr className="hover:bg-muted/40">
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">cdn1.affirm.com</td>
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">tracker_device, cookietest</td>
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">Third Party</td>
                  </tr>
                  <tr className="hover:bg-muted/40">
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">www.googletagmanager.com</td>
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">_ga_xxxxxxxxx</td>
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">Third Party</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Strictly Necessary Cookies */}
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
              Strictly Necessary Cookies
            </h2>
            <div className="text-foreground/70 space-y-4 mb-6">
              <p>
                These cookies are essential for you to browse the website and use its features. Cookies that allow you to maintain logged-in sessions and remember things about you which will be retained between site visits are included in this category. Without cookies in our systems, you would be unable to complete many functions on the website or receive services that are specifically requested by you, such as viewing certain content or receiving personalized information. In such situations we may need to ask you to accept our cookie policy or remember an opt-in preference, logging in or filling in forms.
              </p>
              <p>
                You can set your browser to block or alert you about these cookies, but then some parts of the site will not work. These cookies do not store any personally identifiable information.
              </p>
            </div>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-border/40">
                <thead>
                  <tr className="bg-muted/80">
                    <th className="border border-border/40 p-3 text-left font-semibold text-foreground text-sm">Cookie Subgroup</th>
                    <th className="border border-border/40 p-3 text-left font-semibold text-foreground text-sm">Cookies</th>
                    <th className="border border-border/40 p-3 text-left font-semibold text-foreground text-sm">Cookies Used</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-muted/40">
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">.com</td>
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">lssi#Token</td>
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">First Party</td>
                  </tr>
                  <tr className="hover:bg-muted/40">
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">www.tomfordfor fashion.com</td>
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">cookie_full_branding, tracker_device, dwsid, AWSALB, GlobalIE_Data</td>
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">First Party</td>
                  </tr>
                  <tr className="hover:bg-muted/40">
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">www.tomfordfor fashion.com</td>
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">OptannonConsent, OptannonAlertBoxClosed</td>
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">First Party</td>
                  </tr>
                  <tr className="hover:bg-muted/40">
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">tomfordfor fashion.com</td>
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">ffr_ncd</td>
                    <td className="border border-border/40 p-3 text-sm text-foreground/70">First Party</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Cookie Management */}
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
              Cookie Management and Control
            </h2>
            <div className="text-foreground/70 space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Browser Settings</h3>
                <p>
                  You can control and manage cookies through your web browser settings. Most browsers allow you to refuse cookies or alert you when cookies are being sent. For specific instructions on managing cookies, please refer to your browser's help documentation. Please note that if you disable cookies, some features of the website may not function properly.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2 mt-4">Opt-Out Options</h3>
                <p>
                  Many advertising networks offer opt-out options. You can visit the Network Advertising Initiative (NAI) or the Digital Advertising Alliance (DAA) to opt out of behavioral advertising from multiple providers. These options allow you to control targeted advertising without blocking all cookies.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2 mt-4">Cookie Consent</h3>
                <p>
                  Upon your first visit to our website, you will be presented with a cookie consent banner. You can choose to accept all cookies, reject optional cookies, or customize your preferences. Your choices are stored so that you will not be asked repeatedly.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2 mt-4">Changing Your Preferences</h3>
                <p>
                  You can change your cookie preferences at any time by clicking the cookie preferences link in the footer of our website or by clearing your browser cookies and revisiting our site. If you have questions about our cookie practices, please contact us at privacy@kimhabork.com.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-muted/80 p-8 rounded-lg border border-border/40">
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">
              Questions About Our Cookie Policy?
            </h2>
            <p className="text-foreground/70 mb-4">
              If you have any questions regarding our use of cookies or this Cookie Policy, please contact us:
            </p>
            <div className="text-foreground font-semibold space-y-2">
              <p>Kimhab Ork</p>
              <p>Email: 
                <a href="mailto:privacy@kimhabork.com">privacy@kimhabork.com</a>
              </p>
              <p>Telephone: 
                <a href="tel:+855 (23) 123-4567">+855 (23) 123-4567</a>
              </p>
            </div>
            <p className="text-foreground/70 mt-4 text-sm">
              Last Updated: February 2026
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

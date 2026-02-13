import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Legal Notes | Kimhab Ork',
  description: 'Legal notes, intellectual property, and website terms for Kimhab Ork',
  openGraph: {
    title: 'Legal Notes | Kimhab Ork',
  },
}

export default function LegalNotesPage() {
  return (
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-12 md:py-16 lg:py-32 px-6 md:px-8 lg:px-10 bg-gradient-to-b from-background to-muted">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Legal Notes
            </h1>
            <p className="text-lg text-foreground/70 text-balance max-w-2xl mx-auto">
              Important legal information regarding Kimhab Ork and our website
            </p>
          </div>
        </section>

        {/* Legal Content */}
        <section className="py-12 md:py-16 px-6 md:px-8 lg:px-10">
          <div className="mx-auto max-w-4xl space-y-12">
            {/* Company Information */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                Company Information
              </h2>
              <div className="text-foreground/70 space-y-4">
                <p>
                  This website (hereafter referred to as "the Site") is managed by Kimhab Ork Co., Ltd., a company established under the laws of Cambodia. All content, materials, and services available on this website are provided in accordance with applicable Cambodian law and international regulations.
                </p>
                <p>
                  By accessing and using this Site, you acknowledge and accept all terms and conditions set forth in these legal notes. Your use of the Site implicates compliance with all applicable laws and regulations.
                </p>
              </div>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                Intellectual Property Rights
              </h2>
              <div className="space-y-4 text-foreground/70">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Distinguishing Signs</h3>
                  <p>
                    All distinguishing signs including denominating and figurative trademarks, logos, slogans, and brand names indicated and used on this Site belong exclusively to Kimhab Ork Co., Ltd. Any reproduction whatsoever by the public is totally prohibited. The use of any of these distinguishing signs is completely forbidden without express written permission from Kimhab Ork.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2 mt-4">Author's Copyrights</h3>
                  <p>
                    All material published as information on this Site (including but not limited to texts, still or moving images, graphics, photographs, databases, relevant documentation, design elements, and layout) are exclusively the property of Kimhab Ork Co., Ltd. and are protected by both Cambodian and International law regarding intellectual and industrial property rights.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2 mt-4">Protection</h3>
                  <p>
                    The content is protected by copyright law and international treaties. Unauthorized use, reproduction, or distribution of any material on this Site may result in serious legal consequences, including civil and criminal penalties.
                  </p>
                </div>
              </div>
            </div>

            {/* Use of the Site */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                Use of the Site
              </h2>
              <div className="space-y-4 text-foreground/70">
                <p>
                  Kimhab Ork authorizes the viewing and consultation of the material available on this Site for personal use only. Any reproduction, even if only partial, of this material for purposes other than domestic use or personal information is strictly prohibited.
                </p>
                <p>
                  <span className="font-semibold text-foreground">Prohibited Uses:</span> No reproduction of this Site nor any part of it can be sold, distributed, or used for commercial purposes, altered, or included in any other publication in any way whatsoever without express written consent from Kimhab Ork.
                </p>
                <p>
                  Kimhab Ork reserves the right to prosecute any unauthorized use or infringement of intellectual property rights in any court of law, whether in civil or criminal proceedings. Violations may result in injunctions, damages, and other legal remedies.
                </p>
                <p>
                  <span className="font-semibold text-foreground">Product Information:</span> All references made to products or services on this Site do not imply a sales or supply offer. Images of products are provided for illustration purposes only. Kimhab Ork reserves the right to modify, discontinue, or alter products without notice.
                </p>
              </div>
            </div>

            {/* External Links */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                External Links
              </h2>
              <div className="text-foreground/70 space-y-4">
                <p>
                  This Site may contain hypertext links to websites managed by third parties. The presence of such links does not involve any endorsement or judgment by Kimhab Ork regarding the content of those websites.
                </p>
                <p>
                  Third-party websites accessible through links are not subject to control by Kimhab Ork and therefore we do not accept responsibility for their content, updates, or any links contained within them. Access to these sites and their contents shall be governed by the terms of use of the respective websites.
                </p>
                <p>
                  Kimhab Ork is not responsible for any damage or loss resulting from your use of external websites accessed through links on this Site.
                </p>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                Limitation of Liability
              </h2>
              <div className="text-foreground/70 space-y-4">
                <p>
                  Except for the binding limits of applicable law, Kimhab Ork Co., Ltd. cannot be held responsible in any way for damage arising from the use of this Site, including but not limited to:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex gap-3">
                    <span className="text-primary font-semibold">•</span>
                    <span>Mistakes, inaccuracies, or omissions in content</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-semibold">•</span>
                    <span>Service interruptions or defects</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-semibold">•</span>
                    <span>Data loss or unauthorized access</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-semibold">•</span>
                    <span>Viruses or malicious code</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-semibold">•</span>
                    <span>Any other losses or damages arising from your use of the Site</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Content Disclaimer */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                Content and Modifications
              </h2>
              <div className="text-foreground/70 space-y-4">
                <p>
                  This Site may contain historical information and archival content provided exclusively for consultation purposes. Kimhab Ork reserves the right to change the contents of the Site at any time without notice.
                </p>
                <p>
                  The information and content contained on this Site are provided without any express or implied guarantee of any kind. Kimhab Ork will not be held responsible for any possible imprecision, inaccuracy, or incompleteness of the data presented.
                </p>
              </div>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                Governing Law
              </h2>
              <div className="text-foreground/70">
                <p>
                  These legal notes and all matters relating to this Site shall be governed by and construed in accordance with the laws of Cambodia. Any legal proceedings arising from or relating to this Site shall be subject to the exclusive jurisdiction of the courts of Cambodia.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-muted/80 p-8 rounded-lg border border-border/40">
              <h2 className="font-serif text-2xl font-bold text-primary mb-4">
                Questions?
              </h2>
              <p className="text-foreground/70 mb-4">
                If you have any questions regarding these legal notes or the use of this Site, please contact us at:
              </p>
              <p>Kimhab Ork Co</p>
              <p> Email: 
                <a href="mailto:customerservice@kimhabork.com">customerservice@kimhabork.com</a>
              </p>
              <p>Telephone: 
                <a href="tel:+855 (23) 123-4567">+855 (23) 123-4567</a>
              </p>
              <p>
                <a href="/contact">Contact Form</a>
              </p>
            </div>
          </div>
        </section>
      </main>
      
    
  )
}

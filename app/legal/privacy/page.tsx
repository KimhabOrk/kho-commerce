import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Kimhab Ork',
  description: 'Privacy policy and data protection information for Kimhab Ork',
  openGraph: {
    title: 'Privacy Policy | Kimhab Ork',
  },
}

export default function PrivacyPolicyPage() {
  return (
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-12 md:py-16 lg:py-32 px-6 md:px-8 lg:px-10 bg-background">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Privacy Policy
            </h1>
            <p className="text-lg text-foreground/70 text-balance max-w-2xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 px-6 md:px-8 lg:px-10">
          <div className="mx-auto max-w-4xl space-y-12">
            {/* Introduction */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                Introduction
              </h2>
              <p className="text-foreground/70 leading-relaxed">
                Kimhab Ork Co., Ltd. ("we," "us," "our," or "Kimhab Ork") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and engage with our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                Information We Collect
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Personal Information You Provide</h3>
                  <p className="text-foreground/70 mb-3">
                    We collect information you voluntarily provide, including:
                  </p>
                  <ul className="space-y-2 text-foreground/70 ml-4">
                    <li className="flex gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <span>Contact information (name, email address, phone number)</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <span>Address information for shipping and billing</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <span>Payment information for purchases</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <span>Account credentials and preferences</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <span>Communications and inquiries sent to us</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3">Automatically Collected Information</h3>
                  <p className="text-foreground/70 mb-3">
                    When you visit our Site, we automatically collect certain information:
                  </p>
                  <ul className="space-y-2 text-foreground/70 ml-4">
                    <li className="flex gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <span>IP address and device information</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <span>Browser type and operating system</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <span>Pages visited and time spent on the Site</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <span>Referring website information</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <span>Cookies and similar tracking technologies</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                How We Use Your Information
              </h2>
              <p className="text-foreground/70 mb-4">We use the information we collect for various purposes:</p>
              <ul className="space-y-2 text-foreground/70 ml-4">
                <li className="flex gap-3">
                  <span className="text-primary font-semibold">•</span>
                  <span>Processing orders and delivering products</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold">•</span>
                  <span>Providing customer service and support</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold">•</span>
                  <span>Sending transactional communications</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold">•</span>
                  <span>Improving our website and services</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold">•</span>
                  <span>Personalizing your experience</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold">•</span>
                  <span>Marketing and promotional communications (with consent)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold">•</span>
                  <span>Complying with legal obligations</span>
                </li>
              </ul>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                Data Security
              </h2>
              <div className="space-y-4 text-foreground/70">
                <p>
                  Kimhab Ork implements appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. We use industry-standard security protocols including encryption and secure server technology.
                </p>
                <p>
                  However, no method of transmission over the Internet or electronic storage is completely secure. While we strive to protect your data, we cannot guarantee absolute security. Any transmission of data is at your own risk.
                </p>
              </div>
            </div>

            {/* Sharing Information */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                Sharing Your Information
              </h2>
              <div className="space-y-4 text-foreground/70">
                <p>
                  We may share your information with third parties only in the following circumstances:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex gap-3">
                    <span className="text-primary font-semibold">•</span>
                    <span>Service providers who assist us in operating our website and conducting business (payment processors, shipping partners, customer service providers)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-semibold">•</span>
                    <span>Legal requirements or to protect our rights and safety</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-semibold">•</span>
                    <span>Business transfers or mergers</span>
                  </li>
                </ul>
                <p className="mt-4">
                  We do not sell or rent your personal information to third parties for their marketing purposes.
                </p>
              </div>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                Cookies and Tracking Technologies
              </h2>
              <div className="space-y-4 text-foreground/70">
                <p>
                  We use cookies and similar tracking technologies to enhance your browsing experience, understand how you use our Site, and personalize content. Cookies are small files stored on your device that help us remember your preferences and activity.
                </p>
                <p>
                  You can control cookie preferences through your browser settings. Disabling cookies may affect certain functionality of our Site. We also respect "Do Not Track" signals where technically feasible.
                </p>
              </div>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                Your Rights
              </h2>
              <div className="space-y-4 text-foreground/70">
                <p>
                  Depending on your location, you may have certain rights regarding your personal data:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex gap-3">
                    <span className="text-primary font-semibold">•</span>
                    <span>Right to access your personal information</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-semibold">•</span>
                    <span>Right to correct inaccurate data</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-semibold">•</span>
                    <span>Right to request deletion of your data</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-semibold">•</span>
                    <span>Right to opt-out of marketing communications</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-semibold">•</span>
                    <span>Right to data portability</span>
                  </li>
                </ul>
                <p className="mt-4">
                  To exercise any of these rights, please contact us using the information provided below.
                </p>
              </div>
            </div>

            {/* Updates */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                Policy Updates
              </h2>
              <p className="text-foreground/70">
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by posting the updated policy on our Site and updating the "Last Updated" date.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-muted/70 p-8 rounded-lg border border-border/40">
              <h2 className="font-serif text-2xl font-bold text-primary mb-4">
                Contact Us
              </h2>
              <p className="text-foreground/70 mb-4">
                If you have questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="text-foreground font-semibold space-y-2">
                <p>Kimhab Ork Co., Ltd.</p>
                <p>Email: privacy@kimhabork.com</p>
                <p className="text-sm text-foreground/70 font-normal mt-4">
                  Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
    
  )
}

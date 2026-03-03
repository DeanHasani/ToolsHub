import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "ToolHub's privacy policy describing how we handle cookies, analytics, advertising, and user data.",
}

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 lg:px-8 lg:py-16">
      <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: March 2026</p>

      <div className="mt-8 flex flex-col gap-6 leading-relaxed text-muted-foreground">
        <p>
          This Privacy Policy describes how ToolHub ("we," "us," or "our") collects, uses, and protects your information when you use our website. By using our site, you agree to the practices described in this policy.
        </p>

        <h2 className="text-xl font-bold text-foreground">Information We Collect</h2>
        <p>
          We do not require user accounts or collect personal information such as names, email addresses, or phone numbers for general use of our tools and articles. However, we may collect certain non-personal information automatically when you visit our site:
        </p>
        <ul className="ml-4 flex flex-col gap-2">
          <li className="flex items-start gap-2">
            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
            <span>Browser type and version</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
            <span>Operating system</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
            <span>Pages visited and time spent on each page</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
            <span>Referring website or search engine</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
            <span>General geographic location (country/region level)</span>
          </li>
        </ul>

        <h2 className="text-xl font-bold text-foreground">Cookies</h2>
        <p>
          We use cookies and similar technologies to improve your experience on our site. Cookies are small text files stored on your device. We use:
        </p>
        <ul className="ml-4 flex flex-col gap-2">
          <li className="flex items-start gap-2">
            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
            <span><strong className="text-foreground">Essential cookies:</strong> Required for basic site functionality.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
            <span><strong className="text-foreground">Analytics cookies:</strong> Help us understand how visitors use our site so we can improve content and performance.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
            <span><strong className="text-foreground">Advertising cookies:</strong> Used by third-party advertising partners (such as Google AdSense) to display relevant advertisements.</span>
          </li>
        </ul>
        <p>
          You can control cookie preferences through your browser settings. Disabling certain cookies may affect site functionality.
        </p>

        <h2 className="text-xl font-bold text-foreground">Analytics</h2>
        <p>
          We use analytics services to understand site usage patterns and improve our content. These services may collect anonymized data about page views, session duration, and user interactions. Analytics data is used solely for improving the quality and relevance of our tools and articles.
        </p>

        <h2 className="text-xl font-bold text-foreground">Advertising</h2>
        <p>
          We display advertisements through third-party advertising networks, including Google AdSense. These networks may use cookies and similar technologies to serve ads based on your interests and prior visits. We do not control the cookies placed by these third-party services. For more information about how Google uses your data, visit Google's Privacy & Terms page.
        </p>

        <h2 className="text-xl font-bold text-foreground">Data Sharing</h2>
        <p>
          We do not sell, trade, or otherwise transfer your personal information to outside parties. We may share aggregated, non-personal data with partners for analytical purposes.
        </p>

        <h2 className="text-xl font-bold text-foreground">Data Security</h2>
        <p>
          We implement appropriate technical measures to protect the information collected through our site. However, no method of transmission over the internet or electronic storage is completely secure.
        </p>

        <h2 className="text-xl font-bold text-foreground">Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.
        </p>

        <h2 className="text-xl font-bold text-foreground">Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, please email us at <span className="text-foreground">toolhub.feedback@gmail.com</span>.
        </p>
      </div>
    </div>
  )
}

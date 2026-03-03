import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "ToolHub's terms of service outlining the rules and guidelines for using our website, tools, and content.",
}

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 lg:px-8 lg:py-16">
      <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
        Terms of Service
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: March 2026</p>

      <div className="mt-8 flex flex-col gap-6 leading-relaxed text-muted-foreground">
        <p>
          By accessing and using ToolHub ("the Site"), you agree to be bound by these Terms of Service. If you do not agree with these terms, please do not use the Site.
        </p>

        <h2 className="text-xl font-bold text-foreground">Use of the Site</h2>
        <p>
          ToolHub provides free online tools and educational content for informational purposes. You may use our tools and read our content for personal, educational, or professional purposes. You agree not to:
        </p>
        <ul className="ml-4 flex flex-col gap-2">
          <li className="flex items-start gap-2">
            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
            <span>Use the Site for any unlawful purpose</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
            <span>Attempt to gain unauthorized access to any part of the Site</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
            <span>Interfere with or disrupt the operation of the Site</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
            <span>Scrape, copy, or reproduce content in bulk without permission</span>
          </li>
        </ul>

        <h2 className="text-xl font-bold text-foreground">Accuracy of Information</h2>
        <p>
          While we strive to ensure the accuracy of our tools and content, ToolHub provides all information "as is" without warranties of any kind. Conversion results and article content are provided for general informational purposes and should not be relied upon for professional, medical, legal, or financial decisions without independent verification.
        </p>

        <h2 className="text-xl font-bold text-foreground">Intellectual Property</h2>
        <p>
          All content on ToolHub, including text, graphics, logos, and software, is the property of ToolHub or its content providers and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from our content without explicit written permission.
        </p>

        <h2 className="text-xl font-bold text-foreground">Third-Party Links & Services</h2>
        <p>
          The Site may contain links to third-party websites and display advertisements from third-party networks. We are not responsible for the content, privacy practices, or terms of any third-party sites or services. Clicking on third-party links or engaging with advertisements is at your own discretion.
        </p>

        <h2 className="text-xl font-bold text-foreground">Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, ToolHub shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of, or inability to use, the Site or its content.
        </p>

        <h2 className="text-xl font-bold text-foreground">Changes to These Terms</h2>
        <p>
          We reserve the right to modify these Terms of Service at any time. Changes will be posted on this page with an updated revision date. Your continued use of the Site after changes are posted constitutes your acceptance of the revised terms.
        </p>

        <h2 className="text-xl font-bold text-foreground">Contact</h2>
        <p>
          If you have any questions about these Terms of Service, email us at <span className="text-foreground">toolhub.feedback@gmail.com</span>.
        </p>
      </div>
    </div>
  )
}

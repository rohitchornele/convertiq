export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)]">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold tracking-tight">
          Terms & Conditions
        </h1>

        <p className="mt-4 text-sm text-[var(--text-secondary)]">
          Last Updated: June 2026
        </p>

        <div className="mt-12 space-y-12">
          <section>
            <h2 className="text-2xl font-semibold">
              1. Acceptance of Terms
            </h2>

            <p className="mt-4 leading-8 text-[var(--text-secondary)]">
              Welcome to ConvertIQ. By accessing or using our AI-powered Email
              and Calendar assistant, you agree to be bound by these Terms &
              Conditions. If you do not agree to these terms, please do not use
              our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              2. Description of Service
            </h2>

            <p className="mt-4 leading-8 text-[var(--text-secondary)]">
              ConvertIQ is an AI-powered productivity platform that integrates
              with Gmail and Google Calendar to help users:
            </p>

            <ul className="mt-4 space-y-3 list-disc pl-6 text-[var(--text-secondary)] leading-8">
              <li>Summarize emails using AI.</li>

              <li>Generate and send draft replies.</li>

              <li>Create and manage calendar events.</li>

              <li>Schedule meetings and manage attendees.</li>

              <li>Interact with emails and calendars using AI chat.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              3. User Accounts
            </h2>

            <p className="mt-4 leading-8 text-[var(--text-secondary)]">
              To use certain features, you may be required to sign in using
              Google OAuth. You are responsible for maintaining the security of
              your account and for all activities that occur under your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              4. Google Integrations
            </h2>

            <p className="mt-4 leading-8 text-[var(--text-secondary)]">
              ConvertIQ connects to Gmail and Google Calendar only after you
              explicitly grant permission through Google's OAuth authorization
              flow.
            </p>

            <p className="mt-4 leading-8 text-[var(--text-secondary)]">
              We use these permissions solely to provide the features you
              request, such as reading emails, generating summaries, drafting
              replies, or creating calendar events.
            </p>

            <p className="mt-4 leading-8 text-[var(--text-secondary)]">
              You may revoke these permissions at any time through your Google
              Account settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              5. Acceptable Use
            </h2>

            <p className="mt-4 leading-8 text-[var(--text-secondary)]">
              You agree not to use ConvertIQ to:
            </p>

            <ul className="mt-4 space-y-3 list-disc pl-6 text-[var(--text-secondary)] leading-8">
              <li>Violate any applicable laws or regulations.</li>

              <li>Send spam, phishing emails, or harmful content.</li>

              <li>Attempt unauthorized access to our systems.</li>

              <li>Disrupt or interfere with the operation of the service.</li>

              <li>Use the service in a way that harms other users.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              6. AI Generated Content
            </h2>

            <p className="mt-4 leading-8 text-[var(--text-secondary)]">
              ConvertIQ uses AI models to generate summaries, draft replies,
              and provide recommendations.
            </p>

            <p className="mt-4 leading-8 text-[var(--text-secondary)]">
              While we strive for accuracy, AI-generated outputs may contain
              inaccuracies or omissions. You are responsible for reviewing and
              verifying any content before sending emails or taking actions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              7. Intellectual Property
            </h2>

            <p className="mt-4 leading-8 text-[var(--text-secondary)]">
              All rights, titles, and interests in ConvertIQ, including its
              design, software, branding, and content, are owned by ConvertIQ
              and protected by applicable intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              8. Limitation of Liability
            </h2>

            <p className="mt-4 leading-8 text-[var(--text-secondary)]">
              ConvertIQ is provided on an "as is" and "as available" basis.
              We do not guarantee uninterrupted or error-free service.
            </p>

            <p className="mt-4 leading-8 text-[var(--text-secondary)]">
              To the maximum extent permitted by law, ConvertIQ shall not be
              liable for any indirect, incidental, or consequential damages
              arising from your use of the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              9. Termination
            </h2>

            <p className="mt-4 leading-8 text-[var(--text-secondary)]">
              We reserve the right to suspend or terminate access to ConvertIQ
              at any time if you violate these Terms & Conditions or misuse the
              service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              10. Changes to These Terms
            </h2>

            <p className="mt-4 leading-8 text-[var(--text-secondary)]">
              We may update these Terms & Conditions from time to time.
              Significant changes will be reflected by updating the
              "Last Updated" date on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              11. Contact Us
            </h2>

            <p className="mt-4 leading-8 text-[var(--text-secondary)]">
              If you have any questions regarding these Terms & Conditions,
              please contact us at:
            </p>

            <div className="mt-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
              <p className="font-medium">ConvertIQ</p>

              <p className="mt-2 text-[var(--text-secondary)]">
                Email: support@convertiq.ai
              </p>
            </div>
          </section>

          <p className="pt-8 border-t border-[var(--border)] text-sm text-[var(--text-secondary)]">
            By using ConvertIQ, you acknowledge that you have read,
            understood, and agreed to these Terms & Conditions.
          </p>
        </div>
      </div>
    </main>
  );
}
'use client';

import { Mail } from 'lucide-react';

const emails = [
  {
    name: 'Arjun',

    subject: 'Proposal approved ✓',

    time: '2h ago',
  },

  {
    name: 'Rahul',

    subject: "Tomorrow's sync",

    time: 'Yesterday',
  },

  {
    name: 'Finance',

    subject: 'Invoice received',

    time: 'Yesterday',
  },
];

export default function ImportantEmails() {
  return (
    <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-4">
      <div className="flex items-center gap-2 mb-4">
        <Mail size={16} className="text-[var(--accent)]" />

        <h3 className="text-sm font-semibold text-[var(--text-primary)]">
          Important Emails
        </h3>
      </div>

      <div className="space-y-3">
        {emails.map((email) => (
          <button
            key={email.subject}
            className="w-full text-left rounded-lg px-3 py-2 hover:bg-white/[0.03] transition-colors"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-[var(--text-primary)]">
                {email.name}
              </p>

              <span className="text-xs text-[var(--text-secondary)]">
                {email.time}
              </span>
            </div>

            <p className="mt-1 text-xs text-[var(--text-secondary)] truncate">
              {email.subject}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
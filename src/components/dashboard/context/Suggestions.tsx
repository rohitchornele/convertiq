'use client';

import { Sparkles, ArrowRight } from 'lucide-react';

const suggestions = [
  {
    title: 'Reply to ChaiCode',

    subtitle: 'You have 2 unread emails',
  },

  {
    title: 'Prepare for MOM Review',

    subtitle: 'Meeting starts in 2 hours',
  },

  {
    title: 'Summarize Today\'s Inbox',

    subtitle: '12 unread emails',
  },
];

export default function Suggestions() {
  return (
    <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-4">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles
          size={16}
          className="text-[var(--accent)]"
        />

        <h3 className="text-sm font-semibold text-[var(--text-primary)]">
          Suggestions
        </h3>
      </div>

      <div className="space-y-2">
        {
          suggestions.map((item) => (
            <button
              key={item.title}
              className="w-full text-left rounded-lg px-3 py-3 hover:bg-white/[0.03] transition-colors group"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-[var(--text-primary)]">
                    {item.title}
                  </p>

                  <p className="text-xs text-[var(--text-secondary)] mt-1">
                    {item.subtitle}
                  </p>
                </div>

                <ArrowRight
                  size={14}
                  className="mt-1 text-[var(--text-secondary)] opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </button>
          ))
        }
      </div>
    </div>
  );
}
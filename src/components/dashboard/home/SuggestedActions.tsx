'use client';

import { useRouter } from 'next/navigation';

import {
  Sparkles,

  CalendarPlus,

  MailPlus,

  ListTodo,

  ArrowUpRight,
} from 'lucide-react';

const actions = [
  {
    title: 'Summarize Inbox',

    description: 'Get a quick overview of unread emails',

    icon: Sparkles,

    prompt: 'Summarize my unread emails',
  },

  {
    title: 'Schedule Meeting',

    description: 'Find a slot and create an event',

    icon: CalendarPlus,

    prompt: 'Schedule a meeting tomorrow',
  },

  {
    title: 'Draft Email',

    description: 'Generate a professional email',

    icon: MailPlus,

    prompt: 'Draft an email',
  },

  {
    title: 'Plan My Day',

    description: 'Organize meetings and tasks',

    icon: ListTodo,

    prompt: 'Help me plan my day',
  },
];

export default function SuggestedActions() {
  const router = useRouter();

  const handleClick = (prompt: string) => {
    router.push(
      `/dashboard/chat?prompt=${encodeURIComponent(prompt)}`
    );
  };

  return (
    <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-4">
      <div className="mb-4">
        <h2 className="text-sm font-semibold text-[var(--text-primary)]">
          Suggested Actions
        </h2>

        <p className="text-xs text-[var(--text-secondary)] mt-1">
          Popular things you can ask ConvertIQ
        </p>
      </div>

      <div className="grid grid-cols-2">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              onClick={() => handleClick(action.prompt)}
              className="w-full text-left rounded-lg px-3 py-3 hover:bg-white/[0.03] transition-colors group"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-[var(--border)] flex items-center justify-center text-[var(--accent)] shrink-0">
                  <Icon size={16} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-[var(--text-primary)]">
                      {action.title}
                    </h3>

                    <ArrowUpRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-[var(--text-secondary)]"
                    />
                  </div>

                  <p className="text-xs text-[var(--text-secondary)] mt-1">
                    {action.description}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
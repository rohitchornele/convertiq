'use client';

import { useRouter } from 'next/navigation';

import { ArrowRight, Sparkles } from 'lucide-react';

import Greeting from './Greeting';

import KPICards from './KPICards';

import SuggestedActions from './SuggestedActions';
import { useEffect, useState } from 'react';
import { getCurrentUser } from '@/server/utils/user';

export default function DashboardHome() {
  const router = useRouter();

  const [user, setUser] = useState('');

  useEffect(() => {
    async function getUser() {
      const response = await getCurrentUser();
      setUser(response?.name ?? '');
    }
  }, []);

  return (
    <div className="h-full p-6 space-y-6 lg:overflow-hidden">
      <Greeting user={{ name: 'Rohit' }} />

      <KPICards />

      {/* AI CTA */}

      <button
        onClick={() => router.push('/dashboard/chat')}
        className="w-full text-left bg-[var(--card)] border border-[var(--border)] rounded-xl p-5 hover:border-white/15 hover:bg-white/[0.02] transition-all group"
      >
        <div className="flex items-start justify-between gap-6">
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-[var(--border)] flex items-center justify-center text-[var(--accent)] shrink-0">
              <Sparkles size={18} />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[var(--text-primary)]">
                Let Meetra AI handle your inbox
              </h2>

              <p className="mt-1 text-sm text-[var(--text-secondary)] max-w-2xl">
                Ask AI to summarize emails, draft replies, schedule meetings or
                manage your calendar — all from a single chat.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1 rounded-full bg-white/[0.03] border border-[var(--border)]">
                  Summarize Inbox
                </span>

                <span className="text-xs px-3 py-1 rounded-full bg-white/[0.03] border border-[var(--border)]">
                  Draft Reply
                </span>

                <span className="text-xs px-3 py-1 rounded-full bg-white/[0.03] border border-[var(--border)]">
                  Schedule Meeting
                </span>
              </div>
            </div>
          </div>

          <ArrowRight
            size={20}
            className="text-[var(--text-secondary)] group-hover:translate-x-1 transition-transform shrink-0 mt-1"
          />
        </div>
      </button>

      <SuggestedActions />
    </div>
  );
}

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

  // const [user, setUser] = useState('');

  return (
    <div className="h-full p-6 space-y-6 lg:overflow-hidden">
      <Greeting />

      <KPICards />

      {/* AI CTA */}

      <button 
      onClick={() => router.push('/dashboard/chat')}
      className="relative overflow-hidden w-full text-left rounded-3xl border border-[var(--accent)]/20 bg-gradient-to-br from-[var(--card)] via-[var(--card)] to-[var(--accent)]/10 p-8 group transition-all duration-300 hover:scale-[1.01] hover:border-[var(--accent)]/40 hover:shadow-[0_0_60px_rgba(124,92,255,0.15)]"
      >
        {/* Glow */}

        <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-[var(--accent)] opacity-[0.08] blur-3xl pointer-events-none"
        />

        <div className="relative flex items-start justify-between gap-8">
          <div className="flex gap-5">
            <div className="w-14 h-14 rounded-2xl bg-[var(--accent)]/15 border border-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)] shrink-0"
            >
              <Sparkles size={24} />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-medium border border-[var(--accent)]/20">
                ✨ AI Assistant
              </div>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-[var(--text-primary)]">
                Let Meetra AI handle your inbox
              </h2>

              <p className="mt-3 text-base leading-7 text-[var(--text-secondary)] max-w-2xl">
                Summarize emails, draft replies, schedule meetings and manage
                your calendar — all through a natural conversation.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="text-xs px-4 py-2 rounded-full bg-white/[0.04] border border-[var(--border)]">
                  Summarize Inbox
                </span>

                <span className="text-xs px-4 py-2 rounded-full bg-white/[0.04] border border-[var(--border)]">
                  Draft Reply
                </span>

                <span className="text-xs px-4 py-2 rounded-full bg-white/[0.04] border border-[var(--border)]">
                  Schedule Meeting
                </span>
              </div>

              <div className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-[var(--accent)] text-white font-medium shadow-lg group-hover:translate-x-1 transition-transform"
              >
                Start Chatting
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </div>
            </div>
          </div>
        </div>
      </button>

      {/* <SuggestedActions /> */}
    </div>
  );
}

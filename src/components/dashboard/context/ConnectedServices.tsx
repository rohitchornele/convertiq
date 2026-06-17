'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';

import { Mail, CalendarDays, ChevronRight } from 'lucide-react';

export default function ConnectedServices() {
  const [status, setStatus] = useState({
    gmail: false,

    googlecalendar: false,
  });

  useEffect(() => {
    async function fetchStatus() {
      try {
        const response = await fetch('/api/integrations/status');

        const data = await response.json();

        setStatus(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchStatus();
  }, []);

  return (
    <div className="border-t border-[var(--border)]">
      {/* <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-3">
        Connected Services
      </h3> */}

      <div className="flex items-center justify-center">
        <Link
          href="/dashboard/integrations"
          className="flex flex-1 items-center justify-between rounded-lg px-3 py-2 hover:bg-white/[0.03] transition-colors"
        >
          <div className="flex items-start gap-3">
            <div className="relative">
              <Mail size={20} className="text-[var(--accent)] mt-1" />

              <span
                className={`absolute -right-1 -bottom-2 h-3 w-3 rounded-full ${status.gmail ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.9)]' : 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.9)]'}`}
              />
            </div>

            <div>
              <p className="text-sm font-medium">Gmail</p>

              <p className="text-xs text-[var(--text-secondary)]">
                {status.gmail ? 'Connected' : 'Disconnected'}
              </p>
            </div>
          </div>

          {/* <ChevronRight size={14} className="text-[var(--text-secondary)]" /> */}
        </Link>

        <Link
          href="/dashboard/integrations"
          className="flex flex-1 items-center justify-between rounded-lg px-3 py-2 hover:bg-white/[0.03] transition-colors"
        >
          <div className="flex items-start gap-3">
            <div className="relative">
              <CalendarDays size={20} className="text-[var(--accent)] mt-1" />

              <span
                className={`absolute -right-1 -bottom-2 h-3 w-3 rounded-full ${status.gmail ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.9)]' : 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.9)]'}`}
              />
            </div>

            <div>
              <p className="text-sm font-medium">Calendar</p>

              <p className="text-xs text-[var(--text-secondary)]">
                {status.googlecalendar ? 'Connected' : 'Disconnected'}
              </p>
            </div>
          </div>

          {/* <ChevronRight size={14} className="text-[var(--text-secondary)]" /> */}
        </Link>
      </div>
    </div>
  );
}

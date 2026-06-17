'use client';

import { usePathname } from 'next/navigation';

import ImportantEmails from '../context/ImportantEmails';
import TodayAgenda from '../context/TodayAgenda';
import Suggestions from '../context/Suggestions';
import ConnectedServices from '../context/ConnectedServices';

// import RecentChats from '../context/RecentChats';

export default function ContextPanel() {
  const pathname = usePathname();

  const isHome = pathname === '/dashboard';

  const isChat = pathname.startsWith('/dashboard/chat');

  const isInbox = pathname.startsWith('/dashboard/inbox');

  const isCalendar = pathname.startsWith('/dashboard/calendar');

  return (
    <aside className="hidden lg:flex flex-col h-full bg-[var(--bg)] border-l border-[var(--border)] overflow-y-auto">
      {/* Scrollable Content */}

      <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">
        {isHome && (
          <>
            <ImportantEmails />

            <TodayAgenda />

            {/* <Suggestions /> */}
          </>
        )}

        {isChat && (
          <>
            {/* <RecentChats /> */}

            <Suggestions />
          </>
        )}

        {isInbox && (
          <>
            <ImportantEmails />

            <Suggestions />
          </>
        )}

        {isCalendar && (
          <>
            <TodayAgenda />

            <Suggestions />
          </>
        )}
      </div>

      {/* Fixed Bottom */}

      <div className="shrink-0 p-4 border-t border-[var(--border)] bg-[var(--bg)]">
        <ConnectedServices />
      </div>
    </aside>
  );
}

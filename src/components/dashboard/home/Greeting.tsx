'use client';

import { useMemo } from 'react';

interface GreetingProps {
  user?: {
    name?: string | null;
  };

  unreadEmails?: number;

  meetings?: number;

  pendingTasks?: number;
}

export default function Greeting({
  user,

  unreadEmails = 0,

  meetings = 0,

  pendingTasks = 0,
}: GreetingProps) {
  const greeting = useMemo(() => {
    const hour = new Date().getHours();

    if (hour < 12) {
      return 'Good Morning';
    }

    if (hour < 18) {
      return 'Good Afternoon';
    }

    return 'Good Evening';
  }, []);

  return (
    <div className="space-y-1">
      <h1 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
        {greeting},{' '}
        <span className="text-[var(--accent)]">
          {user?.name?.split(' ')[0] ?? 'there'}
        </span>
        👋
      </h1>

      <p className="text-sm text-[var(--text-secondary)]">
        You have{' '}

        <span className="text-[var(--text-primary)] font-medium">
          {unreadEmails} unread emails
        </span>

        {' · '}

        <span className="text-[var(--text-primary)] font-medium">
          {meetings} meetings
        </span>

        {' · '}

        <span className="text-[var(--text-primary)] font-medium">
          {pendingTasks} pending tasks
        </span>
      </p>
    </div>
  );
}
'use client';

import { CalendarDays } from 'lucide-react';

const meetings = [
  {
    time: '2:00 PM',

    title: 'Product Review',

    duration: '30 min',
  },

  {
    time: '4:00 PM',

    title: 'Team Meeting',

    duration: '1 hour',
  },
];

export default function TodayAgenda() {
  return (
    <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-4">
      <div className="flex items-center gap-2 mb-4">
        <CalendarDays size={16} className="text-[var(--accent)]" />

        <h3 className="text-sm font-semibold text-[var(--text-primary)]">
          Today's Agenda
        </h3>
      </div>

      <div className="space-y-3">
        {meetings.map((meeting) => (
          <div
            key={meeting.title}
            className="flex gap-3 rounded-lg px-3 py-2 hover:bg-white/[0.03] transition-colors"
          >
            <div className="flex flex-col items-center">
              <div className="w-2 h-2 rounded-full bg-[var(--accent)] mt-1" />

              <div className="w-px flex-1 bg-[var(--border)] mt-1" />
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[var(--text-secondary)]">
                  {meeting.time}
                </span>

                <span className="text-xs text-[var(--text-secondary)]">
                  {meeting.duration}
                </span>
              </div>

              <p className="mt-1 text-sm font-medium text-[var(--text-primary)]">
                {meeting.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

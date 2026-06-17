"use client";

import { Mail, Calendar, CheckSquare, Sparkles } from "lucide-react";

const stats = [
  {
    title: "Unread",
    value: 23,
    icon: Mail,
  },

  {
    title: "Meetings",
    value: 4,
    icon: Calendar,
  },

  {
    title: "Tasks",
    value: 3,
    icon: CheckSquare,
  },

  {
    title: "AI Usage",
    value: 48,
    suffix: "prompts",
    icon: Sparkles,
  },
];

export default function KPICards() {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div key={stat.title} className="bg-[var(--card)] border border-[var(--border)] rounded-xl px-4 py-4 hover:border-white/15 transition-colors">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium text-[var(--text-secondary)]">
                {stat.title}
              </p>

              <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-[var(--border)] flex items-center justify-center text-[var(--accent)]">
                <Icon size={16} />
              </div>
            </div>

            <div className="mt-4 flex items-end gap-2">
              <h2 className="text-3xl font-semibold leading-none tracking-tight text-[var(--text-primary)]">
                {stat.value}
              </h2>

              {stat.suffix && (
                <span className="text-xs text-[var(--text-secondary)] mb-1">
                  {stat.suffix}
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
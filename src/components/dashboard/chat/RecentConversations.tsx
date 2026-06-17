'use client';

import { useEffect, useState } from 'react';

type Conversation = {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
};

interface RecentConversationsProps {
  onSelect?: (conversationId: string) => void;
}

export default function RecentConversations({
  onSelect,
}: RecentConversationsProps) {
  const [conversations, setConversations] = useState<Conversation[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchConversations();
  }, []);

  async function fetchConversations() {
    try {
      const response = await fetch('/api/conversations');

      const data = await response.json();

      //   console.log('CONVERSATIONS =', data);

      setConversations(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="space-y-3">
        <h2 className="text-sm font-semibold text-[var(--text-secondary)]">
          Recent Conversations
        </h2>

        <div className="text-sm text-[var(--text-secondary)]">Loading...</div>
      </div>
    );
  }

  if (conversations.length === 0) {
    return (
      <div className="space-y-3">
        <h2 className="text-sm font-semibold text-[var(--text-secondary)]">
          Recent Conversations
        </h2>

        <div className="text-sm text-[var(--text-secondary)]">
          No conversations yet
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-y-auto w-full h-full">
      <div className="space-y-3 ">
        <h2 className="text-sm font-semibold text-[var(--text-secondary)]">
          Recent Conversations
        </h2>

        <div className="space-y-2">
          {conversations.map((conversation) => (
            <button className="group w-full text-start rounded-xl px-3 py-2 text-left transition-colors hover:bg-[var(--card)]">
              <span className="truncate text-sm text-[var(--text-primary)]">
                {conversation.title}
              </span>
              <br />

              <span className="shrink-0 text-xs text-[var(--text-secondary)]">
                {conversation.updatedAt}.
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

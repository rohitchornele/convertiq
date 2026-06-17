'use client';

import { useMemo } from 'react';

import { usePathname } from 'next/navigation';

import DashboardNavbar from './DashboardNavbar';

import Sidebar from './Sidebar';

import ContextPanel from './ContextPanel';

import { useDashboard } from '../context/DashboardProvider';

export default function DashboardLayout({
  children,

  user,
}: {
  children: React.ReactNode;

  user?: {
    name?: string | null;

    email?: string | null;

    image?: string | null;
  };
}) {
  const {
    sidebarCollapsed,

    toggleSidebar,
  } = useDashboard();

  const pathname = usePathname();

  const showContextPanel =
    pathname === '/dashboard' || pathname.startsWith('/dashboard');

  return (
    <div className="h-full overflow-hidden bg-[var(--bg)] text-[var(--text-primary)]">
      <DashboardNavbar user={user} />

      <div className="h-[calc(100vh-var(--navbar-height))] grid grid-cols-1 md:grid-cols-[auto_minmax(0,1fr)] xl:grid-cols-[auto_minmax(0,1fr)_320px] overflow-hidden transition-all duration-300">
        {/* Sidebar */}

        <div className="hidden md:block">
          <Sidebar collapsed={sidebarCollapsed} onToggle={toggleSidebar} />
        </div>

        {/* Main */}

        <main className="h-full overflow-y-auto">{children}</main>

        {/* Context */}

        {showContextPanel && (
          <div className="hidden xl:block h-full">
            <ContextPanel />
          </div>
        )}
      </div>
    </div>
  );
}

'use client';

import React from 'react';
import { BottomDock } from '@/components/layout';
import { AuthGuard } from '@/components/auth';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthGuard>
      <div className="min-h-screen pb-24">
        {children}
        <BottomDock />
      </div>
    </AuthGuard>
  );
}

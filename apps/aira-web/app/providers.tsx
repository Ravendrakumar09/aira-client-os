'use client';

import { useEffect } from 'react';
import { QueryClientProvider, queryClient } from '@repo/core';
import { verifyAuthState } from '@/lib/api';
import { ToastProvider } from '@/components/ui/toast';

// Initialize API client on module load
import '@/lib/api';

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  // Verify auth state on mount by calling /users/me API
  // This works with HttpOnly cookies since browser sends them automatically
  useEffect(() => {
    verifyAuthState();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>{children}</ToastProvider>
    </QueryClientProvider>
  );
}

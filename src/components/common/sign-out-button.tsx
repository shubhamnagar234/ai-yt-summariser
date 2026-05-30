'use client';

import { LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { signOutAction } from '@/actions/auth-actions';

export function SignOutButton() {
  return (
    <Button
      variant="ghost"
      onClick={() => signOutAction()}
      className="text-gray-600 hover:text-rose-600 transition-colors flex items-center gap-2"
    >
      <LogOut className="w-4 h-4" />
      Sign Out
    </Button>
  );
}

import { SquarePlay } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { getSession } from '@/lib/auth';
import { SignOutButton } from './sign-out-button';

export default async function Header() {
  const session = await getSession();

  return (
    <header
      style={{
        width: '100%',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid #f3f4f6',
      }}
    >
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1rem 2rem',
          margin: '0 auto',
          maxWidth: '1200px',
          boxSizing: 'border-box',
          width: '100%',
        }}
      >
        {/* Left: Logo Section */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              textDecoration: 'none',
            }}
          >
            <SquarePlay
              style={{ width: '2rem', height: '2rem', color: '#111827' }}
            />
            <span
              style={{
                fontWeight: 800,
                fontSize: '1.25rem',
                color: '#111827',
                whiteSpace: 'nowrap',
              }}
            >
              YT Summariser
            </span>
          </Link>
        </div>

        {/* Right: Navigation & Auth Section */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {session?.userId ? (
            <>
              <Link
                href="/dashboard"
                style={{
                  textDecoration: 'none',
                  color: '#374151',
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                }}
              >
                Your Summaries
              </Link>
              <SignOutButton />
            </>
          ) : (
            <Link href="/sign-in">
              <Button
                variant={'link'}
                className="text-white rounded-full px-4 py-4 bg-linear-to-r from-slate-900 to-rose-500 hover:from-rose-500 hover:to-slate-900 hover:no-underline font-bold shadow-lg transition-all duration-300 cursor-pointer"
              >
                Sign In
              </Button>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}

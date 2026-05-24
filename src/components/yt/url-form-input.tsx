'use client';

import { forwardRef, type SubmitEventHandler } from 'react';
import { Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import LoadingSkeleton from './loading-skeleton';

interface UrlFormInputProps {
  onSubmit: SubmitEventHandler<HTMLFormElement>;
  isLoading: boolean;
}

export const UrlFormInput = forwardRef<HTMLFormElement, UrlFormInputProps>(
  ({ onSubmit, isLoading }, ref) => {
    return (
      <div style={{ width: '100%' }}>
        {!isLoading ? (
          <form
            ref={ref}
            onSubmit={onSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              width: '100%',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                gap: '0.375rem',
                width: '100%',
              }}
            >
              <Input
                id="url"
                type="url"
                name="url"
                placeholder="https://www.youtube.com/watch?v=..."
                required
                disabled={isLoading}
                style={{
                  flex: 1,
                  opacity: isLoading ? 0.5 : 1,
                  cursor: isLoading ? 'not-allowed' : 'text',
                  fontSize: '1rem',
                }}
              />
              <Button
                type="submit"
                disabled={isLoading}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontWeight: 500,
                  cursor: isLoading ? 'not-allowed' : 'pointer',
                  opacity: isLoading ? 0.5 : 1,
                }}
              >
                {isLoading ? (
                  <>
                    <Loader2
                      style={{
                        marginRight: '0.5rem',
                        height: '1rem',
                        width: '1rem',
                        animation: 'spin 1s linear infinite',
                      }}
                    />
                    Processing...
                  </>
                ) : (
                  'Analyze Video'
                )}
              </Button>
            </div>
          </form>
        ) : (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2.5rem',
              width: '100%',
              marginTop: '1rem',
            }}
          >
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                }}
                aria-hidden="true"
              >
                <div
                  style={{ width: '100%', borderTop: '1px solid #e5e7eb' }}
                />
              </div>
              <div
                style={{
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <span
                  style={{
                    backgroundColor: '#f9fafb',
                    padding: '0 1rem',
                    color: '#6b7280',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                  }}
                >
                  Analyzing Video & Generating Insights...
                </span>
              </div>
            </div>

            {/* The Loading Skeleton Component */}
            <LoadingSkeleton />
          </div>
        )}
      </div>
    );
  },
);

UrlFormInput.displayName = 'UrlFormInput';

export default UrlFormInput;

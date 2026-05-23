'use client';

import { forwardRef, type SubmitEventHandler } from 'react';
import { Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface UrlFormInputProps {
  onSubmit: SubmitEventHandler<HTMLFormElement>;
  isLoading: boolean;
}

export const UrlFormInput = forwardRef<HTMLFormElement, UrlFormInputProps>(
  ({ onSubmit, isLoading }, ref) => {
    return (
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
    );
  },
);

UrlFormInput.displayName = 'UrlFormInput';

export default UrlFormInput;

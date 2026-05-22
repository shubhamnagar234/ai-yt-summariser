'use client';

import { useRef, useState, type SubmitEventHandler } from 'react';
import { useRouter } from 'next/navigation';
import UrlFormInput from './url-form-input';
import { z } from 'zod';
import { toast } from 'sonner';
import { generateYTSummary, storeYtSummaryAction } from '@/actions/yt-actions';

const schema = z.object({
  url: z
    .string()
    .url({ message: 'Please enter a valid URL' })
    .regex(/youtube\.com|youtu\.be/, 'Link must be a YouTube URL'),
});

export default function UrlForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const formData = new FormData(e.currentTarget);
      const url = formData.get('url') as string;

      // Validate the URL
      const validatedFields = schema.safeParse({ url });

      if (!validatedFields.success) {
        toast.error('Invalid link', {
          description:
            validatedFields.error.issues?.[0]?.message ?? 'Invalid file',
        });
        setIsLoading(false);
        return;
      }

      toast.success('Fetching Video', {
        description: 'Extracting transcript and analyzing content...',
      });

      // Pass the URL directly to the action
      const result = await generateYTSummary(url);

      const { data = null, message = null } = result || {};

      if (data) {
        toast.success('Saving Summary...', {
          description: 'Hang tight! We are saving your video insights.',
        });

        if (data.summary) {
          const storeResult = await storeYtSummaryAction({
            summary: data.summary,
            url: url,
            title: data.title,
            videoId: data.videoId,
          });

          toast.success('Summary Generated!', {
            description:
              'Your video has been successfully summarized and saved!',
          });

          formRef.current?.reset();
          router.push(`/summaries/${storeResult.id}`);
        }
      } else {
        toast.error('Something went wrong', { description: message });
      }
    } catch (error) {
      console.error('Error occurred', error);
      toast.error('An unexpected error occurred. Please try again.');
      formRef.current?.reset();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        width: '100%',
        maxWidth: '42rem',
        margin: '0 auto',
      }}
    >
      <UrlFormInput
        isLoading={isLoading}
        ref={formRef}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

'use client';

import { GoBackLink } from '@/components/common/GoBackLink';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className={'flex h-dvh flex-col items-center justify-center'}>
      <h2 className={'text-center text-4xl mb-4'}>{'Something went wrong!'}</h2>
      <div className={'flex justify-center gap-4'}>
        <button
          className={
            'w-48 flex items-center text-xl rounded-md font-bold text-white justify-center h-12 uppercase font-bebas bg-secondary hover:text-secondary hover:bg-white hover:border border-secondary'
          }
          onClick={() => reset()}
          type={'button'}
        >
          {'Try again'}
        </button>
        <GoBackLink />
      </div>
    </main>
  );
}

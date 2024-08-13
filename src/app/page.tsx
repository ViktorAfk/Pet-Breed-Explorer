import { getPets } from '@/api/api';
import { BreedList } from '@/components/BreedList';
import { Title } from '@/components/common/Title';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import Loading from './loading';

export default async function Home() {
  const response = await getPets();

  if (response.length === 0) {
    notFound();
  }

  return (
    <main>
      <Title
        tag={'h1'}
        text={'Pet breed explore'}
        classes={'text-center text-4xl uppercase mb-4 text-primary'}
      />
      <Suspense fallback={<Loading />}>
        <BreedList breeds={response} />
      </Suspense>
    </main>
  );
}

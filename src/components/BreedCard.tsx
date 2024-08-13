'use client';
import { Breed } from '@/types/type';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { FC } from 'react';

type Props = Omit<Breed, 'id'>;

export const BreedCard: FC<Props> = ({ name, imageUrl, breedId, petType }) => {
  const searchParams = useSearchParams();
  const setSearchParams = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('type', petType);

    return params.toString();
  };

  return (
    <Link
      onClick={() => {
        setSearchParams();
      }}
      href={`pet/${breedId}?${setSearchParams()}`}
    >
      <article
        className={
          'border w-full border-secondary border-solid rounded-md pb-4 transition-shadow duration-300 hover:shadow-custom'
        }
      >
        <div className={'relative w-full h-[300px] mb-4'}>
          <Image
            src={imageUrl}
            fill={true}
            alt={`photo of the pet ${name}`}
            quality={25}
          />
        </div>
        <h2 className={'text-center text-line text-2xl'}>{name}</h2>
      </article>
    </Link>
  );
};

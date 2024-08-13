import Link from 'next/link';
import React, { FC } from 'react';
type Props = {
  link: string;
  breedParam: string;
};

export const BreedLinkItem: FC<Props> = ({ link, breedParam }) => {
  return (
    <div
      className={
        'flex justify-between w-full border-b border-b-primary pb-1 mb-2'
      }
    >
      <p className={'text-line text-lg font-bebas'}>{breedParam}</p>

      {!link ? (
        <p
          className={
            'text-right font-bebas text-line font-bold tracking-[1.28px]'
          }
        >
          {'no information'}
        </p>
      ) : (
        <Link
          target={'_blank'}
          className={
            'text-right font-bebas uppercase text-line font-bold tracking-[1.28px] hover:text-secondary hover:underline'
          }
          href={link}
        >
          {'More...'}
        </Link>
      )}
    </div>
  );
};

import React, { FC } from 'react';

interface Props {
  breedInfo: string;
  breedParam: string;
}

export const BreedItem: FC<Props> = ({ breedParam, breedInfo }) => {
  return (
    <div
      className={
        'flex justify-between w-full mb-2 border-b border-b-primary pb-1'
      }
    >
      <p className={'text-line text-lg font-bebas'}>{breedParam}</p>
      <p
        className={
          'text-right font-bebas uppercase text-line font-bold tracking-[1.28px]'
        }
      >
        {breedInfo}
      </p>
    </div>
  );
};

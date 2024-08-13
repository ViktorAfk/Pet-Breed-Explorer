import React, { FC } from 'react';

type Props = {
  description: string;
};

export const Description: FC<Props> = ({ description }) => {
  return (
    <div className={'mb-4'}>
      <p className={'text-primary text-lg font-bebas'}>{description}</p>
    </div>
  );
};

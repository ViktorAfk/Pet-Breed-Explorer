import React, { FC } from 'react';

type Props = {
  paramKey: string;
  imperial: string;
  metric: string;
};

export const Dimensions: FC<Props> = ({ paramKey, imperial, metric }) => {
  return (
    <div className={'flex justify-between mb-2 border-b border-b-primary pb-1'}>
      <p className={'text-line text-lg font-bebas'}>{paramKey}</p>
      <div className={'flex gap-5'}>
        <div>
          <p className={'text-line text-lg font-bebas'}>{'metric:'}</p>
          <p
            className={
              'text-right font-bebas uppercase text-line font-bold tracking-[1.28px]'
            }
          >
            {metric}
          </p>
        </div>
        <div>
          <p className={'text-line text-lg font-bebas'}>{'imperial:'}</p>
          <p
            className={
              'text-right font-bebas uppercase text-line font-bold tracking-[1.28px]'
            }
          >
            {imperial}
          </p>
        </div>
      </div>
    </div>
  );
};

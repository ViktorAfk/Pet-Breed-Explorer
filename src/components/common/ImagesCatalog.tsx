import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import { Title } from './Title';
type Props = {
  images: { id: string; imageUrl: string }[];
  isDog?: boolean;
  name: string;
};

export const ImagesCatalog: FC<Props> = ({ images, isDog = false, name }) => {
  return (
    <div className={'w-full border border-primary border-solid rounded-lg p-2'}>
      <Title
        tag={'h3'}
        text={'Photos'}
        classes={'mb-4 text-lg uppercase font-bold font-bebas'}
      />
      <div
        className={clsx('h-[400px] w-full overflow-y-scroll p-4', {
          'grid gap-2 md:grid-cols-2 lg:grid-cols-3 ': isDog,
        })}
      >
        {images.length === 0 ? (
          <p>{'There are no images'}</p>
        ) : (
          images.map(({ id, imageUrl }) => (
            <Link
              className={clsx(
                'transition-shadow duration-300 hover:shadow-custom',
                {
                  'mb-2': !isDog,
                },
              )}
              href={imageUrl}
              target={'_blank'}
              key={id}
            >
              <div className={'relative w-full h-[300px] mb-4'}>
                <Image
                  objectFit={'contain'}
                  src={imageUrl}
                  fill={true}
                  alt={`photo of the pet ${name}`}
                  quality={50}
                />
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

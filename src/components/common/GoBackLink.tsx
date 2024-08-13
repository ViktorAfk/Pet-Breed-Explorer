import Link from 'next/link';
import React from 'react';

export const GoBackLink: React.FC = () => {
  return (
    <div className={' flex justify-center'}>
      <Link
        className={
          'w-48 flex items-center text-xl rounded-md font-bold text-white justify-center h-12 uppercase font-bebas bg-secondary hover:text-secondary hover:bg-white hover:border border-secondary'
        }
        href={'/'}
      >
        {'Return Home'}
      </Link>
    </div>
  );
};

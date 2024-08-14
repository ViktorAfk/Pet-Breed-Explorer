import clsx from 'clsx';

import { Breed } from '@/types/type';
import React, { Dispatch, SetStateAction } from 'react';

type Props = {
  filteredBreeds: Breed[];
  value: string;
  focusValue: boolean;
  setBreed: Dispatch<SetStateAction<string>>;
  focusRemove: () => void;
};

export const AutocompleteList: React.FC<Props> = ({
  filteredBreeds,
  value,
  focusValue,
  setBreed,
  focusRemove,
}) => {
  return (
    <ul
      className={clsx(
        'block border border-solid font-roboto border-line rounded-md w-[300px] max-h-[200px] min-h-fit py-2 bg-back z-10 absolute overflow-y-scroll',
        {
          hidden: !focusValue,
        },
      )}
    >
      {filteredBreeds.length === 0 ? (
        <li>{'No options'}</li>
      ) : (
        filteredBreeds.map(({ id, name }) => (
          <li key={id}>
            <button
              type={'button'}
              onClick={() => {
                setBreed(name);
                focusRemove();
              }}
              className={clsx(
                'block w-full text-left hover:bg-secondary px-1 hover:text-white',
                {
                  'bg-secondary text-white': value === name,
                },
              )}
              key={id}
            >
              {name}
            </button>
          </li>
        ))
      )}
    </ul>
  );
};

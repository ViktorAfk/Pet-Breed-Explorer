'use client';

import { useClickOutside } from '@/hooks/useClickOutside';
import { useFilteredBreeds } from '@/hooks/useFilteredBreeds';
import { Breed } from '@/types/type';
import React from 'react';
import { BreedList } from './BreedList';
import { Autocomplete } from './common/autocomplete/Autocomplete';

type Props = {
  breeds: Breed[];
};

export const BreedsContainer: React.FC<Props> = ({ breeds }) => {
  const {
    filteredBreeds,
    query,
    onHandleChange,
    toggle,
    focusValue,
    onFocusRemove,
    setQuery,
    onKeyPress,
  } = useFilteredBreeds(breeds);
  const { ref } = useClickOutside(onFocusRemove);

  return (
    <section>
      <Autocomplete
        onHandleFocus={toggle}
        value={query}
        onChange={onHandleChange}
        filteredBreeds={filteredBreeds}
        focusValue={focusValue}
        refValue={ref}
        setBreed={setQuery}
        focusRemove={onFocusRemove}
        onKeyPress={onKeyPress}
      />
      <BreedList breeds={filteredBreeds} />
    </section>
  );
};

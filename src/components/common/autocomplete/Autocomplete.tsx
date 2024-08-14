import { Breed } from '@/types/type';
import React, { Dispatch, RefObject, SetStateAction } from 'react';
import { AutocompleteList } from './AutocompleteList';
import { SearchForm } from './SearchForm';

type Props = {
  value: string;
  filteredBreeds: Breed[];
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  onHandleFocus: () => void;
  focusValue: boolean;
  refValue: RefObject<HTMLFormElement>;
  setBreed: Dispatch<SetStateAction<string>>;
  focusRemove: () => void;
  onKeyPress: () => void;
};

export const Autocomplete: React.FC<Props> = ({
  onHandleFocus,
  filteredBreeds,
  value,
  onChange,
  focusValue,
  refValue,
  setBreed,
  focusRemove,
  onKeyPress,
}) => {
  return (
    <div className={'w-full mb-4'}>
      <SearchForm
        refValue={refValue}
        onHandleFocus={onHandleFocus}
        value={value}
        handleChange={onChange}
        onKeyPress={onKeyPress}
      />
      <AutocompleteList
        focusRemove={focusRemove}
        setBreed={setBreed}
        focusValue={focusValue}
        value={value}
        filteredBreeds={filteredBreeds}
      />
    </div>
  );
};

import React, { RefObject } from 'react';

type Props = {
  value: string;
  handleChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  onHandleFocus: () => void;
  refValue: RefObject<HTMLFormElement>;
  onKeyPress: () => void;
};

export const SearchForm: React.FC<Props> = ({
  value,
  handleChange,
  onHandleFocus,
  refValue,
  onKeyPress,
}) => {
  return (
    <form className={'w-[300px]'} ref={refValue}>
      <label className={'font-bebas'} htmlFor={'breed'}>
        {'Enter your breed ...'}
      </label>
      <input
        className={
          'w-full rounded-md text-line border border-solid p-2 border-secondary'
        }
        value={value}
        onChange={handleChange}
        type={'text'}
        id={'breed'}
        onClick={onHandleFocus}
        onKeyDown={onKeyPress}
      />
    </form>
  );
};

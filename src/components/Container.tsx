import { PropsWithChildren } from 'react';

export const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={'container my-4 py-8 shadow-custom bg-white'}>
      {children}
    </div>
  );
};

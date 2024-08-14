import { useEffect, useRef } from 'react';
type Callback = () => void;

export const useClickOutside = (callback: Callback) => {
  const ref = useRef<HTMLFormElement>(null);

  const handleClick = ({ target }: MouseEvent) => {
    if (
      ref.current &&
      target instanceof HTMLElement &&
      !ref.current.contains(target)
    ) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });

  return { ref };
};

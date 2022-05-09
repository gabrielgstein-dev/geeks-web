/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useRef } from 'react';

export const useDebounce = (fn: any, delay: number) => {
  const timeoutRef = useRef<number>();

  const debounceFn = (...args: any[]) => {
    window.clearTimeout(timeoutRef.current);

    timeoutRef.current = window.setTimeout(() => {
      fn(...args);
    }, delay);
  };

  return debounceFn;
};

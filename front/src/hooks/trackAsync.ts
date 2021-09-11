import { useCallback } from 'react';
import { useCounter, useMountedState } from 'react-use';

export const useTrackAsyncFun = <T extends Array<any>, U>(
  fn: (...args: T) => Promise<U>,
): [boolean, (...args: T) => Promise<U>] => {
  const isMounted = useMountedState();
  const [inProgressCount, { inc, dec }] = useCounter();
  const tracked: (...args: T) => Promise<U> = useCallback(
    async (...args) => {
      inc();
      try {
        const promise = fn(...args);
        return await promise;
      } finally {
        // We don't want to change state if component
        // is unmounted. This caused errors in dev mode.
        if (isMounted()) {
          dec();
        }
      }
    },
    [inc, fn, isMounted, dec],
  );
  return [inProgressCount !== 0, tracked];
};

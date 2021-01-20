import { useState, useEffect, Dispatch, SetStateAction } from 'react';

export default function useDebouncedState<TValue>(
  value: TValue,
  delay = 100,
): [state: TValue, setState: Dispatch<SetStateAction<TValue>>] {
  const [internalState, setInternalState] = useState(value);
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebounced(internalState), delay);
    return () => clearTimeout(timeout);
  }, [internalState, delay]);

  return [debounced, setInternalState];
}

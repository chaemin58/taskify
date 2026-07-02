import { useEffect, useState } from "react";

/**
 * 값이 delay(ms) 동안 변경되지 않을 때만 갱신되는 디바운스된 값을 반환하는 훅
 */
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

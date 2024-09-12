import { useEffect, useState } from "react";

export function useLocalStorageState(key: string, initialState: string) {
  const [value, setValue] = useState<string>(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue] as const;
}

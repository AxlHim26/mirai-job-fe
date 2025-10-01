import { useState, useEffect } from "react";

export const useLocalStore = <T>(key: string, initialValue: T) => {
  const readValue = (): T => {
    if (typeof window === "undefined") return initialValue;

    try {
      const item = localStorage.getItem(key);
      if (!item) return initialValue;
      return typeof initialValue === "string" ? (item as T) : JSON.parse(item);
    } catch {
      return initialValue;
    }
  };

  const [storedValue, setStoredValue] = useState<T>(readValue);
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);
      const valueForStorage =
        typeof valueToStore === "string"
          ? valueToStore
          : JSON.stringify(valueToStore);

      localStorage.setItem(key, valueForStorage);
    } catch {
      return initialValue;
    }
  };

  const remove = () => {
    try {
      localStorage.removeItem(key);
      setStoredValue(initialValue);
    } catch {
      return initialValue;
    }
  };

  useEffect(() => {
    const handleStorageChange = () => {
      setStoredValue(readValue());
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return [setValue, remove] as const;
};

import { useEffect, useState } from "react";

function useLocalStorage(key, initialState) {
  const [value, setValue] = useState(() => {
    const savedItems = JSON.parse(localStorage.getItem(key));
    return savedItems != null ? savedItems : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}

export { useLocalStorage };

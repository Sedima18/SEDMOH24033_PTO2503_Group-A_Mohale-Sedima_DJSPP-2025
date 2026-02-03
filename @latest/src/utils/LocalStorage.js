export const loadFromStorage = (key, fallback) => {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
};

export const saveToStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
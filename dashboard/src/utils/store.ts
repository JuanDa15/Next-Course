export const setLocalStore = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
}

export const getLocalStore = (key: string) => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}
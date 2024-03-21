export const getValue = (key: string) => {
  const value = window.localStorage.getItem(key);
  return value ? JSON.parse(value) : false;
};

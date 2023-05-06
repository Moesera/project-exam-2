export function getItem(key) {
  if(localStorage.getItem(key)) {
    const item = localStorage.getItem(key);
    return JSON.parse(item);
  }
  return false;
}
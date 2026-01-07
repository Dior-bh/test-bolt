// Client-side storage utilities
function localStorageAvailable(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }

  try {
    // Accessing `window.localStorage` can throw in some Node/Vite SSR environments
    const ls = (window as any).localStorage;
    return typeof ls !== 'undefined' && typeof ls.getItem === 'function';
  } catch {
    return false;
  }
}

const isClient = localStorageAvailable();

export function getLocalStorage(key: string): any | null {
  if (!isClient) {
    return null;
  }

  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error(`Error reading from localStorage key "${key}":`, error);
    return null;
  }
}

export function setLocalStorage(key: string, value: any): void {
  if (!isClient) {
    return;
  }

  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error writing to localStorage key "${key}":`, error);
  }
}

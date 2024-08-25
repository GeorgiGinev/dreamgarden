'use client';
import { SWRConfig } from 'swr'
export const SWRProvider = ({ children }: any) => {
  return <SWRConfig value={{ provider: localStorageProvider }}>{children}</SWRConfig>
};

function localStorageProvider(): any {
  // When initializing, we restore the data from `localStorage` into a map.
  const map = new Map(JSON.parse(localStorage.getItem('app-cache') || '[]'))
 
  // Before unloading the app, we write back all the data into `localStorage`.
  window.addEventListener('beforeunload', () => {
    const appCache = JSON.stringify(Array.from(map.entries()))
    localStorage.setItem('app-cache', appCache)
  })
 
  // We still use the map for write & read for performance.
  return map
}
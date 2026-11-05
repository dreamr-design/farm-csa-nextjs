import { usePathname } from 'next/navigation';

const trim = (path) => path.replace(/\/+$/, '') || '/';

/**
 * The current-page marker for the shared header and footer, which no one page owns
 * @returns {(path: string) => object} The attributes to spread on a link: aria-current="page" on the page at that path
 */
export function useCurrent() {
  const pathname = trim(usePathname());
  return (path) => (trim(path) === pathname ? { 'aria-current': 'page' } : {});
}

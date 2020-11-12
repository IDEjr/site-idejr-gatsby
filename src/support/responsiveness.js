import { SMALL } from '../support/breakpoints'

export function getViewportWidth() {
  if (typeof window !== `undefined` && typeof document !== `undefined`) {
    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  }
  
}

export function viewportIsSmall() {
  return getViewportWidth() <= SMALL
}

export default {
  getViewportWidth,
  viewportIsSmall,
}

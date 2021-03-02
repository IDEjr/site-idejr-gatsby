import { MEDIUM , SMALL , EXTRA_SMALL } from '@support/breakpoints'

export function getViewportWidth() {
  if (typeof window !== `undefined` && typeof document !== `undefined`) {
    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  }

}

export function viewportIsSmall() {
  return getViewportWidth() <= SMALL
}

export function viewportIsExtraSmall() {
  return getViewportWidth() <= EXTRA_SMALL
}

export function viewportIsMedium() {
  return getViewportWidth() <= MEDIUM
}

export default {
  getViewportWidth,
  viewportIsSmall,
  viewportIsExtraSmall,
  viewportIsMedium,
}

/**
 * Central image/media configuration.
 *
 * All original Equinox Sports Infra images live under the same relative paths
 * (e.g. /assets/img/about/gym.jpg). We keep those relative paths everywhere in
 * the app and resolve them through the `img()` helper below.
 *
 * MEDIA_BASE controls where the images are served from:
 *
 *   1. Remote (default) — loads straight from the live site so the project
 *      runs immediately with zero setup:
 *        export const MEDIA_BASE = "https://equinoxsportsinfra.com";
 *
 *   2. Local — after running `npm run download-images` (which copies every
 *      image into /public/images preserving the same folder structure),
 *      switch to fully self-hosted assets:
 *        export const MEDIA_BASE = "/images";
 *
 * Only this one line needs to change to flip the whole site between the two.
 */
export const MEDIA_BASE = "/images";

/** Resolve a relative asset path to a full URL for the current MEDIA_BASE. */
export function img(path) {
  if (!path) return "";
  if (/^https?:\/\//i.test(path)) return path; // already absolute
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${MEDIA_BASE}${clean}`;
}

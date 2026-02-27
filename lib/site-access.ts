export const SITE_ACCESS_PASSWORD = "CKAY678";
export const SITE_ACCESS_COOKIE = "site_access_granted";
export const SITE_ACCESS_COOKIE_VALUE = "1";

export function sanitizeNextPath(candidate: string): string {
  if (!candidate.startsWith("/") || candidate.startsWith("//")) {
    return "/";
  }

  if (candidate.startsWith("/access")) {
    return "/";
  }

  return candidate;
}

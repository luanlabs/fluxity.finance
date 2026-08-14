const DEFAULT_FLUXITY_API_URL = 'https://api.fluxity.finance';

/**
 * Resolves the Fluxity API base URL from the environment.
 *
 * Configurable via `NEXT_PUBLIC_FLUXITY_API_URL`. When unset or invalid it
 * falls back to the production API and logs a warning. The trailing slash is
 * stripped so callers can safely build paths via `${FLUXITY_API_URL}/path`.
 */
function resolveFluxityApiUrl(): string {
  const raw = process.env.NEXT_PUBLIC_FLUXITY_API_URL?.trim();
  if (!raw) {
    return DEFAULT_FLUXITY_API_URL;
  }

  try {
    return new URL(raw).toString().replace(/\/$/, '');
  } catch {
    console.warn(
      `[env] Invalid NEXT_PUBLIC_FLUXITY_API_URL: "${raw}". Falling back to ${DEFAULT_FLUXITY_API_URL}.`,
    );
    return DEFAULT_FLUXITY_API_URL;
  }
}

export const FLUXITY_API_URL = resolveFluxityApiUrl();

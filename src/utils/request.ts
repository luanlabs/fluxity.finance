export interface RequestResult<T> {
  data: T;
  response: Response;
}

/**
 * Error thrown by {@link request} for non-2xx responses. Carries the parsed
 * response body (`data`) and the raw `Response` for callers that need them.
 */
export class RequestError<T = unknown> extends Error {
  readonly data: T;
  readonly response: Response;

  constructor(data: T, response: Response) {
    super(`Request failed with status ${response.status}`);
    this.name = 'RequestError';
    this.data = data;
    this.response = response;
  }
}

/**
 * Thin `fetch` wrapper that parses the response body (JSON when possible,
 * otherwise raw text, `null` when empty) and throws a typed
 * {@link RequestError} on non-2xx responses.
 */
const request = async <T>(url: string, config?: RequestInit): Promise<RequestResult<T>> => {
  const response = await fetch(url, config);

  const raw = await response.text();
  let data: T;
  try {
    data = (raw ? JSON.parse(raw) : null) as T;
  } catch {
    data = raw as unknown as T;
  }

  if (!response.ok) {
    throw new RequestError(data, response);
  }

  return { data, response };
};

export default request;

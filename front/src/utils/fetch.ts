import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export interface ApiFetchOptions extends RequestInit {
  payload?: any;
  queryParams?: Record<string, string>;
}

export const jsonFetch = (url: string, options?: ApiFetchOptions) => {
  let toFetch = url;
  if (options?.queryParams) {
    const queryString = new URLSearchParams(options?.queryParams);
    if (queryString) {
      toFetch = url.includes('?') ? `${toFetch}&${queryString}` : `${toFetch}?${queryString}`;
    }
  }
  return fetch(toFetch, {
    credentials: 'include',
    method: options?.method ?? (options?.payload ? 'POST' : 'GET'),
    body: options?.payload ? JSON.stringify(options.payload) : undefined,
    ...options,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...(options?.headers ?? {}),
    },
  }).then(r => r.json());
};

export const apiFetch = (path: string, options?: ApiFetchOptions) =>
  jsonFetch(`${publicRuntimeConfig.API_URL}${path}`, options);

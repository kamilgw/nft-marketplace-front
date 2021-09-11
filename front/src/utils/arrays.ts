import { ParsedUrlQuery } from 'querystring';
import { NftCategory } from '../generated/graphql';

/**
 * @deprecated use `getSingleQueryValue`
 */
export const parseQuery = <T>(value: T | T[]): T => {
  return Array.isArray(value) ? value[0] : value;
};

export const getSingleQueryValue = (query: ParsedUrlQuery, key: string): string | null => {
  if (key in query) {
    const value = query[key];
    return Array.isArray(value) ? value[0] : value;
  }
  return null;
};

export const getMultipleQueryValue = (
  query: ParsedUrlQuery,
  keys: string[],
): Array<string | null> => {
  let retVal: Array<string | null> = [];
  for (const key of keys) {
    retVal = [...retVal, getSingleQueryValue(query, key)];
  }
  return retVal;
};

export const getCategoryIdFromName = (
  categories: NftCategory[],
  categoryName: string | string[],
) => {
  return categories.find(({ name }) => name === categoryName);
};

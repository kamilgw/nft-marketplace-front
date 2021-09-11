export const nonNullable = <Value>(value: Value | null | undefined): value is Value => {
  return value !== null && value !== undefined;
};

export type NonNullable<T> = Exclude<T, null | undefined>; // Remove null and undefined from T

export type QueryNodes<T extends { edges: ({ node?: Record<string, unknown> | null } | null)[] }> =
  NonNullable<NonNullable<T['edges'][0]>['node']>;

// https://github.com/microsoft/TypeScript/issues/34523
export function assertIsNonNullable<Value>(
  value: Value | null | undefined,
): asserts value is Value {
  if (!nonNullable(value)) {
    throw new TypeError('Expected to not be nullable');
  }
}

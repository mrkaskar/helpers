/**
 * A utility function that wraps a promise and returns an object containing
 * both the result and error. If the promise resolves successfully but the
 * custom error case is met, the error will be set accordingly.
 *
 * @template T - The type of the resolved value of the promise.
 * @template E - The type of the error, defaults to `Error`.
 *
 * @param promise - The promise to handle.
 * @param errorCase - An optional function to determine if a result should be treated as an error.
 * @returns A promise that resolves to an object with `result` and `error`.
 */
export async function handlePromise<T, E = Error>(
  promise: Promise<T>,
  errorCase?: (result: T) => boolean
): Promise<{ result: T | null; error: E | null }> {
  try {
    const result = await promise;

    if (errorCase?.(result)) {
      return {
        result: null,
        error: new Error('Custom error condition met') as E,
      };
    }

    return { result, error: null };
  } catch (error) {
    return { result: null, error: error as E };
  }
}

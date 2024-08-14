/**
 * Appends an element to the end of an array.
 *
 * @param arr - The array to which the element will be appended.
 * @param element - The element to append to the array.
 * @returns A new array with the element appended to the end.
 */
export function appendElementToArray<T>(arr: T[], element: T): T[] {
  return [...arr, element];
}

/**
 * Prepends an element to the front of an array.
 *
 * @param arr - The array to which the element will be prepended.
 * @param element - The element to prepend to the array.
 * @returns A new array with the element prepended to the front.
 */
export function prependElementToArray<T>(arr: T[], element: T): T[] {
  return [element, ...arr];
}

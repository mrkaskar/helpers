/**
 * Inserts an element into an array at a specified index.
 *
 * @param arr - The array where the element will be inserted.
 * @param element - The element to be inserted into the array.
 * @param index - The index at which the element should be inserted.
 * @returns A new array with the element inserted at the specified index.
 * @throws Will throw an error if the index is out of bounds.
 */
export function insertElementIntoArray<T>(
  arr: T[],
  element: T,
  index: number
): T[] {
  if (index < 0 || index > arr.length) {
    throw new Error('Index out of bounds');
  }
  return [...arr.slice(0, index), element, ...arr.slice(index)];
}

/**
 * Removes an element from an array at the specified index.
 *
 * @param arr - The array from which the element will be removed.
 * @param index - The index of the element to be removed.
 * @returns A new array with the element removed from the specified index.
 * @throws Will throw an error if the index is out of bounds.
 */
export function removeElementFromArray<T>(arr: T[], index: number): T[] {
  if (index < 0 || index >= arr.length) {
    throw new Error('Index out of bounds');
  }
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

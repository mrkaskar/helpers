import { appendElementToArray, prependElementToArray, removeElementFromArray, insertElementIntoArray, } from '.';
describe('Array Manipulation Functions', () => {
    describe('insertElementIntoArray', () => {
        it('should insert an element at the specified index', () => {
            const arr = [1, 2, 3];
            const result = insertElementIntoArray(arr, 4, 1);
            expect(result).toEqual([1, 4, 2, 3]);
        });
        it('should insert an element at the beginning of the array', () => {
            const arr = [1, 2, 3];
            const result = insertElementIntoArray(arr, 0, 0);
            expect(result).toEqual([0, 1, 2, 3]);
        });
        it('should insert an element at the end of the array', () => {
            const arr = [1, 2, 3];
            const result = insertElementIntoArray(arr, 4, 3);
            expect(result).toEqual([1, 2, 3, 4]);
        });
        it('should throw an error if the index is out of bounds', () => {
            const arr = [1, 2, 3];
            expect(() => insertElementIntoArray(arr, 4, 5)).toThrowError('Index out of bounds');
        });
    });
    describe('removeElementFromArrayAtIndex', () => {
        it('should remove the element at the specified index', () => {
            const arr = [1, 2, 3];
            const result = removeElementFromArray(arr, 1);
            expect(result).toEqual([1, 3]);
        });
        it('should remove the first element of the array', () => {
            const arr = [1, 2, 3];
            const result = removeElementFromArray(arr, 0);
            expect(result).toEqual([2, 3]);
        });
        it('should remove the last element of the array', () => {
            const arr = [1, 2, 3];
            const result = removeElementFromArray(arr, 2);
            expect(result).toEqual([1, 2]);
        });
        it('should throw an error if the index is out of bounds', () => {
            const arr = [1, 2, 3];
            expect(() => removeElementFromArray(arr, 5)).toThrowError('Index out of bounds');
        });
    });
    describe('prependElementToArray', () => {
        it('should prepend an element to the front of the array', () => {
            const arr = [2, 3, 4];
            const result = prependElementToArray(arr, 1);
            expect(result).toEqual([1, 2, 3, 4]);
        });
        it('should prepend an element to an empty array', () => {
            const arr = [];
            const result = prependElementToArray(arr, 1);
            expect(result).toEqual([1]);
        });
    });
    describe('appendElementToArray', () => {
        it('should append an element to the end of the array', () => {
            const arr = [1, 2, 3];
            const result = appendElementToArray(arr, 4);
            expect(result).toEqual([1, 2, 3, 4]);
        });
        it('should append an element to an empty array', () => {
            const arr = [];
            const result = appendElementToArray(arr, 1);
            expect(result).toEqual([1]);
        });
    });
});
//# sourceMappingURL=arrays.test.js.map
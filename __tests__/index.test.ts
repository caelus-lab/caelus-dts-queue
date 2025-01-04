import Queue from "../index.ts";

describe('Queue Test', () => {
    const queue = new Queue([0]);
    beforeEach(() => {
        queue.clear();
    })
    test('should initialize the class without error', () => {
        expect(queue).toBeDefined();
        expect(queue.size).toBe(0);
    })
    test('should add elements', () => {
        queue.enqueue(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        expect(queue.size).toBe(10);
    })
    test('should support spread operator', () => {
        queue.enqueue(1, 2, 3);
        const newQueue = [...queue];
        expect(newQueue).toEqual(expect.arrayContaining([1, 2, 3]));
    })
    test('should support toArray', () => {
        queue.enqueue(1, 2, 3);
        const newQueue = queue.toArray();
        expect(newQueue).toEqual(expect.arrayContaining([1, 2, 3]));
    })
    test('should contains specific element', () => {
        queue.enqueue(1, 2, 3, 6, 43, 5, 6, 7, 8, 9, 10);
        expect(queue.contains(43)).toBeTruthy();
    })
    test('should retrieve the front value', () => {
        queue.enqueue(99, 2, 3, 4, 3, 5)
        expect(queue.peek()).toEqual(99)
    })
    test('should remove and return the front element', () => {
        queue.enqueue(89, 2, 3, 4, 1, 5, 99)
        const el = queue.dequeue()
        expect(el).toBe(89)
        expect(queue.size).toBe(6)
    })
    test('should match with similar queue', () => {
        queue.enqueue(89, 2, 3, 4, 1, 5, 99)
        const newQueue = new Queue([89, 2, 3, 4, 1, 5, 99])
        expect(queue.equals(newQueue)).toBeTruthy()
    })
})
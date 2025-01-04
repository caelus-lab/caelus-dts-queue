import {IterableElement} from '@caelus-dts/iterable';
import LinkedList, {CompareFunc} from '@caelus-dts/linked-list';

const DEF_VAL = {
    compare_function: <T>(a: T, b: T) => a === b,
}

/**
 * Represents a first-in-first-out (FIFO) queue data structure
 * > Elements are added to the back of the queue (enqueue) and removed from the front (dequeue)
 */
export default class Queue<T> extends IterableElement<T> {
    protected readonly _list: LinkedList<T>;

    /**
     * Creates a new Queue instance
     *
     * @param [values=null] - @param values - Iterable of values to pre-populate the queue
     * @param [compareFunc=Function] - The comparison function used to compare elements in the queue
     */
    constructor(
        values: Iterable<T> | null = null,
        compareFunc: CompareFunc<T> = DEF_VAL.compare_function,
    ) {
        super();
        this._list = new LinkedList<T>(values, compareFunc);
    }

    /**
     * Checks whether the queue is empty
     */
    public get isEmpty() {
        return this._list.isEmpty;
    }

    /**
     * Check the number of elements currently stored in the queue
     */
    public get size() {
        return this._list.size;
    }

    protected override get iterator() {
        return this._list[Symbol.iterator]();
    }

    /**
     * Clears the queue, removing all elements
     */
    public clear() {
        this._list.clear();
    }

    /**
     * Adds items to the back of the queue
     *
     * @param items - The items to add to the queue
     *
     * @returns The queue instance itself for chaining
     */
    public enqueue(...items: T[]) {
        this._list.push(...items);
        return this;
    }

    /**
     * Removes and returns the element at the front of the queue
     *
     * @returns The removed element, or undefined if the queue is empty
     */
    public dequeue() {
        if (this.isEmpty) return undefined;
        return this._list.shift();
    }

    /**
     * Retrieves the value of the element at the front of the queue without removing it
     *
     * @returns The value of the element at the front of the queue, or undefined if the queue is empty
     */
    public peek() {
        return this._list.first;
    }

    /**
     * Checks if a specific element exists in the queue
     *
     * @param item - The element to search for
     *
     * @returns Boolean that indicates if the item exists in the queue or not
     */
    public contains(item: T) {
        return this._list.contains(item);
    }

    /**
     * Converts the queue to an array containing all its elements
     *
     * @returns An array representation of the queue
     */
    public toArray() {
        return this._list.toArray();
    }

    /**
     * Compares the current queue with another queue for equality
     *
     * @param queue - The queue to compare with
     *
     * @returns Boolean that indicates if the both queues contains the same elements or not
     */
    public equals(queue: Queue<T>) {
        for (const item of queue) {
            if (!this.contains(item)) return false;
        }
        return true;
    }
}
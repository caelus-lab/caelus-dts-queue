# @caelus-dts/queue

## Overview
A TypeScript implementation of a queue data structure following the FIFO (First-In, First-Out) principle.

## Installation
- using `npm`
```shell
npm install @caelus-dts/queue
```
- using `yarn`
```shell
yarn add @caelus-dts/queue
```
- using `pnpm`
```shell
pnpm add @caelus-dts/queue
```

## Usage

```ts
import Queue from '@caelus-dts/queue';

const queue = new Queue<number>();

queue.enqueue(10, 20, 30);

console.log(queue.dequeue()); // Output: 10
console.log(queue.peek()); // Output: 20
console.log(queue.size); // Output: 2
console.log(queue.isEmpty); // Output: false

queue.clear();
console.log(queue.isEmpty); // Output: true


const values = [1, 2, 3, 4, 5, 5];
const queue2 = new Queue(values);

console.log(queue2.toArray()) // Output: [1, 2, 3, 4, 5, 5]
console.log(queue2.contains(1)) // Output: true
console.log(queue2.contains(10)) // Output: false

const queue3 = new Queue([1, 2, 3]);
console.log(queue2.equals(queue3)); // Output: false
```

## API Documentation

### Constructor
`new Queue<T>(values?: Iterable<T>, compareFunc?: CompareFunc<T>)`
Creates a new Queue instance.
- **`values`**: Optional iterable of values to pre-populate the queue.
- **`compareFunc`**: Optional comparison function used to compare elements in the queue. Defaults to strict equality (`===`).

### Properties
- **`isEmpty`**: Returns `true` if the queue is empty, `false` otherwise.
- **`size`**: Returns the number of elements in the queue.

### Methods
- **`enqueue(...items: T[])`**: Adds items to the back of the queue. Returns the queue instance for chaining.
- **`dequeue()`**: Removes and returns the element at the front of the queue. Returns `undefined` if the queue is empty.
- **`peek()`**: Returns the element at the front of the queue without removing it. Returns `undefined` if the queue is empty.
- **`clear()`**: Removes all elements from the queue.
- **`contains(item: T)`**: Checks if the queue contains a specific element.
- **`toArray()`**: Returns an array containing all elements in the queue.
- **`equals(queue: Queue<T>)`**: Checks if the current queue is equal to another queue.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

## License
[MIT License](LICENSE)
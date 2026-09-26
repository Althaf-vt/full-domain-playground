# 🧠 Full Domain — Problems & Practice

> A collection of questions, coding problems, concepts, and practical tasks collected during **Full Domain preparation**.
>
> **Status:** All problems are intentionally unchecked. Mark them as completed as you solve them.

---

## 📌 Progress

* ⬜ Not Started
* ☑️ Completed

> **Tip:** Replace `- [ ]` with `- [x]` when you complete a problem.

---

# 🟨 JavaScript

## Practical Problems

* [ ] Find the average score of each class from an array of student objects
* [ ] Convert a nested object into a flat object
* [ ] Convert a nested array into a flat array
* [ ] Implement `Promise.all()` from scratch
* [ ] Implement `Promise.allSettled()` from scratch
* [ ] Convert callback hell into promise chaining
* [ ] Implement `Object.freeze()` practically
* [ ] Implement and explain `Object.defineProperty()`
* [ ] Find the sum of values of nested objects
* [ ] Create a general function to find the sum of deeply nested objects at any level
* [ ] Convert `[1, 2, 0, [3, 7]]` into `[2, 4, 0, 6, 14]` using only array methods
* [ ] Create a Promise and resolve it inside an `if` block based on a condition using `Array.some()`
* [ ] Print the current date into a file using the Node.js `fs` module
* [ ] Find the sum of positive values from a mixed-type array

### Mixed Array Problem

```js
const mixedArray = [
  1,
  "hello",
  true,
  null,
  2,
  -2,
  undefined,
  { id: 101, name: "Arjun" },
  199,
  [10, 20, 30],
  45.6,
  false,
  () => "I am a function"
];
```

* [ ] Find the sum of all positive values from the array

---

## JavaScript Concepts

* [ ] Static memory allocation — benefits
* [ ] Advantages of static memory allocation
* [ ] ASCII vs UTF-8
* [ ] Homogeneous vs heterogeneous data
* [ ] Why can't we use the `window` object instead of Context?
* [ ] Derived state
* [ ] Why are states immutable?
* [ ] Why shouldn't hooks be used inside conditional statements?
* [ ] Why does React StrictMode render twice?
* [ ] Reading file size
* [ ] Object freezing
* [ ] `Object.defineProperty()`

---

# ⚛️ React

## Concepts

* [ ] Form submission involving child-to-parent data transfer
* [ ] Benefits of uncontrolled components
* [ ] Limitations of functional components
* [ ] Incremental rendering
* [ ] Why can't we use the `window` object instead of Context?
* [ ] Modify an array stored inside a `ref`
* [ ] Why are React states immutable?
* [ ] Derived state
* [ ] Why shouldn't hooks be used inside conditional statements?
* [ ] Why does StrictMode render twice?
* [ ] Built-in components in React
* [ ] Dynamic routing
* [ ] Reading query parameters

---

# 🟩 Node.js / Express

## Node.js

* [ ] Methods in the Events module
* [ ] Read file size
* [ ] Create a Promise and resolve it conditionally
* [ ] Write the current date to a file using `fs`

## Express

* [ ] Working flow of JWT
* [ ] Router-level middleware implementation
* [ ] Router-level middleware to block a request based on `req.url`
* [ ] Send a request to an endpoint and retrieve status code and data
* [ ] Read `req.params` and `req.query` from the same route
* [ ] Create a route where the output is: `Anu is an HR and Amal is a CEO`
* [ ] Subdomains
* [ ] Role of a reverse proxy in hosting
* [ ] How browser caching works

---

# 🍃 MongoDB

## Concepts

* [ ] Materialized views
* [ ] Write concern
* [ ] Read concern
* [ ] How to increase availability in a distributed system

## Practical Queries

### Employee Collection

* [ ] Find the difference between the highest and lowest salary from an employee collection

---

# 🌳 Data Structures & Algorithms

## Arrays

* [ ] Recursive function to find the sum of even numbers in an array
* [ ] Shuffle an array
* [ ] Remove the middle element from an array
* [ ] Find the sum of middle 5 elements in a linked list
* [ ] Print elements in the required sequence:

```text
100 98 94 88 80 70 58 44 28 10
```

* [ ] Print unique elements from nested arrays

```js
const arr = [
  [1],
  [4, 2],
  [6, 1, 3],
  [8, 2, 1, 4]
];

// Expected:
// 1 2 3 4
```

---

## Strings

* [ ] Remove extra whitespaces from a string
* [ ] Convert a string to Title Case
* [ ] Remove duplicates from a string
* [ ] Find the longest substring palindrome
* [ ] Find the longest consecutive repeating characters

### Example

```text
Input:
tryurrrrrtrttrr

Output:
rrrrr
```

* [ ] Find the second-longest word in a sentence without using the built-in `split()`

```text
Input:
my name is Rahul

Output:
name
```

---

## Linked Lists

* [ ] Remove the first instance of an odd value from a linked list
* [ ] Check whether a linked list is circular
* [ ] Find the middle element of a linked list
* [ ] Create a linked list and find its average
* [ ] Find the sum of the middle 5 elements in a linked list

---

## Stacks

* [ ] Sort a stack using a temporary stack
* [ ] Implement a stack with `push`, `pop`, and `getMax()` where every operation works in `O(1)`
* [ ] Implement a method to insert elements into a stack in ascending order
* [ ] Reverse a stack
* [ ] Reverse a string using a stack
* [ ] Implement a stack that supports popping from both ends in constant time

---

## Queues

* [ ] Bounded queues
* [ ] Monotonic queue
* [ ] Application of a double-ended queue

---

## Trees

* [ ] Degenerate tree
* [ ] AVL tree
* [ ] Red-black tree
* [ ] Binary Search Tree
* [ ] Find the minimum-value node in a BST using recursion
* [ ] Find the depth of a BST
* [ ] Complete binary tree — example
* [ ] Complete binary tree — concepts
* [ ] Trie serialization and deserialization
* [ ] Find the longest common prefix using a Trie

---

## Graphs

* [ ] Weighted graph
* [ ] Spanning tree
* [ ] Minimum spanning tree
* [ ] Shortest path algorithm
* [ ] Shortest distance algorithm
* [ ] DFS with backtracking
* [ ] Backtracking

---

## Sorting

* [ ] Selection sort
* [ ] Merge sort
* [ ] Quick sort
* [ ] Time complexity of Quick Sort
* [ ] Create a function with `O(n log n)` time complexity

---

## Hashing

* [ ] Separate chaining
* [ ] Hash table implementation
* [ ] Hash table time complexity
* [ ] Hash map
* [ ] Load factor
* [ ] Linear probing
* [ ] Quadratic probing
* [ ] Double hashing
* [ ] Rehashing
* [ ] Collision control
* [ ] How to minimize collisions
* [ ] Bloom filters
* [ ] Minimal perfect hash function
* [ ] Common elements in two arrays using a hash table

---

## Memory & Complexity

* [ ] Benefits of static memory allocation
* [ ] Array amortization
* [ ] Time complexity analysis
* [ ] Space complexity analysis

---

# 📚 Problems by Source

> These sections preserve the original source/person associated with each question.

---

## 👤 Paloli

* [ ] Degenerate tree
* [ ] Monotonic stack
* [ ] Monotonic queue
* [ ] Separate chaining
* [ ] Hash table time complexity
* [ ] Implement stack with `push`, `pop`, and `getMax()` in `O(1)`
* [ ] How to minimize collisions
* [ ] Bloom filters
* [ ] Minimal perfect hash function
* [ ] Weighted graph
* [ ] Check whether a linked list is circular
* [ ] Check whether a target exists in a sorted 2D array

```js
const arr = [
  [1, 2, 4],
  [5, 7, 9],
  [12, 34, 45]
];

const target = 9;
```

---

## 👤 Anbin

* [ ] Sort a stack using a temporary stack
* [ ] Hash table implementation
* [ ] AVL tree
* [ ] Quadratic probing
* [ ] Double hashing
* [ ] Find the depth of a BST

---

## 👤 GR

* [ ] Rehashing
* [ ] Backtracking
* [ ] ASCII vs UTF-8
* [ ] Homogeneous data
* [ ] Shuffle an array
* [ ] Selection sort
* [ ] Title Case string
* [ ] Advantages of static memory allocation
* [ ] Remove extra whitespaces from a string
* [ ] Stack with the ability to pop from both ends in constant time

---

## 👤 Rahul Ranjan

* [ ] Remove duplicates from a nested array using recursion or without recursion
* [ ] Convert a nested array into a flat array using recursion or without recursion
* [ ] Find the longest substring palindrome
* [ ] Binary search using recursion
* [ ] Find the longest common prefix using a Trie
* [ ] Check whether parentheses are balanced
* [ ] Reverse a string in place using a stack
* [ ] Find the middle element of a linked list
* [ ] Study BST questions
* [ ] Study Binary Tree questions
* [ ] Study Graph questions
* [ ] Study Heap Sort

---

## 👤 Aparna

* [ ] Quick Sort
* [ ] Remove duplicates from a string
* [ ] Reverse a stack

---

## 👤 Swathy

* [ ] Linked list chaining
* [ ] Probing
* [ ] Collision control
* [ ] Spanning tree
* [ ] Hash map

---

## 👤 Pranav

* [ ] Find the longest consecutive repeating characters in a string

```text
Input:
tryurrrrrtrttrr

Output:
rrrrr
```

* [ ] Find the second-longest word in a sentence without using built-in `split()`

```text
Input:
my name is Rahul

Output:
name
```

---

## 👤 Vipin Vargees

### Problem 1

```js
const ab = [
  1, 3, 9, 45, 123, 12,
  112, 123, 12, -1, -2, -3
];
```

* [ ] Solve the required grouping/sum pattern

```text
9 + 3 + 1 = 13
12 + 123 + 45 = ...
12 + 123 + 112 = ...
```

### Problem 2

```text
100 98 94 88 80 70 58 44 28 10
```

* [ ] Print elements in the required order

### Problem 3

* [ ] Find the sum of the middle 5 elements in a linked list

### Problem 4

* [ ] Merge Sort

### Problem 5

* [ ] Quick Sort

### Problem 6

```js
const ab = [
  { a: [34, 3433] },
  { a: [34, 3433] },
  { a: [334, 3431] }
];
```

* [ ] Count the number of `3`s in the array of objects

### Problem 7

* [ ] Find common elements in two arrays using a hash table

### Problem 8

```js
const arr = [
  [1],
  [4, 2],
  [6, 1, 3],
  [8, 2, 1, 4]
];
```

* [ ] Print:

```text
1 2 3 4
```

---

## 👤 Jeswin

* [ ] Sparse array
* [ ] Jagged array
* [ ] Load factor
* [ ] Linear probing
* [ ] Quadratic probing
* [ ] Segment tree
* [ ] Red-black tree
* [ ] Minimum spanning tree

---

## 👤 Jobin George

### Divide and Conquer

* [ ] Divide and conquer
* [ ] Shortest distance algorithm
* [ ] DFS with backtracking
* [ ] Complete binary tree example

---

## 👤 Pranav Shankar

* [ ] Remove the middle element from an array
* [ ] Time complexity of Quick Sort
* [ ] Create a function with `O(n log n)` time complexity
* [ ] Find the longest consecutive repeating characters in a string

---

# 🧩 Additional Full Domain Questions

## DSA

* [ ] Recursive function to find the sum of even numbers in an array
* [ ] Method to insert elements in ascending order into a stack
* [ ] Application of a double-ended queue
* [ ] Shortest path algorithm
* [ ] Complete binary tree example
* [ ] Find the minimum-value node in a BST using recursion
* [ ] Linked list — create and find average

---

## React / Frontend

* [ ] Send request to an endpoint and get status code and data
* [ ] Modify an array stored in a `ref`
* [ ] Why are states immutable?
* [ ] Derived states
* [ ] Reading query parameters
* [ ] Know token expiry
* [ ] Why shouldn't hooks be inside conditional statements?
* [ ] Why does StrictMode render twice?
* [ ] Built-in React components
* [ ] Dynamic routing

---

## Node / Express / Web

* [ ] Reading file size
* [ ] Subdomains
* [ ] Roles of a reverse proxy in hosting
* [ ] How browser cache works
* [ ] Dynamic routing
* [ ] `req.params` and `req.query`
* [ ] Router-level middleware
* [ ] Router-level middleware to block a request URL

---

# 🎯 Revision Checklist

Before attempting the Full Domain assessment, make sure you have gone through:

### JavaScript

* [ ] Core JavaScript concepts
* [ ] Objects and property descriptors
* [ ] Promises
* [ ] Async programming
* [ ] Array methods
* [ ] Recursion
* [ ] Memory concepts

### React

* [ ] Components
* [ ] State
* [ ] Props
* [ ] Context
* [ ] Refs
* [ ] Hooks
* [ ] Routing
* [ ] Rendering

### Node.js / Express

* [ ] Event system
* [ ] File system
* [ ] Promises
* [ ] Middleware
* [ ] Routing
* [ ] JWT
* [ ] Reverse proxy
* [ ] Browser caching

### MongoDB

* [ ] Read concern
* [ ] Write concern
* [ ] Availability
* [ ] Distributed systems
* [ ] Queries
* [ ] Aggregation concepts

### DSA

* [ ] Arrays
* [ ] Strings
* [ ] Linked Lists
* [ ] Stacks
* [ ] Queues
* [ ] Trees
* [ ] Graphs
* [ ] Hashing
* [ ] Sorting
* [ ] Recursion
* [ ] Backtracking
* [ ] Complexity analysis
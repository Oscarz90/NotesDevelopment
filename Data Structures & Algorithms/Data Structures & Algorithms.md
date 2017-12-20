# Data Structures & Algorithms

### Table of Contents

  + [Introduction](#introduction)
  + [Data Structures](#data-structures)
    + [Linked Lists](#linked-lists)
    + [Stacks](#stacks)
    + [Queues](#queues)
    + [Sets](#sets)
    + [Hash Table](#hash-table)
    + [Binary Search Tree](#binary-search-tree)
    + [Trie](#trie)
    + [Binary Heap](#binary-heap)
    + [Graph](#graph)
  + [Algorithms](#algorithms)

## Introduction

>“Bad programmers worry about the code. Good programmers worry about data structures and their relationships.” — Linus Torvalds, creator of Linux

Data structures are a critical part of software development, and one of the most common topics for developer job interview questions. The good news is that they’re basically just specialized formats for organizing and storing data.

Still, knowing how to implement these data structures will give you a huge edge in your developer job search, and may come in handy when you’re trying to write high-performance code.

## Data Structures

### Linked Lists

A linked list consists of a group of nodes which together represent a sequence. Each node contains two things: the actual data being stored (which can be basically any type of data) and a pointer (or link) to the next node in the sequence. There are also doubly linked lists where each node has a pointer to both the next item and the previous item in the list.

**Linked List**

![Linked List](http://www.penguinprogrammer.co.uk/images/data-structures/single-list.png "Linked List")

**Double Linked List**

![Double Linked List](http://www.penguinprogrammer.co.uk/images/data-structures/double-list.png "Double Linked List")

**Properties**

| Property | Description |
| :---: | :--- |
| head | The first element inserted in the list |
| tail | The last element inserted in the list |
| size | The number of elements in the list |

**Main Operations** ([myLinkedList.js](assets/scripts/myLinkedList.js))

| Operation | Description |
| :---: | :--- |
| add | Adds a new node in the list |
| addAt | Adds a new node in the list in the index given |
| remove | Removes a node for the given data |
| removeAt | Removes a node in the position given by an index|
| indexOf | Returns the position index for a given data |
| elementAt | Returns the element for the given index |
| isEmpty | Returns a boolean value, true if the list is empty and the opposite when it isn't empty|
| size | Returns the length of the list |
| print | Prints all the elements contained in the list |

**[Back to top](#table-of-contents)**

### Stacks

A stack is a basic data structure where you can only insert or delete items at the top of the stack. It is kind of similar to a stack of books. If you want to look at a book in the middle of the stack you must take all of the books above it off first.
The stack is considered LIFO (Last In First Out) — meaning the last item you put in the stack is the first item that comes out of the stack.

There are three main operations that can be performed on stacks: inserting an item into a stack (called ‘push’), deleting an item from the stack (called ‘pop’), and displaying the contents of the stack (sometimes called ‘pip’).


**Stack**

![Stack](http://www.penguinprogrammer.co.uk/images/data-structures/stack.png "Stack")

**Properties**

| Property | Description |
| :---: | :--- |
| top | the top element in the stack |
| size | The number of elements in the stack |

**Main Operations** ([myStack.js](assets/scripts/myStack.js))

| Operation | Description |
| :---: | :--- |
| pop | Deletes an item from the stack (the top item) |
| push | Adds an item into the stack (on the top) |
| peek | Retrieves the top of the stack without removing it |
| print | Prints all the elements contained in the stack  |

**[Back to top](#table-of-contents)**

### Queues

You can think of a queue as a line of people at a grocery store. The first one in the line is the first one to be served. Just like a queue.

A queue is considered FIFO (First In First Out) to demonstrate the way it accesses data. This means that once a new element is added, all elements that were added before have to be removed before the new element can be removed.
A queue has just two main operations: **enqueue** and **dequeue**. Enqueue means to insert an item into the back of the queue and dequeue means removing the front item.

**Queue**

![Queue](http://www.javascripttutorial.net/wp-content/uploads/2016/08/JavaScript-Queue-Illustration.png "Queue")

**Properties**

| Property | Description |
| :---: | :--- |
| front | The front element in the queue |
| back | The back element in the queue |
| size | The number of elements in the stack |

**Main Operations** ([myQueue.js](assets/scripts/myQueue.js))

| Operation | Description |
| :---: | :--- |
| enqueue | Adds an element into the queue, in the back of the queue |
| dequeue | Removes an element from the queue, the front item |
| front | Returns the front element of the queue |
| print | Prints all the elements contained in the queue  |

**[Back to top](#table-of-contents)**

### Sets

The set data structure stores values without any particular order and with no repeated values. Besides being able to add and remove elements to a set, there are a few other important set functions that work with two sets at once.

+ Union        : This combines all the items from two different sets and returns this as a new set (with no duplicates).
+ Intersection : Given two sets, this function returns another set that has all items that are part of both sets.
+ Difference   : This returns a list of items that are in one set but NOT in a different set.
+ Subset       : This returns a boolean value that shows if all the elements in one set are included in a different set.

**Set**

![Set](https://www.codeproject.com/KB/recipes/DotNetSet/Sets02.png "Set")

**Main Operations** ([mySet.js](assets/scripts/mySet.js))

| Operation | Description |
| :---: | :--- |
| has | Checks for the presence of an element and return true or false |
| values | Returns all the elements contained in the set |
| add | Adds an element to the set |
| remove | Removes an element from a set |
| size | Returns the size of the collection |
| union | Returns the union of two sets |
| intersection | Returns the intersection of two sets |
| difference |  Returns the difference of two sets |
| subset | Tests  if the set is a subset of a different set |

**[Back to top](#table-of-contents)**


### Hash Table

A hash table is a map data structure that contains key / value pairs. It uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.

The hash function usually takes a string as input and it outputs an numerical value. The hash function should always give the same output number for the same input. When two inputs hash to the same numerical output, this is called a collision. The goal is to have few collisions.

So when you input a key / value pair into a hash table, the key is run through the hash function and turned into a number. This numerical value is then used as the actual key that the value is stored by. When you try to access the same key again, the hashing function will process the key and return the same numerical result. The number will then be used to look up the associated value. This provides very efficient O(1) lookup time on average.


**Hash Table**

![Hash](https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Hash_table_5_0_1_1_1_1_0_SP.svg/380px-Hash_table_5_0_1_1_1_1_0_SP.svg.png "Hash")

**Main Operations** ([myHash.js](assets/scripts/myHash.js))

| Operation | Description |
| :---: | :--- |
| hash | Takes a string as input and it outputs an numerical value |
| add | Adds an element to the hash table |
| remove | Removes an element from the hash table |
| print | Prints all the elements contained in the hash table |
| lookup | Searches for a value in the hash table |

**[Back to top](#table-of-contents)**

### Binary Search Tree

A tree is a data structure composed of nodes It has the following characteristics:

+ Each tree has a root node (at the top).
+ The root node has zero or more child nodes.
+ Each child node has zero or more child nodes, and so on.

A binary search tree adds these two characteristics:

+ Each node has up to two children.
+ For each node, its left descendents are less than the current node, which is less than the right descendents.

Binary search trees allow fast lookup, addition and removal of items. The way that they are set up means that, on average, each comparison allows the operations to skip about half of the tree, so that each lookup, insertion or deletion takes time proportional to the logarithm of the number of items stored in the tree.


**Binary Search Tree**

![BinarySearchTree](https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Binary_search_tree.svg/1200px-Binary_search_tree.svg.png "BinarySearchTree")

**Main Operations** ([myBinarySearchTree.js](assets/scripts/myBinarySearchTree.js))

| Operation | Description |
| :---: | :--- |
| add | Adds an element into the tree |
| findMin | Finds the lower value of the three |
| findMax | Finds the largest value of the three |
| find | Searches for the given node |
| isPresent | Validates if the given node exits |
| remove | Removes the given node |
| findMinHeight | Shows the minimun height of the three |
| findMaxHeight | Shows the max height of the three |
| isBalanced | Validate if the three is balanced |
| preOrder | Prints the elements of the three in the order root,left node and right node |
| postOrder | Prints the elements of the three in the order left node, right node and root |
| inOrder | Prints the elements of the three in the order left node, root, right node |

**[Back to top](#table-of-contents)**

### Trie

The trie (pronounced ‘try’), or prefix tree, is a kind of search tree. A trie stores data in steps where each step is a node in the trie. Tries are often used to store words for quick lookup, such as a word auto-complete feature.

Each node in a language trie contains one letter of a word. You follow the branches of a trie to spell a word, one letter at a time. The steps begin to branch off when the order of the letters diverge from the other words in the trie, or when a word ends. Each node contains a letter (data) and a boolean that indicates whether the node is the last node in a word.
Look at the image and you can form words. Always start at the root node at the top and work down. The trie shown here contains the word ball, bat, doll, do, dork, dorm, send, sense.

**Trie**

![Trie](https://camo.githubusercontent.com/5f74b62415c9d1dc4abd46af014e36338e5bfe3e/687474703a2f2f69322e77702e636f6d2f6672616e636573636f6469667573636f2e66696c65732e776f726470726573732e636f6d2f323031322f30362f747269656164742e706e673f773d353834 "Trie")

**Main Operations** ([myTrie.js](assets/scripts/myTrie.js))

| Operation | Description |
| :---: | :--- |
| add | Adds a element in the trie |
| isWord | Validates if the given data is a word, using the trie to validate it |
| print | Prints all the words in the trie |

**[Back to top](#table-of-contents)**

### Binary Heap

A binary heap is another type of tree data structure. Every node has at most two children. Also, it is a complete tree. This means that all levels are completely filled until the last level and the last level is filled from left to right.

A binary heap can be either a min heap or a max heap. In a max heap, the keys of parent nodes are always greater than or equal to those of the children. In a min heap, the keys of parent nodes are less than or equal to those of the children.

The order between levels is important but the order of nodes on the same level is not important. In the image, you can see that the third level of the min heap has values 10, 6, and 12. Those numbers are not in order.

**BinaryHeap**

![BinaryHeap](http://orcunyilmaz.com/wp-content/uploads/2017/07/binary-heap.png "BinaryHeap")

**Main Operations** ([myBinaryHeap.js](assets/scripts/myBinaryHeap.js))

| Operation | Description |
| :---: | :--- |
| insert | Inserts an element into the tree |
| remove | Removes the smallest value from the tree |
| sort | Returns all the elements sorted |

**[Back to top](#table-of-contents)**

### Graph

Graphs are collections of nodes (also called vertices) and the connections (called edges) between them. Graphs are also known as networks.
One example of graphs is a social network. The nodes are people and the edges are friendship.

**Graph**

![Graph](https://cdn-images-1.medium.com/max/800/1*fYG3B8hi4O2kk6aHvFB5mg.png "Graph")

There are two major types of graphs: directed and undirected. Undirected graphs are graphs without any direction on the edges between nodes. Directed graphs, in contrast, are graphs with a direction in its edges.
Two common ways to represent a graph are an adjacency list and an adjacency matrix.

**Graph**

![Graph](https://cdn-images-1.medium.com/max/800/1*01PEzMXTsl9UOnqiGpfnWw.png "Graph")

An adjacency list can be represented as a list where the left side is the node and the right side lists all the other nodes it’s connected to.
An adjacency matrix is a grid of numbers, where each row or column represents a different node in the graph. At the intersection of a row and a column is a number that indicates the relationship. Zeros mean there is no edge or relationship. Ones mean there is a relationship. Numbers higher than one can be used to show different weights.
Traversal algorithms are algorithms to traverse or visit nodes in a graph. The main types of traversal algorithms are breadth-first search and depth-first search. One of the uses is to determine how close nodes are to a root node. See how to implement breadth-first search in JavaScript in the video below.



**Main Operations** ([myGraph.js](assets/scripts/myGraph.js))

| Operation | Description |
| :---: | :--- |
| breadthFirst |Traverses the graph from the given node  |



**[Back to top](#table-of-contents)**

_References_

[10 Common Data Structures Explained with Videos + Exercises](https://medium.freecodecamp.org/10-common-data-structures-explained-with-videos-exercises-aaff6c06fb2b)
[Programming Tutorials and Practice Problems](https://www.hackerearth.com/practice/)

**[Back to top](#table-of-contents)**

## Algorithms














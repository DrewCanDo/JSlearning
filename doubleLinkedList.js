
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoubleLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      previous: null
    }
    this.tail = this.head;
    this.length = 1;
  }
  
  append(value) {
    const newNode = {
      value: value,
      next: null,
      previous: null
    }
    newNode.previous = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
      previous: null
    }
    newNode.next = this.head;
    this.head.previous = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }
  
  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    if (index === 0) {
      return this.prepend(value);
    }
    
    const newNode = {
      value: value,
      next: null,
      previous: null
    }
    
    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;
    
    leader.next = newNode;
    newNode.previous = leader;
    newNode.next = follower;
    follower.previous = newNode;
    
    this.length++;
    return this;
  }
  
  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      if (this.head) {
        this.head.previous = null;
      }
    } else if (index === this.length - 1) {
      this.tail = this.tail.previous;
      this.tail.next = null;
    } else {
      const nodeToRemove = this.traverseToIndex(index);
      const beforeNode = nodeToRemove.previous;
      const afterNode = nodeToRemove.next;
      
      beforeNode.next = afterNode;
      afterNode.previous = beforeNode;
    }
    this.length--;
    return this;
  }
  
  printList() {
    let array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
    return array;
  }
  
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

// Test the double linked list
const myDoubleLinkedList = new DoubleLinkedList(10);
myDoubleLinkedList.append(5);
myDoubleLinkedList.append(16);
myDoubleLinkedList.prepend(1);
myDoubleLinkedList.insert(2, 99);
myDoubleLinkedList.remove(2);
myDoubleLinkedList.printList();
// Should output: [1, 10, 16]

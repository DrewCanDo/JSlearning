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
      previous: null,
    };
    this.length = 1;
    this.tail = this.head;
  }

  append(value) {
    let newNode = new Node(value); //creating a new node
    newNode.previous = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    let newNode = new Node(value); //create new node (nN)
    this.head.previous = newNode; //set current heads node's next pointer to newNode (nN)
    newNode.next = this.head; //set nN's next pointer to current head
    this.head = newNode; //set nN to the head position
    this.length++;
    return this;
  }
  insert(index, value) {
    if (index == 0) {
      this.prepend(value);
      return this;
    }
    let newNode = new Node(value);
    let leftNode = this.traverseToIndex(index - 1);
    let rightNode = leftNode.next;
    leftNode.next = newNode;
    newNode.previous = leftNode;
    newNode.next = rightNode;
    rightNode.previous = newNode;
    this.length++;
    return this;
  }

  remove(index) {
    if (index == 0) {
      this.head = this.head.next;
      this.head.previous = null;
    }
    if (index != 0) {
      const beforeTargetNode = this.traverseToIndex(index - 1);
      const targetNode = this.traverseToIndex(index);
      beforeTargetNode.next = targetNode.next;
      beforeTargetNode.next.previous = beforeTargetNode;
    }
    this.length--;
    return this;
  }

  printList() {
    let array = [];
    let count = 0;
    let holderNode = this.head;
    while (count < this.length) {
      array.push(holderNode.value);
      holderNode = holderNode.next;
      count++;
    }
    console.log(array);
  }
  traverseToIndex(index) {
    let nodeHolder = this.head;
    let count = 0;
    while (count < index) {
      nodeHolder = nodeHolder.next;
      count++;
    }
    return nodeHolder;
  }
}

let myDoubleLinkedList = new DoubleLinkedList(50);
myDoubleLinkedList.append(5);
myDoubleLinkedList.append(7);
myDoubleLinkedList.prepend(10);
myDoubleLinkedList.insert(3, 2);
myDoubleLinkedList.remove(0);
myDoubleLinkedList.printList();

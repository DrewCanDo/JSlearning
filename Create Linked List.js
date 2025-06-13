class LinkedList { //a class is a blueprint for creating objects
  constructor(value) { //constructor is a special method for creating and initializing objects
    this.head = {
      vaule: value,
      next: null
    }
    this.tail = this.head; //refrence to the head
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null
    }
    this.tail.next = newNode; //this will grab the refreneced last item and set its next value to the new node.
    this.tail = newNode; //this will now update the last item to be the new node.
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  insert(index, value) {
    //insert a new value at a certain index in the linked list.
    const newNode = {
      value: value,
      next: null
    }
    const leader = this.traverseToIndex(index);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this;
  }
  remove(index) {

  }
  printList() {
    let array = [];
    let currentNode = this.head;
    while (currentNode.next) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
  }
  traverseToIndex(index) {
    //check params
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.prepend(2);
//myLinkedList.insert(1, 99);
myLinkedList.printList();
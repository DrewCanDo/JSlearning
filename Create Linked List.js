class LinkedList { //a class is a blueprint for creating objects
  constructor(value) { //constructor is a special method for creating and initializing objects
    this.head = {
      vaule: value,
      next: null;
    }
    this.tail = this.head;
  }
}

const myLinkedList = new LinkedList(10);
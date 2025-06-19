//Stacks is a type of data structure the resembiles stacking plates. (like kitchen plates)
//they are stacked on top of each other and you can only access the top plate.
//LIFO. last in first out.
//they are very good when you need the last value and is good in language efficient engines
//browser history is a stack. an undo button's idea comes from a stack.
//pop O(1), push O(1), peek O(1), lookup O(n)

//Queues are like a line of people waiting to eat.
//the first person to arrive is the first person to go.
//FIFO first in first out.
//queues are used alot in programming problems and interview questions.
//resturant app, uber, lift, a printer. all use Queues
//lookup O(n), enqueue O(1), dequeue O(1), peek O(1)

//why would you not wanna use an array to build a queue?
//I would say it is because when you remove from the front of an array
//everything has to shift forward and will take more time o(n) I believe.

//JS does not have its own stack or queues data structure.
//we have to make it.

//Stacks
//we vist google, udemy, youtube. in that order on a browser
//we can build it with arrays or linked lists

// setTimeout(() => {
//   //is a function that will NOT stop js from running. it will run after 2secs
//   console.log('2'); //it will run this once the time is complete
// }, 2000); //this 2000 is in miliseconds and it is the wait time.

//a web api
// DOM (Document)
// AJAX(XMLHttpRequest)
//Timeout(setTimeout)

//the abouve are part of the browswer. the Javascript Run-Time Enviornment

//===================CODING MY OWN STACK Data Structure==============================
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.topPlate = null;
    this.bottomPlate = null;
    this.length = 0;
  }

  peek() {
    //shows top node
    console.log(this.topPlate.value);
  }
  push(value) {
    //adds a new node to the top of the stack
    if (!value) {
      return value;
    }
    let newNode = new Node(value);
    if (this.length == 0) {
      this.bottomPlate = newNode;
    } else {
      this.topPlate.next = newNode;
    }
    this.topPlate = newNode;
    this.length++;
  }
  pop() {
    //remove a node from the top and return it
    let lengthCounter = this.length;
    let bottomNode = this.bottomPlate;
    if ((lengthCounter = 0)) {
      return null;
    }
    let removeNode = this.topPlate;
    if (lengthCounter == 1) {
      this.bottomPlate = null;
      this.topPlate = null;
    } else {
      for (let i = 0; i < lengthCounter - 3; i++) {
        //this forloop needs a negitive 3 b/c. it goes 1 down for the length starting at 0.
        // 1 down for setting the bottomplate first. and 1 for getting the node before the last
        bottomNode = bottomNode.next;
      }
      this.topPlate = bottomNode.next;
      this.topPlate.next = null;
    }
    this.length--;
    return removeNode.vaule;
  }
}

let myStack = new Stack();
myStack.push(1); //add 1
myStack.push(10); // add 10
myStack.push(18); // add 18
console.log(myStack); //check the stack.
myStack.peek(); //peek the top. should be 18
myStack.pop(); //remove the top
myStack.peek(); //peek the top again should now be 10

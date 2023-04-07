const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  firstNode = null;
  getUnderlyingList() {
    return this.firstNode
  }

  enqueue(value) {
    this.firstNode = this.addNode(value, this.firstNode)
  }

  addNode(value, currentNode) {
    if (currentNode === null) {
      currentNode = new ListNode(value);
      return currentNode
    } else {
      currentNode.next =  this.addNode(value, currentNode.next)
      return currentNode
    }
  }



  dequeue() {
    const returnValue = this.firstNode.value;
    this.firstNode = this.firstNode.next
    return returnValue;
  }
}


module.exports = {
  Queue
};

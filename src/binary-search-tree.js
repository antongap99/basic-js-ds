const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  rootNode = null;
  root() {
    return this.rootNode
  }

  add(data) {
    if (this.rootNode === null) {
      this.rootNode = new Node(data);
    } else {
      this.addNode(data, this.rootNode)
    }
  }

  has(data) {
    return this.check(data, this.rootNode)
  }

  find(data) {
    return this.findNode(data, this.rootNode)
  }

  min() {
    if (this.rootNode === null) return null;
    return this.findMinNode(this.rootNode);
  }

  max() {
    if (this.rootNode === null) return null;
    return this.findMaxNode(this.rootNode);
  }

  addNode(data, currentNode) {
    if (data > currentNode.data) {
      if (currentNode.right === null) {
        currentNode.right = new Node(data)
      } else {
        this.addNode(data, currentNode.right)
      }
    } else {
      if (currentNode.left === null) {
        currentNode.left = new Node(data)
      } else {
        this.addNode(data, currentNode.left)
      }
    }
  }

  check(data, currentNode) {
    if (!currentNode) return false;
    if (data > currentNode.data) {
      return this.check(data, currentNode.right)
    }
    if (data < currentNode.data) {
      return this.check(data, currentNode.left)
    }
    return true
  }

  findNode(data, currentNode){
    if (currentNode === null) return null
    if (currentNode.data === data) return currentNode;
    if (data > currentNode.data) {
      return this.findNode(data, currentNode.right)
    }
    if (data < currentNode.data) {
      return this.findNode(data, currentNode.left)
    }
  }

  findMinNode(currentNode) {
    if (currentNode.left === null) return currentNode.data;
    return this.findMinNode(currentNode.left)
  }
  findMaxNode(currentNode){
    if (currentNode.right === null) return currentNode.data;
    return this.findMaxNode(currentNode.right)
  }


  remove(data) {
    this.rootNode = this.removeNode(data, this.rootNode);
  }
  removeNode(data, currentNode) {
    if (currentNode === null) return null;
    if (data < currentNode.data) {
      currentNode.left = this.removeNode(data, currentNode.left);
      return currentNode;
    }
    if (data > currentNode.data) {
      currentNode.right = this.removeNode(data, currentNode.right);
      return currentNode;
    }

    if (currentNode.left === null && currentNode.right === null) {
      currentNode = null;
      return currentNode;
    }

    if (currentNode.left === null) {
      currentNode = currentNode.right;
      return currentNode;
    }

    if (currentNode.right === null) {
      currentNode = currentNode.left;
      return currentNode;
    }


    let newNodeData = this.findMinNode(currentNode.right);
    currentNode.data = newNodeData;
    currentNode.right = this.removeNode(newNodeData, currentNode.right);
    return currentNode;
  }
}

const tree = new BinarySearchTree()

tree.add(9);
tree.add(14);
tree.add(2);
tree.add(6);
tree.add(128);
tree.add(8);
tree.add(31);
tree.add(54);
tree.add(1);
tree.remove(14);
tree.remove(8);
tree.remove(9);
console.log(tree.has(14), false);
console.log(tree.has(8), false);
console.log(tree.has(9), false);
console.log(tree.has(2), true);
console.log(tree.has(6), true);
console.log(tree.has(128), true);
console.log(tree.has(31), true);
console.log(tree.has(54), true);
console.log(tree.has(1), true);




module.exports = {
  BinarySearchTree
};
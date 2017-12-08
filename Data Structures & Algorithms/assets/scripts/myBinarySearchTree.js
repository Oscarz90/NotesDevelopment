class Node{
	constructor(data){
		this.data=data
		this.left=null
		this.right=null
	}
}


class BinaryTree{
	constructor(){
		this.rootNode = null;
	}

	add(data){
		const initialNode = this.rootNode;
		if(!initialNode){
			this.rootNode = new Node(data);
		}else{
			const loopNode = function(node){
				if(data<node.data){
					if(!node.left){ 
						node.left = new Node(data)
					}else{
						loopNode(node.left)
					}
				}else if (data > node.data){
					if(!node.right){
						node.right = new Node(data)
					}else{
						loopNode(node.right)
					}
				}
			}
			loopNode(initialNode)
		}
	}

	findMin(){
		let current = this.rootNode
		while(current.left){
			current = current.left
		}
		return current.data
	}

	findMax(){
		let current = this.rootNode
		while(current.right){
			current = current.right
		}
		return current.data
	}

  find(data){
    let current = this.rootNode;
    while(current.data!=data){
      if(data<current.data){
        current = current.left;
      }else{
        current = current.right;
      }
      if(current == null){
        return null;
      }
    }
    return current;
  }

  isPresent(data){
    let currentNode = this.rootNode;
    if(currentNode==null){
      return false
    }else{
      while(currentNode){
        if(currentNode.data==data) return true
        if(data<currentNode.data){ 
          currentNode=currentNode.left
        }else if(data>currentNode.data){ 
          currentNode=currentNode.right
        }
      }
      return false;
    }
  }

  remove(data){
    const removeNode=function(node,data){
      if(node==null){
        return null;
      } else{
        if(node.data==data){
          if(node.left == null && node.right == null){
            return null;
          }else if(node.right == null){
            return node.left
          }else if(node.left == null){
            return node.right;
          }else{
            let tmpNode = node.right;
            while(tmpNode.left!=null){
              tmpNode = tmpNode.left
            }
            node.data = tmpNode.data;
            node.right = removeNode(node.right,tmpNode.data)
            return node;
          }
        }else if(data<node.data){
          node.left = removeNode(node.left,data)
          return node;
        }else if(data>node.data){
          node.right =removeNode(node.left,data)
          return node;
        }
      } 
    }
    removeNode(this.rootNode,data)
  }

  findMinHeight(node = this.rootNode) {
      if (node == null) {
          return -1;
      };
      let left = this.findMinHeight(node.left);
      let right = this.findMinHeight(node.right);
      if (left < right) {
          return left + 1;
      } else {
          return right + 1;
      };
  }

  findMaxHeight(node = this.rootNode) {
      if (node == null) {
          return -1;
      };
      let left = this.findMaxHeight(node.left);
      let right = this.findMaxHeight(node.right);
      if (left > right) {
          return left + 1;
      } else {
          return right + 1;
      };
  }

  isBalanced(){
  	return (this.findMinHeight() >= this.findMaxHeight() - 1)
  }

  preOrder(){
  	let treePreOrder=[]
  	if(this.rootNode==null){
  		return null;
  	}else{
  		const preOrderTraversal=function(node){
  			treePreOrder.push(node.data)
  			if(node.left) preOrderTraversal(node.left)
  			if(node.right) preOrderTraversal(node.right);	
  		}
  		preOrderTraversal(this.rootNode)
  		return treePreOrder;
  	}
  }

  postOrder(){
  	let treePostOrder=[]
  	if(this.rootNode==null){
  		return null;
  	}else{
  		const postOrderTraversal=function(node){
  			if(node.left) postOrderTraversal(node.left)
  			if(node.right) postOrderTraversal(node.right);	
  			treePostOrder.push(node.data)
  		}
  		postOrderTraversal(this.rootNode)
  		return treePostOrder;
  	}
  }

  inOrder(){
		let treeInOrder=[]
		if(this.rootNode==null){
			return null;
		}else{
			const inOrderTraversal=function(node){
				if(node.left) inOrderTraversal(node.left)
					treeInOrder.push(node.data)
				if(node.right) inOrderTraversal(node.right);	
			}
			inOrderTraversal(this.rootNode)
			return treeInOrder;
		}
  }
}

const test1 = new BinaryTree()
test1.add(50)
test1.add(30)
test1.add(70)
test1.add(20)
test1.add(40)
test1.add(60)
test1.add(80)
test1.add(15)
test1.add(25)
test1.add(35)
test1.add(45)
test1.add(55)
test1.add(65)
test1.add(75)
test1.add(85)
test1.add(10)
console.log(test1.rootNode.left)
console.log(test1.rootNode.right)
console.log(test1.findMin())
console.log(test1.findMax())
console.log(test1.find(80))
console.log(test1.isPresent(82))
console.log("-------")
//test1.remove(30)
console.log(test1.preOrder())
console.log(test1.postOrder())
console.log(test1.inOrder())

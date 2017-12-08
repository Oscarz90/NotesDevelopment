class Node{
	constructor(data){
		this.data=data;
		this.next=null;
	}

	print(){
		console.log(this.data)
	}
}

class Queue{
	constructor(){
		this.size=0;
		this.front=null;
	}
	
	enqueue(data){
		const newNode = new Node(data);
		let currentNode = this.front;
		if(!this.front){
			this.front=newNode;
		}else{
			while(currentNode.next){
				currentNode = currentNode.next;
			}
			currentNode.next = newNode
		}
		
		this.size++
		return this.size
	}

	dequeue(){
		if(this.size==0) return null;
		
		let removedNode=this.front;
		this.front = this.front.next;
		this.size--;	
		return removedNode.data || removedNode;
	}

	front(){
		return this.front;
	}

	print(){
		let currentNode = this.front;
		while(currentNode){
			currentNode.print()
			currentNode = currentNode.next
		}
	}
}

const queueTest=new Queue();
queueTest.enqueue("oscar")
queueTest.enqueue("rob")
queueTest.enqueue("alejo")
queueTest.print()
console.log("----")
console.log(queueTest.dequeue())
console.log(queueTest.dequeue())
console.log("----")
console.log(queueTest.enqueue("jc"))
queueTest.print()
console.log("----")
console.log(queueTest.dequeue())
console.log(queueTest.dequeue())
console.log(queueTest.dequeue())
console.log(queueTest.enqueue("pablo"))
console.log("----")
queueTest.print()


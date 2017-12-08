class Node{
	constructor(data){
		this.data=data;
		this.previous=null;
	}

	print(){
		console.log(this.data)
	}
}

class Stack{
	constructor(){
		this.size = 0;
		this.top  = null;
	}
	pop(){
		const nodeRemoved = this.top;
		this.top = this.top.previous;
		this.size--;
		return nodeRemoved.data;
	}

	push(data){
		const newNode = new Node(data);
		newNode.previous = this.top;
		this.top=newNode;
		this.size++;
		return this.top;
	}

	peek(){
		return this.top.data
	}

	print(){
		let currentNode = this.top
		while(currentNode){
			currentNode.print()
			currentNode=currentNode.previous
		}
	}
}

let stackTest = new Stack()
stackTest.push("oscar")
stackTest.push("alejo")
stackTest.push("rob")
stackTest.push("jc")
console.log(stackTest.size)
stackTest.print()
console.log("------")
console.log(stackTest.pop())
console.log(stackTest.size)
console.log("------")
stackTest.print()



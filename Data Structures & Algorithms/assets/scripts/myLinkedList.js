class Node{
  constructor(data){
    this.data=data;
    this.next=null;
  }

  print(){
  	console.log(this.data)
  }
}

class LinkedList{
  constructor(){
    this.length = 0;
    this.head = null;
  }

  add(data){
    let newNode = new Node(data);
    if(this.head===null){
      this.head = newNode;
    }else{
      let currentNode = this.head;
      while(currentNode.next){
        currentNode = currentNode.next
      }
      currentNode.next = newNode;
    }
    this.length++;
    return this.size;
  }

  addAt(index,data){
    let newNode = new Node(data), currentIndex = -1
    , currentNode = this.head, previousNode=null;

    if(index<0 || index >= this.size && index!=0){
      return -1;
    }

    if(index==0){
      newNode.next = currentNode
      this.head = newNode;
    }else{
      while(currentNode){
        currentIndex++;
        if(currentIndex==index){
          if(previousNode) previousNode.next = newNode;
          newNode.next = currentNode;
        }
        previousNode = currentNode;
        currentNode = currentNode.next;
      }  
    }
    this.length++;
    return this.size
  }

  remove(data){
    let currentNode = this.head, previousNode=null;
    
    while(currentNode){
      if(currentNode.data === data){
        if(previousNode) {
          previousNode.next = currentNode.next
        }else{
          this.head = currentNode.next
        }
        this.length--;
        return currentNode.data
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
      
    }
    return null;
  }
  
  removeAt(index){
    let currentNode = this.head, currentIndex=-1, previousNode=null;;
    if(index < 0 || index >= this.length && index!=0){
      return null;
    }
    while(currentNode){
      currentIndex++;
      if(currentIndex == index) {
        if(previousNode){
          previousNode.next = currentNode.next
        }else{
          this.head = currentNode.next;
        }
        this.length--;
        return currentNode.data;
      }
      previousNode = currentNode;
      currentNode  = currentNode.next;
    }
  }

  indexOf(data){
    let currentIndex=-1, currentNode = this.head;
    if(this.head==null){
      return currentIndex
    }
    while(currentNode){
      currentIndex++;
      if(currentNode.data === data){
        return currentIndex;
      }
      currentNode = currentNode.next
    }
    return -1
  }

  elementAt(index){
    let currentIndex=-1, currentNode = this.head;
    if(index<0 || index >= this.length && index!=0){
      return null;
    }
    while(currentNode){
      currentIndex++;
      if(currentIndex==index) return currentNode.data;
      currentNode = currentNode.next
    }

    return null;
  }

  isEmpty(){
    return this.length===0;
  }

  get size(){
    return this.length;
  }

  print(){
    let currentNode = this.head;
    while(currentNode){
      currentNode.print();
      currentNode = currentNode.next
    }
  }

}

const list = new LinkedList();
const oscar = {nombre:"oscar",apellido:"martinez"}
const alejo = {nombre:"alejo",apellido:"campos"}
const rob = {nombre:"rob",apellido:"trujillot"}
const pablo = {nombre:"pablo",apellido:"medina"}
const jc = {nombre:"jc",apellido:"rocha"}
list.add(oscar)
list.add(alejo)
list.add(rob)
list.print()
console.log("----")
console.log(list.addAt(2,pablo))
console.log("----")
list.print()
console.log("----")
console.log(list.elementAt(3))
console.log("----")
console.log(list.removeAt(3))
console.log("----")
list.print()




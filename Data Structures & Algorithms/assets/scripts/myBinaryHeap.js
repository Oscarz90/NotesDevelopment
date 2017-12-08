class MinHeap{
	
	constructor(){
		this.heap=[null];
	}

	insert(num){
		this.heap.push(num)
		if(this.heap.length>2){
			let index = this.heap.length-1;
			while(this.heap[Math.floor(index/2)] > this.heap[index] && index >1){
				
				[this.heap[Math.floor(index/2)],this.heap[index]] = [this.heap[index],this.heap[Math.floor(index/2)]]
				index = Math.floor(index/2)>=1?Math.floor(index/2):0
				
			}
		}
	}

  remove(){
    let smallest =this.heap[1] || null;
    if(this.heap.length>1){
      let  index = 1;
      
      this.heap[index] = this.heap[this.heap.length-1];
      this.heap.splice(this.heap.length-1)

      let left = index*2; 
      let right=(index*2)+1;

      while((this.heap[left] || this.heap[right]) && (this.heap[index]>this.heap[left] || this.heap[index]>this.heap[right])){
        let leftNode = this.heap[left];
        let rightNode = this.heap[right];
        let actualNode = this.heap[index];
        
        if(leftNode && !rightNode || (leftNode && rightNode && leftNode<rightNode)){
          [this.heap[index],this.heap[left]]=[this.heap[left],this.heap[index]]
          index=left;
        }else if(!leftNode && rightNode || (leftNode && rightNode && leftNode>rightNode)){
          [this.heap[index],this.heap[right]]=[this.heap[right],this.heap[index]]
          index=right;
        }
        left = index *2;
        right = (index *2)+1;
      }  
    }
    
    return smallest;
  }

  sort(){
    let sorted = new Array();
    while(this.heap.length>1){
      sorted.push(this.remove())
    }

    return sorted;
  }

}


class MaxHeap{
  
  constructor(){
    this.heap=[null];
  }

  /**
   * [insert description]
   * @param  {[type]} num [description]
   * @return {[type]}     [description]
   */
  insert(num){
    this.heap.push(num)
    if(this.heap.length>2){
      let index = this.heap.length-1;
      while(this.heap[index] > this.heap[Math.floor(index/2)] && index >1){
        [this.heap[Math.floor(index/2)],this.heap[index]] = [this.heap[index],this.heap[Math.floor(index/2)]]
        index = Math.floor(index/2)>=1?Math.floor(index/2):0
        //console.log(this.heap)
        //console.log(index)
      }
    }
  }

  /**
   * [remove description]
   * @return {[type]} [description]
   */
  remove(){
    let smallest =this.heap[1] || null;
    if(this.heap.length>1){
      let  index = 1;
      
      this.heap[index] = this.heap[this.heap.length-1];
      this.heap.splice(this.heap.length-1)

      let left = index*2; 
      let right=(index*2)+1;

      while((this.heap[left] || this.heap[right]) && (this.heap[index]<this.heap[left] || this.heap[index]<this.heap[right])){
        let leftNode = this.heap[left];
        let rightNode = this.heap[right];
        let actualNode = this.heap[index];
        
        if(leftNode && !rightNode || (leftNode && rightNode && leftNode>rightNode)){
          [this.heap[index],this.heap[left]]=[this.heap[left],this.heap[index]]
          index=left;
        }else if(!leftNode && rightNode || (leftNode && rightNode && rightNode>leftNode)){
          [this.heap[index],this.heap[right]]=[this.heap[right],this.heap[index]]
          index=right;
        }
        left = index *2;
        right = (index *2)+1;
      }  
    }
    
    return smallest;
  }

  sort(){
    let sorted = new Array();
    while(this.heap.length>1){
      sorted.push(this.remove())
    }

    return sorted;
  }

}

//const test = new MaxHeap();
//const test = new MinHeap();
test.insert(3)
test.insert(5)
test.insert(4)
test.insert(10)
test.insert(6)
test.insert(16)
test.insert(8)
test.insert(1)
//console.log(test.heap)
//console.log("----")
//console.log(test.sort())
/*console.log(test.remove())
console.log(test.heap)
console.log(test.remove())
console.log(test.heap)
console.log(test.remove())
console.log(test.heap)
console.log(test.remove())
console.log(test.heap)
console.log(test.remove())
console.log(test.heap)
console.log(test.remove())
console.log(test.heap)
console.log(test.remove())
console.log(test.heap)
console.log(test.remove())
console.log(test.heap)
console.log(test.remove())
console.log(test.heap)*/
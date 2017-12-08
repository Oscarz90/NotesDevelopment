class BubbleSort{
  constructor(data){
    this.data=data;
  }

  sort(){

    let swapped;
    do{
      swapped=false;
      this.data.map((value,index,array)=>{
        if(index<this.data.length && array[index]>array[index+1]){
          this.swap(index,index+1)
          swapped = true;
        }
      });

    }while(swapped)

  }

  swap(indexA,indexB){
    let temp = this.data[indexA];
    [this.data[indexA], this.data[indexB]]=[this.data[indexB], this.data[indexA]]
    console.log(this.data)
  }
}

const test = new BubbleSort([5,1,4,2,8])
test.sort()
console.log(test.data)
class Set{
  constructor(){
    this.collection=new Array()
  }

  has(element){
    return this.collection.indexOf(element)!==-1
  }

  values(){
    return this.collection;
  }

  add(element){
    if(!this.has(element)){
      this.collection.push(element)
      return true;
    }

    return false;
  }

  remove(element){
    if(this.has(element)){
      this.collection.splice(this.collection.indexOf(element),1)
      return true;
    }
    return false;
  }

  size(){
    return this.collection.length
  }
  
  union(otherSet){
    let newSet = new Set();
    this.collection.forEach((value)=>newSet.add(value));
    otherSet.values().forEach((value)=>newSet.add(value))

    return newSet;
  }
  intersection(otherSet){
    let newSet = new Set();
    this.collection.forEach(value=>{
      if(otherSet.has(value)) newSet.add(value)
    })

    return newSet;
  }
  difference(otherSet){
    let newSet = new Set();
    this.collection.forEach(value=>{
      if(!otherSet.has(value)) newSet.add(value)
    })

    return newSet;
  }
  subset(otherSet){
    return this.collection.every(value=>otherSet.has(value))
  }

}

const setOne = new Set()
console.log(setOne.add("2"))
console.log(setOne.add("1"))
console.log(setOne.add("5"))
console.log(setOne.values())
console.log("------")
const setTwo = new Set()
console.log(setTwo.add("3"))
console.log(setTwo.add("1"))
console.log(setTwo.add("5"))
console.log(setTwo.values())
console.log("------")
const setThree = new Set()
console.log(setThree.add("1"))
console.log(setThree.add("2"))
console.log(setThree.add("5"))
console.log(setThree.add("7"))
console.log(setThree.add("9"))
console.log(setThree.values())
console.log("------")
const newSet = setOne.union(setTwo)
console.log(newSet.values())
console.log("------")
console.log(setOne.intersection(setTwo).values())
console.log(setOne.difference(setTwo).values())
console.log(setTwo.difference(setOne).values())
console.log("------")
console.log(setOne.subset(setTwo))
console.log(setOne.subset(setThree))


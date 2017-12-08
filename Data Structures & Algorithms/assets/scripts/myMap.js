class Map{
  constructor(){
    this.collection={};
    this.length=0;
  }
  size(){
    return this.length;
  }

  set(key,value){
    this.collection[key]=value;
    this.length++;
  }

  has(key){
    return (key in this.collection);
  }

  get(key){
    return this.has(key)?this.collection[key]:null;
  }

  delete(key){
    if(this.has(key)){
      delete this.collection[key]
      this.length--
    } 
  }

  values(){
    return Object.keys(this.collection).map(key=>this.collection[key])
  }

  clear(){
    this.collection = {}
    this.length=0;
  }
}

const myMap = new Map()
myMap.set("oscar",26)
myMap.set("alejo",27)
myMap.set("jc",31)

console.log(myMap.values())
console.log(myMap.size())
console.log("---")
console.log(myMap.get("oscar"))
console.log("---")
myMap.delete("oscar")
console.log(myMap.values())
console.log(myMap.size())
console.log("---")
myMap.clear()
console.log(myMap.values())
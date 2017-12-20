class Hash{
	constructor(){
		this.storage=[]
		this.storageLimit=10;
	}

	hash(key,storageLimit){
		let hashValue=0
		for(let i=0;i<key.length;i++){
			hashValue+=key.charCodeAt(i)
		}
		return hashValue%storageLimit
	}

	add(key,value){
		const index = this.hash(key,this.storageLimit)
		console.log(`key ${key} index ${index}`)
		if(this.storage[index]===undefined){
			this.storage[index]=[[key,value]]
		}else{
			const subIndex = this.storage[index].findIndex(value=>value[0]==key)
			if(subIndex==-1){
				this.storage[index].push([key,value])
			}else{
				this.storage[index][subIndex].push([key,value])
			}
		}		
	}

	remove(key){
		let index = this.hash(key,this.storageLimit)
		console.log(index)
		
		if(this.storage[index]){
			if(this.storage[index].length==1 && this.storage[index][0][0]==key){
				delete storage[index]	
			}else{
				let indexTmp = this.storage[index].findIndex(value=>value[0]==key)
				if(indexTmp!=-1) delete this.storage[index][indexTmp]
			}
		}
	}

	print(){
		this.storage.forEach(value=>{console.log(value)})
	}

  lookup(key){
    var index = hash(key, this.storageLimit);
    if (this.storage[index] === undefined) {
      return undefined;
    } else {
      for (var i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          return this.storage[index][i][1];
        }
      }
    }
  }
}

const test= new Hash()
test.add("oscar",123)
test.add("rob",89)
test.add("alejo",45)
test.add("mtzs",22)
test.add("bre",22)
test.print()
test.remove("oscrar")
test.print()
class Node{
	constructor(){
		this.keys = new Map();
		this.end = false;
		this.setEnd = function (){
			this.end=true;
		}
		this.isEnd = function(){
			return this.end
		}
	}
}

class Trie{

	constructor(){
		this.root = new Node();
	}

	add(input, node = this.root){
		if(input.length==0){
			node.setEnd();
		}else if(!node.keys.has(input[0])){
			node.keys.set(input[0],new Node())
			this.add(input.substr(1), node.keys.get(input[0]))
		}else{
			this.add(input.substr(1),node.keys.get(input[0]))
		}
		return;
	}

	isWord(word){
		let node = this.root;
		while(word.length>1){
			if(!node.keys.has(word[0])){
				return false;
			}else{
				node = node.keys.get(word[0]);
				word = word.substr(1);
			}
		}
		
		return (node.keys.has(word) && node.keys.get(word).isEnd())?true:false;
	}

	print(){
		const words = []
		const searchWords = function(node,string){

			if(node.keys.size>0){
				for(let letter of node.keys.keys()){
					searchWords(node.keys.get(letter),string.concat(letter))
				}
			}
			if(node.isEnd()){
				words.push(string)
			}
		}
		searchWords(this.root,new String())
		return words;
	}
}

myTrie = new Trie()
myTrie.add('ball'); 
myTrie.add('bat'); 
myTrie.add('doll'); 
myTrie.add('dork'); 
myTrie.add('do'); 
myTrie.add('dorm')
myTrie.add('send')
myTrie.add('sense')
console.log(myTrie.print())
console.log(myTrie.isWord('sensse'))
console.log(myTrie.isWord('ball'))
console.log(myTrie.isWord('ball'))

class Wrapper{
	constructor(value){
		this.value = value;
	}
}

class ValueMappable{
	constructor(object){
		this.object=object;
	}

	map(fcn){
		const mapped ={}
		for(const key of Object.keys(this.object)){
			mapped[key]=fcn(this.object[key])
		}

		return new ValueMappable(mapped)
	}
}

class CharCodeMappable {
  constructor (string) {
    this.string = string
  }
  map (f) {
    let string = this.string
    let result = ''
    for (let i = 0; i < string.length; i++) {
      result += String.fromCharCode(
        f(string.charCodeAt(i))
      )
    }
    return new CharCodeMappable(result)
  }
}


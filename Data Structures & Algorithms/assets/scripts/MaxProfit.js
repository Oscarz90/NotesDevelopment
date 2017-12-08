const curry = require('lodash/curry')

const findMaxInArray=curry((minValue,minIndex,value, index)=>value>=minValue && index>minIndex)

const loopArrayPrices = (total,value,index,data)=>{
  let maxIndex = data.findIndex(findMaxInArray(value,index))
  if(maxIndex!=-1) total.push(data[maxIndex]-value)
  return total
}

function getMaxProfit(arrayPrices){
  if(arrayPrices.length>1){
    return Math.max.apply(null,arrayPrices.reduce(loopArrayPrices,[]))
  }
  return arrayPrices[0] || null
}

console.log(getMaxProfit([10,7,12,8,11,9]))
console.log(getMaxProfit([10,18,7,12,8,11,9]))
console.log(getMaxProfit([10]))
console.log(getMaxProfit([]))
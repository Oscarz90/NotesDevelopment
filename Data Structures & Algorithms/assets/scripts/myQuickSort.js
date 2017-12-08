function QuickSort(data){
  if(data.length<=1) return data;
  const [left, right] = [[],[]];
  const pivotIndex = Math.floor(data.length/2);
  let pivot = data[pivotIndex];
  console.log(`<<< Data ${data}`)
  console.log(`Pivot ${pivot}`)
  data.splice(pivotIndex,1);
  data.forEach(value=>{
    (value<pivot)?left.push(value):right.push(value)
  })
  console.log(`Left ${left}`)
  console.log(`Right ${right} >>>`)
  return QuickSort(left).concat(pivot).concat(QuickSort(right))
}

console.log(QuickSort([35,33,42,10,14,19,27,44,26,31]))
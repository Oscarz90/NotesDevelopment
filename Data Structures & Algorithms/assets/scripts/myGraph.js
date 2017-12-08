class Graph{
  constructor(graph){
    this.graph=graph;
  }

  breadthFirst(node){
    const nodesLen = {}
    this.graph.forEach((value,index)=>{nodesLen[index]=Infinity})
    nodesLen[node]=0;

    const queue = [node];
    let current;
    while(queue.length!=0){
      current = queue.shift();
      let curConnected = this.graph[current];
      var neighborIdx = []; 
      var idx = curConnected.indexOf(1);
      while(idx != -1) {
        neighborIdx.push(idx);
        idx = curConnected.indexOf(1,idx +1);
      }
      
      for(var j=0;j<neighborIdx.length; j++){
        if(nodesLen[neighborIdx[j]] == Infinity){
          nodesLen[neighborIdx[j]] = nodesLen[current]+1;
          queue.push(neighborIdx[j]);

        }
      }
    }

    return nodesLen
  }
}

var exBFSGraph = [
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0]
];

const test = new Graph(exBFSGraph);
console.log(test.breadthFirst(1))

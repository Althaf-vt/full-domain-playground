const { Children } = require("react");

class Graph{
    constructor(){
        this.adjList = {};
    }

    addVertex(vertex){
        if(!this.adjList[vertex]) this.adjList[vertex] = new Set();
    }

    addEdge(v1,v2){
        if(!this.adjList[v1]) this.addVertex(v1);
        if(!this.adjList[v2]) this.addVertex(v2);

        this.adjList[v1].add(v2);
        this.adjList[v2].add(v1);
    }

    dfsStack(start){
        if(!this.adjList[start]) return null;

        let visited = new Set();
        let stack = [];

        visited.add(start);
        stack.push(start);

        while(stack.length){
            let curr = stack.pop();

            if(!visited.has(curr)){
                visited.add(curr);
                console.log(curr);
                let neighbours = Array.from(this.adjList[curr]).reverse();

                for(let neigh of neighbours){
                    stack.push(neigh)
                }
            }
        }
    }

    dfsRec(start){
        let visited = new Set();

        const dfs = (vertex) => {
            if(!vertex) return;

            visited.add(vertex)
            console.log(vertex);

            for(let neigh of this.adjList[vertex]){
                if(!visited.has(neigh)){
                    dfs(neigh)
                }
            }
        }
        dfs(start);
    }

    bfs(start){
        if(!this.adjList[start]) return null;

        let visited = new Set();
        let q = [];

        visited.add(start);
        q.push(start);

        while(q.length){
            let curr = q.shift();

            console.log(curr);

            for(let neigh of this.adjList[curr]){
                if(!visited.has(neigh)){
                    q.push(neigh);
                    visited.add(neigh);
                }
            }
        }
    }

    dfsCycleUD(vertex, parent, visited){
        visited.add(vertex);

        for(let neigh of this.adjList[vertex]){
            if(!visited.has(neigh)){
                if(this.dfsCycleUD(neigh, vertex, visited)) return true;
            }else if(parent !== neigh) return true;
        }
        return false;
    }

    hasCycle(){
        let visited = new Set();

        for(let vertex in this.adjList){
            if(!visited.has(vertex)){
                if(this.dfsCycleUD(vertex, null, visited)) return true;
            }
        }
        return false;
    }
}
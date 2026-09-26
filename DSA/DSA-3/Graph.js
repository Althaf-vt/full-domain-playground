class Graph{
    constructor(){
        this.adjList = {};
    }

    addVertex(vtx){
        if(!this.adjList[vtx]){
            this.adjList[vtx] = new Set();
        }
    }

    addEdges(v1,v2){
        if(!this.adjList[v1]) this.addVertex(v1);
        if(!this.adjList[v2]) this.addVertex(v2);

        this.adjList[v1].add(v2);
        this.adjList[v2].add(v1);
    }

    dfsStack(start){
        if(!this.adjList[start]) return null;

        let stack = [];
        let visited = new Set();


        stack.push(start);

        while(stack.length){
            let curr = stack.pop();

            if(!visited.has(curr)){
                visited.add(curr);
                console.log(curr);


                let neighbours = Array.from(this.adjList[curr]).reverse();

                for(let neigh of neighbours){
                    stack.push(neigh);
                }
            }
        }
    }



    bfs(start){
        if(!this.adjList[start]) return null;

        let q = [];
        let visited = new Set();

        q.push(start);
        visited.add(start);

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

    dfsRec(start){
        let visited = new Set();

        const dfs = (vertex) => {
            if(!vertex) return;

            visited.add(vertex);
            console.log(vertex);

            for(let neigh of this.adjList[vertex]){
                if(!visited.has(vertex)){
                    dfs(neigh);
                }
            }
        }
        dfs(start);
    }

    // Cycle directed graph
    hasCycle(){
        let recStack = new Set();
        let visited = new Set();
        
        for(let vertex in this.adjList){
            if(this.detectCycle(vertex,visited,recStack)){
                return true;
            }
        }
        return false;
    }
    
    detectCycle(vertex, visited, recStack){
        if(recStack.has(vertex)) return true;
        if(visited.has(vertex)) return false;
        
        visited.add(vertex);
        recStack.add(vertex);
        
        
        for(let neigh of this.adjList[vertex]){
            if(this.detectCycle(neigh, visited, recStack)){
                return true;
            }
        }
        
        recStack.delete(vertex);
        return false;
    }

    // Cycle undirected graph

    dfsCycleUD(vertex, parent, visited){
        visited.add(vertex);

        for(let neigh of this.adjList[vertex]){
            if(!visited.has(neigh)){
                if(this.dfsCycleUD(neigh, vertex, visited)) return true;
            }else if(parent !== neigh){
                return true;
            }
        }
        return false;
    }

    hasCycleUD(){
        let visited = new Set();

        for(let vertex in this.adjList){
            if(!visited.has(vertex)){
                if(this.dfsCycleUD(vertex, null, visited)) return true;
            }
        }
        return false;
    }

    shortestPath(start, target){
        if(!this.adjList[start] || !this.adjList[target]) return true
        
        let visited = new Set();
        let queue = [];
        let parent = {};
        
        visited.add(start);
        queue.push(start);
        parent[start] = null;
        
        
        while(queue.length){
            let curr = queue.shift();
            
            if(curr === target){
                let path = [];
                let node = target;
                while(node !== null){
                    path.push(node);
                    node = parent[node];
                }
                return path.reverse();
            }
            
            for(let neigh of this.adjList[curr]){
                if(!visited.has(neigh)){
                    visited.add(neigh);
                    queue.push(neigh);
                    parent[neigh] = curr;
                }
            }
        }
        return null
    }  
}
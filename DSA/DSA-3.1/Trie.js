class Graph{
    constructor(){
        this.adjList = {};
    }
    
    addVertex(vertex){
        if(!this.adjList[vertex]){
            this.adjList[vertex] = [];
        }
    }
    
    addEdge(v1,v2){
        if(!this.adjList[v1]) this.addVertex(v1);
        if(!this.adjList(v2)) this.addVertex(v2);
        
        this.adjList[v1].push(v2);
        this.adjList[v2].push(v1); // remove this for directed graph
    }
    
    removeEdge(v1,v2){
        this.adjList[v1] = this.adjList[v1].filter(v => v !== v2);
        
        // remove below line for directed graph;
        this.adjList[v2] = this.adjList[v2].filter(v => v !== v1);
    }
    
    removeVertex(vertex){
        while(this.adjList[vertex].length){
            let adjacent = this.adjList[vertex].pop();
            
            this.adjList[adjacent] = this.adjList[adjacent].filter(v => v !== vertex);
        }
        delete this.adjList[vertex]
        
        // === For directed graph ===
        // for(let v in this.adjList){
        //     this.adjList[v] = this.adjList[adj].filter(adj => adj !== vertex)
        // }
        // delete this.adjList[vertex]
    }
    
    print(){
        for(let vertex in this.adjList){
            console.log(`${vertex} : [${this.adjList[vertex]}]`);
        }
    }

    bfs(start){
        if(!this.adjancencyList[start]) return null
        let queue=[];
        let visited=new Set();
        
        queue.push(start);
        visited.add(start);
        while(queue.length){
            let curr=queue.shift();
            console.log(curr);

            for(let neighbour of this.adjancencyList[curr] ){
                if(!visited.has(neighbour)){
                    visited.add(neighbour);
                    queue.push(neighbour);
                }
            }
        }
    }

    shortestPath(start,target){
        if(!this.adjancencyList[start]) return null;
        let queue=[];
        let visited=new Set()
        let parent={}

        queue.push(start);
        visited.add(start);
        parent[start]=null;

        while(queue.length){
            let curr=queue.shift()
            if(curr===target){
                let path=[];
                let node=target;    
                while(node!==null){
                    path.push(node);
                    node=parent[node]
                }
                return path.reverse()
            }
            for(let neighbour of this.adjancencyList[curr]){
                if(!visited.has(neighbour)){
                    queue.push(neighbour);
                    visited.add(neighbour);
                    parent[neighbour]=curr
                }
            }
        }
        return null
    }

    dfsRecursive(start){
        let visited=new Set();
        const dfs=(vertex)=>{
            if(!vertex)return
            visited.add(vertex);
            console.log(vertex);

            for(let neighbour of this.adjancencyList[vertex]){
                if(!visited.has(neighbour)){
                    dfs(neighbour)
                }
            }
        }
        dfs(start)
    }

    dfsStack(start){
        let visited=new Set();
        let stack=[];

        stack.push(start);

        while(stack.length){
            let curr=stack.pop();
            if(!visited.has(curr)){
                visited.add(curr);
                console.log(curr);
                let neighbours=Array.from(this.adjancencyList[curr]).reverse()

                for(let neighbour of neighbours){
                    stack.push(neighbour)
                }
            }
        }
    }

    dfsAllPath(curr,target,path,visited){
        if(path===''){
            path+=curr
        }
        if(curr===target){
            console.log(path);
            return
        }
        visited.add(curr);

        for(let neighbour of this.adjancencyList[curr]){
            if(!visited.has(neighbour)){
                this.dfsAllPath(neighbour,target,path+neighbour,visited);
                visited.delete(neighbour)
            }
        }
    }

    // detect cycle directed graph
    detectCycle(){
        let visited=new Set();
        let recStack=new Set();

            const dfsCycle=(vertex)=>{
                visited.add(vertex);
                recStack.add(vertex);

                for(let neighbour of this.adjancencyList[vertex]){
                    if(!visited.has(neighbour)){
                        if(dfsCycle(neighbour))return true
                    }else if( recStack.has(neighbour)){
                        return true
                    }
                }
                recStack.delete(vertex);
                return false
            }
            
        for(let vertex in this.adjancencyList){
            if(!visited.has(vertex)){
                if(dfsCycle(vertex))return true
            }
        }
        return false
    }

    dfsCycle(vertex,parent,visited){
        visited.add(vertex);
        for(let neighbour of this.adjancencyList[vertex]){
            if(!visited.has(neighbour)){
                if(this.dfsCycle(neighbour,vertex,visited))return true
            }else if(neighbour!=parent){
                return true
            }
        }
        return false
    }

}
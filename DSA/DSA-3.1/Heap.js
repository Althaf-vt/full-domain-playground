class MaxHeap{
    constructor(){
        this.array = [];
    }


    insert(x){
        this.array.push(x);
        let currIndex = this.array.length - 1;

        while(currIndex >= 0){
            let parentIndex = Math.floor((currIndex - 1) / 2);

            if(this.array[currIndex] > this.array[parentIndex]){
                [this.array[currIndex],this.array[parentIndex]] = 
                [this.array[parentIndex],this.array[currIndex]];

                currIndex = parentIndex;
            }else break;

        }
    }

    delete(){
        if(!this.array.length) return;
        let n = this.array.length - 1;

        [this.array[0],this.array[n]] = [this.array[n],this.array[0]];
        let removed = this.array.pop();

        this.heapifyDown(0);
        return removed;
    }

    heapifyDown(index){
        let largest = index;
        let leftChild = (2 * index) + 1;
        let rightChild = (2 * index) + 2;

        if(leftChild < this.array.length && this.array[leftChild] > this.array[largest]){
            largest = leftChild;
        }
        if(rightChild < this.array.length && this.array[rightChild] > this.array[largest]){
            largest = rightChild;
        }

        if(index !== largest){
            [this.array[index],this.array[largest]] = [this.array[largest],this.array[index]];
            this.heapifyDown(largest)
        }
    }

    display(){
        console.log(this.array);
    }
}


function heapSort(arr){
    const maxheap = new MaxHeap();

    for(let num of arr){
        maxheap.insert(num);
    }

    let result = [];

    while(maxheap.array.length){
        result.push(maxheap.delete());
    }
    console.log(result)
}


class MinHeap{
    constructor(){
        this.arr = [];
    }

    insert(x){
        this.arr.push(x);

        let currIndex = this.arr.length - 1;
        while(currIndex > 0){
            let parentIndex = Math.floor((currIndex - 1) / 2);

            if(this.arr[parentIndex] > this.arr[currIndex]){
                [this.arr[currIndex],this.arr[parentIndex]] = 
                [this.arr[currIndex],this.arr[parentIndex]];

                currIndex = parentIndex;
            }else break;
        }
    }

    delete(){
        if(!this.arr.length) return ;

        let n = this.arr.length - 1;

        [this.arr[n],this.arr[0]] = [this.arr[0],this.arr[n]];
        let removed = this.arr.pop();
        this.heapifyDown(0);
        return removed;
    }

    heapifyDown(index){
        let smallest = index;

        let leftChild = (2 * index) + 1;
        let rightChild = (2 * index) + 2;

        if(leftChild < this.arr.length && this.arr[smallest] > this.arr[leftChild]){
            smallest = leftChild;
        }
        if(rightChild < this.arr.length && this.arr[smallest] > this.arr[rightChild]){
            smallest = rightChild;
        }

        if(index !== smallest){
            [this.arr[index],this.arr[smallest]] = [this.arr[smallest],this.arr[index]];
            this.heapifyDown(smallest);
        }
    }
}

function heapSort2(arr){
    let minHeap = new MinHeap();

    for(let num of arr){
        minHeap.insert(num);
    }

    let result = [];

    while(minHeap.arr.length){
        result.push(minHeap.delete());
    }
    console.log(result);
}
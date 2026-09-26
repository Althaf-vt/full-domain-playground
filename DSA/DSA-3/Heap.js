class MaxHeap {
    constructor(){
        this.arr = [];
    }

    insert(x){
        this.arr.push(x);

        let currIdx = this.arr.length - 1;

        while(currIdx > 0){
            let parIndx = Math.floor((currIdx - 1) / 2);

            if(this.arr[parIndx] < this.arr[currIdx]){
                [this.arr[currIdx],this.arr[parIndx]] = 
                [this.arr[parIndx],this.arr[currIdx]];

                currIdx = parIndx;
            }else break;
        }
    }

    delete(){
        if(!this.arr.length) return null
        let n = this.arr.length - 1;
        [this.arr[0],this.arr[n]] = [this.arr[n],this.arr[0]];
        let remove = this.arr.pop();

        this.heapifyDown(0);
        return remove;
    }

    heapifyDown(index){
        let largest = index;
        let leftChild = 2 * index + 1;
        let rightChild = 2 * index + 2;

        if(leftChild < this.arr.length && this.arr[largest] < this.arr[leftChild]){
            largest = leftChild;
        }
        if(rightChild < this.arr.length && this.arr[largest] < this.arr[rightChild]){
            largest = rightChild;
        }

        if(index !== largest){
            [this.arr[index],this.arr[largest]] = [this.arr[largest],this.arr[index]];
            this.heapifyDown(largest)
        }
    }
    display(){
        console.log(this.arr)
    }
}

let arr = [6,4,44,34,23,123,43,90];

function heapSort(arr){
    let maxheap = new MaxHeap();

    for(let n of arr){
        maxheap.insert(n);
    }

    let result = [];

    maxheap.display()

    while(maxheap.arr.length){
        result.push(maxheap.delete());
    }
    return result;
}

// console.log(heapSort(arr))


class MinHeap{
    constructor(){
        this.arr = [];
    }

    insert(x){
        this.arr.push(x);

        let currIdx = this.arr.length - 1;

        while(currIdx > 0){
            let parIndx = Math.floor((currIdx - 1) / 2);

            if(this.arr[parIndx] > this.arr[currIdx]){
                [this.arr[currIdx],this.arr[parIndx]] = [this.arr[parIndx],this.arr[currIdx]];
                currIdx = parIndx;
            }else break;
        }
    }

    delete(){
        if(!this.arr.length) return null;
        let n = this.arr.length - 1;

        [this.arr[0],this.arr[n]] = [this.arr[n],this.arr[0]];
        let removed = this.arr.pop();
        this.heapifyDown(0);
        return removed;
    }

    heapifyDown(index){
        let smallest = index;

        let leftChild = 2 * index + 1;
        let rightChild = 2 * index + 2;

        if(leftChild < this.arr.length && this.arr[leftChild] < this.arr[smallest]){
            smallest = leftChild;
        }
        if(rightChild < this.arr.length && this.arr[rightChild] < this.arr[smallest]){
            smallest = rightChild;
        }

        if(index !== smallest){
            [this.arr[index],this.arr[smallest]] = [this.arr[smallest],this.arr[index]];
            this.heapifyDown(smallest)
        }
    }
}

function heapSortt(arr){
    let minHeap = new MinHeap();

    for(let n of arr){
        minHeap.insert(n);
    }

    let result = [];

    while(minHeap.arr.length){
        result.push(minHeap.delete());
    }

    return result;
}

console.log(heapSortt(arr));
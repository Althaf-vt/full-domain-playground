function selectionSort(arr){
    for(let i = 0; i < arr.length - 1; i ++){
        let min = i;

        for(let j = i + 1; j < arr.length ; j ++){
            if(arr[min] > arr[j]){
                min = j;
            }
        }

        if(min !== i){
            [arr[min],arr[i]] = [arr[i],arr[min]];
        }
    }

    return arr
}

console.log(selectionSort([4,2,1,2,3]))

// rotated array bs
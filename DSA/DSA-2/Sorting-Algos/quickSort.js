function quickSort(arr, start = 0, end = arr.length - 1){
    if(start >= end) return;

    let pivotIndex = partition(arr,start,end);

    quickSort(arr, start, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, end);
    return arr;
}

function partition(arr, start, end){
    let pivot = arr[end];
    let i = start - 1;
    
    for(let j = start; j <= end - 1; j ++){
        if(arr[j] < pivot){
            i ++;
            [arr[i],arr[j]] = [arr[j],arr[i]];
        }
    }
    i ++;
    [arr[i],arr[end]] = [arr[end],arr[i]];
    return i;
}

console.log(quickSort([98,7,6,5,45,34,235,454,34]))
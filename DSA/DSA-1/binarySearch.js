function binarySearch(arr,target){
    let left = 0;
    let right = arr.length - 1;

    while(left <= right){
        let mid = Math.floor((left + right) / 2);

        if(arr[mid] === target) return `target found at ${mid}`;

        else if(target < arr[mid]) right = mid - 1;
        else left = mid + 1;
    }
    return -1
}

// console.log(binarySearch([1,2,3,4,5,6],3));

function binarySearch_rec(arr,target,left = 0, right = arr.length - 1){
    if(left > right) return -1;

    let mid = Math.floor((left + right) / 2);

    if(arr[mid] === target) return `target found at ${mid}`;
    else if(target < arr[mid]) return binarySearch_rec(arr,target, left, right = mid - 1);
    else return binarySearch(arr,target,mid + 1, right);
}

// console.log(binarySearch_rec([1,2,3,4,5],9));




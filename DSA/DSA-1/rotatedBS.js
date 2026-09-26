// function rotatedBS(arr,target,start = 0, end = arr.length - 1){
//     if(start > end) return -1;

//     let mid = Math.floor((start + end) / 2);

//     if(arr[mid] === target) return `target found at ${mid}`;

//     if(arr[start] < arr[mid]){
//         if(arr[start] <= target && target < arr[mid]){
//             return rotatedBS(arr,target, start, mid - 1);
//         }else{
//             return rotatedBS(arr,target,mid + 1,end);
//         }
//     }else{
//         if(arr[mid] < target && target <= arr[end]){
//             return rotatedBS(arr,target, mid + 1, end);
//         }else{
//             return rotatedBS(arr,target, start, mid - 1)
//         }
//     }
// }
function rotatedBS(arr,target,start = 0,end = arr.length - 1){
    if(start > end) return;

    let mid = Math.floor((start + end) / 2);

    if(arr[mid] === target){
         return `target found at ${mid}`
    };

    if(arr[start] < arr[mid]){
        if(arr[start] <= target && target < arr[mid]){
            return rotatedBS(arr,target,start,mid - 1);
        }else{
            return rotatedBS(arr,target,mid + 1, end);
        }
    }else{
        if(arr[mid] < target && target <= arr[end]){
            return rotatedBS(arr,target,mid + 1,end);
        }else{
            return rotatedBS(arr,target,start,mid - 1);
        }
    }
}
console.log(rotatedBS([6,7,8,1,2,3,4,5],4));


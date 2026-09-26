function shuffleArray(arr){
    for(let i = arr.length - 1; i >= 0; i --){
        let j = Math.floor(Math.random() * i + 1);
        [arr[i],arr[j]] = [arr[j],arr[i]];
    }
    return arr
}

// console.log(shuffleArray([1,2,3,4,5]))

function titleCase(str){
    let nextCap = true;
    let str2 = ''
    
    for(let i = 0; i < str.length; i ++){
        if(nextCap){
            str2 += str[i].toUpperCase();
            nextCap = false;
        }else{
            str2 += str[i];
            
            if(str[i] === ' ') nextCap = true
        }
    }
    return str2
}

// console.log(titleCase('hello world hey'))

function titleCase2(str){
    return str
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
}
// console.log(titleCase2('hello world hey'))

function removeSpace(str){
    let str2 = ''
    let seenSpace = false;
    for(let i = 0; i < str.length; i ++){
        if(str[i] === ' '){
            
            let j = i;
            
            while(j < str.length && str[j] === ' ') j ++;
            if(!seenSpace && str2.length > 0 && j < str.length){
                str2 += str[i];
                seenSpace = true;
            }
        }else{
            str2+= str[i];
            seenSpace = false;
        }
    }
    return str2
}

console.log(removeSpace('   hello   world  '));

// write a function which will check if a target value is present in an sorted 2d array.
let arr =[
    [1,2,4],
    [5,7,8,9,10,11],
    [12,34,45]
];

function searchMatrix(arr,target){
    let rows = arr.length;
    let cols = arr[0].length;
    
    let row = 0;
    let col = cols - 1;
    
    while(row < rows && col >= 0){
        let curr = arr[row][col];
        
        if(target === curr){
            return true;
        }else if(target < curr){
            col --;
        }else{
            row ++;
            col = arr[row].length - 1;
        }
    }
    return false;
}

// console.log(searchMatrix(arr,10))



function change(arr){
    return arr.reduce((acc,item) => {
        if(Array.isArray(item)){
             acc.push(...change(item));
        }else{
             acc.push(item * 2)
        }
        return acc
    },[])
}
// console.log(change([1,2,0,[3,7,[12,90,[99]]]]))
// Convert object → Map

const obj = { name : 'berlin', age: 20};

function objToMap(obj){
    return new Map(Object.entries(obj));
}

function objToMap2(obj){
    const map = new Map();

    for(let key in obj){
        map.set(key,obj[key]);
    }
    return map
}

// console.log(objToMap(obj))
// console.log(objToMap2(obj))

// =================================================

// Remove key smallest number in object

function removeSmallestKey(obj){
    let smallest = Infinity;
    let Skey = null;

    for(let key in obj){
        if(obj[key] < smallest){
            smallest = obj[key];
            Skey = key;
        }
    }

    if(smallest !== -Infinity){
        delete obj[Skey]
    }
    return obj
}

// console.log(removeSmallestKey({
//     a:10, b : 20, c : 30, d : 2, e:300
// }))

function removeSecondSmallKey(obj){
    let smallest = Infinity, secondSmallest = Infinity;
    let Sk = null, sck = null;

    for(let key in obj){
        if(obj[key] < smallest){
            secondSmallest = smallest;
            smallest = obj[key];
            sck = Sk;
            Sk = key
        }else if(obj[key] < secondSmallest && obj[key] !== smallest){
            secondSmallest = obj[key];
            sck = key
        }
    }

    if(sck) delete obj[sck];
    return obj

}

// console.log(removeSecondSmallKey({
//     a:10, b : 20, c : 30, d : 2, e:300
// }))


// ==================================================

function countUpperCase(arr){
    return arr.reduce((acc,curr) => {
        if(curr >= 'A' && curr <= 'Z')  acc += 1;
        return acc
    },0);
}

// console.log(countUpperCase(['h','H','B']))


// =================================================

// Array.forEach: flip sign of numbers

function flipSign(arr){
    arr.forEach((num,index) => {
        if(num < 0) arr[index] = num * -1 
        else arr[index] = num * -1
    })

    return arr
}

// console.log(flipSign([1,2,3,4,-2,-4,-90]))
// =======================================================

// Reverse string in-place (recursion / stack)

function reverseString(str){
    let stack = [];

    for(let ch of str){
        stack.push(ch);
    }

    let reversed = '';

    while(stack.length){
        reversed += stack.pop()
    }
    return reversed
}

// console.log(reverseString('hello'))
// ==========================================

// currying

function add(a){
    return function(b){
        return a + b
    }
}

// console.log(add(10)(20))

// ==========================================

// Check if two objects have same keys

let obj1 = {a:10,b:20,c:30}
let obj2 = {a:10,b:20,c:30}

function hasSamekey(obj1,obj2){
    let keys1 = Object.keys(obj1)
    let keys2 = Object.keys(obj2)
    if(keys1.length !== keys2.length) return false

    return keys1.every((key) => keys2.includes(key))
}

// console.log(hasSamekey(obj1,obj2))

function hasSamekey2(obj1,obj2){
    let keys1 = new Set(Object.keys(obj1))
    let keys2 = new Set(Object.keys(obj2))
    
    if(keys1.size !== keys2.size) return false;
    
    for(let key of keys1){
        if(!keys2.has(key)) return false
    }
    return true
}
// console.log(hasSamekey2(obj1,obj2))
// =============================================

// Non-repeating numbers using HOFs


function nonRepeating(arr){
    return arr.filter((num) => arr.indexOf(num) === arr.lastIndexOf(num))
}
// console.log(nonRepeating([1,2,3,42,2,3]))

function nonRepeating2(arr){
    const freq = arr.reduce((acc,curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    },{});

    return arr.filter((num) => freq[num] === 1)
}

// console.log(nonRepeating2([1,2,3,4,5,3,2]))

// ======================================


// Find non-repeating elements in array

function firstNonRepeat(arr){
    let freq = {};
    for(let num of arr){
        freq[num] = (freq[num] || 0) + 1;
    }

    for(let num of arr){
        if(freq[num] === 1) return num
    }
    return -1
}

// console.log(firstNonRepeat([1,2,3,1,2,3,4]))

function removeDupSorted(arr){

    let result = [];

    for(let i = 0; i < arr.length; i ++){
        if(i === 0 || arr[i] !== arr[i - 1]){
            result.push(arr[i])
        }
    }
    return result;
}

// console.log(removeDupSorted([1,2,3,3,4,4,5]));

// ===============================================

// Sum of even & replace odd with 0

function sumOfEvenRepOddZero(arr){
    let sum = 0;

    for(let i = 0; i < arr.length; i ++){
        if(arr[i] % 2 === 0) sum += arr[i];
        else arr[i] = 0;
    }
    return arr;
}

// console.log(sumOfEvenRepOddZero([1,2,3,4]));

// ==============================================

// move zero to front;

function moveZero(arr){
    let k = 0;
    for(let i = 0; i < arr.length; i ++){
        if(arr[i] === 0){
            let num = arr[i]
            arr[i] = arr[i + 1];
            arr.unshift(num);
            k ++
        }
    }
    arr.length = arr.length - k
    return arr;
}

// console.log(moveZero([1,2,3,0,2,0]))

function moveZero2(arr){
    let k = arr.length - 1;

    // move non-zero to end;

    for(let i = arr.length - 1; i >= 0; i --){
        if(arr[i] !== 0){
            arr[k] = arr[i];
            k --;
        }
    }

    for(let i = 0; i <= k; i ++){
        arr[i] = 0;
    }
    return arr;
}

// console.log(moveZero2([1,2,3,4,0,3,0,1]))


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

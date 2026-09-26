
function longestCommonPrefix(strs){
    let prefix = strs[0];
    
    for(let i = 1; i < strs.length; i ++){
        while(strs[i].indexOf(prefix) !== 0){
            prefix = prefix.slice(0,prefix.length - 1);
            
            if(prefix === '') return ''
        }
    }
    return prefix;
}

// console.log(longestCommonPrefix(['helloworld','helloearth','hello','hell']))

function longestSubstring(str){
    let start = 0, maxStart = 0, maxLength = 1;
    
    for(let i = 1; i < str.length; i ++){
        if(str[i] !== str[i - 1]){
            start = i;
        }
        
        if(i - start + 1 > maxLength){
            maxStart = start;
            maxLength = i - start + 1;
        }
    }
    return str.substring(maxStart, maxStart + maxLength)
}

// console.log(longestSubstring('hellloo'));

function longestWord(str){
    str += " "
    let maxWord = '', currWord = '';
    
    for(let i = 0; i < str.length; i ++){
        if(str[i] === ' '){
            if(currWord.length > maxWord.length){
                maxWord = currWord;
            }
            currWord = '';
        }else{
            currWord += str[i];
        }
    }
    return maxWord
}

// console.log(longestWord('hi hello worldd'))

function secondLongestWord(str){
    // str += ' '
    let firstMax = '', secondMax = '',currWord = '';
    
    for(let i = 0; i < str.length; i ++){
        if(str[i] === ' '){
            if(currWord.length > firstMax.length){
                secondMax = firstMax;
                firstMax = currWord;
            }else if(currWord.length > secondMax.length && currWord.length !== firstMax.length){
                secondMax = currWord;
            }
            currWord = '';
        }else{
            currWord += str[i];
            
            if(i === str.length - 1){
                if(currWord.length > firstMax.length){
                    secondMax = firstMax;
                    firstMax = currWord;
                }else if(currWord.length > secondMax.length && currWord.length !== firstMax.length){
                    secondMax = currWord
                }
            }
        }
    }
    return secondMax;
}

// console.log(secondLongestWord('hello be blueueue hhhhhh'));


function reverse(str){
    let word = "";
    let result = "";
    let isEnd = false
    
    for(let i = 0; i < str.length; i ++){
        if(str[i] !== ' '){
            word += str[i];
        }else{
            let reversed = "";
            
            for(let j = word.length - 1; j >= 0; j --){
                reversed += word[j];
            }
            
            result += reversed + ' ';
            word = '';
        }
    }
}


// ==============================================================

function compose(a,b){
    return function(x){
        return a(b(x));
    }
}

const multy3 = (n) =>  n * 3;
const add5 = (n) => n + 5;

const composed = compose(multy3,add5);

console.log(composed(5));

const calculator ={
    value : 0,
    
    add(n){
        this.value += n;
        return this;
    },
    
    multiply(n){
        this.value *= n;
        return this;
    },
    
    subtract(n){
        this.value -= n;
        return this;
    },
}

// const result = calculator.add(10).multiply(20).subtract(10);
// console.log(result.value)


// let result = arr.map((n) => n * 10);


function customMap(arr, cb){
    let result = [];
    
    for(let i = 0; i < arr.length; i ++){
        result.push(cb(arr[i]));
    }
    return result;
}

const doubled = customMap([1,2,3,4],(n) => n * 2)
console.log(doubled)

function customFilter(arr,cb){
    let result = [];
    
    for(let i = 0; i < arr.length; i ++){
        if(cb(arr[i],i,arr)){
            result.push(arr[i])
        }
    }
    return result;
}

const result = customFilter([1,2,3,4],(n)=> n % 2 === 0);

console.log(result)

// console.log(customMap([1,2,3,4]))

if (!Array.prototype.includes) {
  Array.prototype.includes = function (value) {
    for (let i = 0; i < this.length; i++) {
      if (this[i] === value) return true;
    }
    return false;
  };
}
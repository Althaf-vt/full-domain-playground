function reverse_Rec(str){
    if(str.length === 0) return "";

    return reverse_Rec(str.slice(1)) + str[0]
}


// console.log(reverse_Rec('hello'));

function reverseWithoutBuiltin(str, i = 0){
    if(i === str.length) return "";

    return reverseWithoutBuiltin(str, i + 1) + str[i];
}

// console.log(reverseWithoutBuiltin('boom'))


function reverseString(str, i = 0){
     if(i === str.length) return "";

     
     return reverseString(str, i + 1) + str[i];
}

function reverseWord(word){
    return word.split(' ').map(word => reverseString(word)).join(" ")
}

// console.log(reverseString('hell'));
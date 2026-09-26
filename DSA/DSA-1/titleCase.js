function titleCase(str){
    let result = '';

    let capNext = true;
    for(let i = 0; i < str.length; i ++){
        let ch = str[i];

        if(ch === ' '){
            capNext = true;
            result += ch;
        }else{
            if(capNext){
                result += ch.toUpperCase();
                capNext = false;
            }else{
                result += ch.toLowerCase();
            }
        }
    }

    return result;
}

// console.log(titleCase('hello world'))

function titleCaseBuiltin(str){
    return str.
    toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

console.log(titleCaseBuiltin('be real'));
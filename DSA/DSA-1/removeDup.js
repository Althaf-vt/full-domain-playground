function removeDups(str){
    let seen = new Set();
    let result = '';

    for(let ch of str){
        if(!seen.has(ch)){
            seen.add(ch);
            result += ch;
        }
    }
    return result;
}

// console.log(removeDups('hello'))

function removeDups_rec(str, seen = new Set(), i = 0){
    if(i === str.length) return ''

    let ch = str[i];

    if(seen.has(ch)){
        return removeDups_rec(str, seen, i + 1);
    }else{
        seen.add(ch);
        return ch + removeDups_rec(str,seen, i + 1)
    }
}

// console.log(removeDups_rec('hello0ee'));
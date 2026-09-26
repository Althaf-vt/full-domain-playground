function add2(num, cb){
    setTimeout(() => {
        cb(num + 2);
    },500);
}

function multiply3(num,cb){
    setTimeout(() => {
        cb(num * 3);
    },500)
}
function subtract1(num,cb){
    setTimeout(()=> {
        cb(num - 1);
    },500)
}

add2(5,(result1)=>{
        multiply3(result1,(result2)=>{
            subtract1(result2,(result3)=>{
                console.log(result3)
        })
    })   
})


// ================================================================
function add2(num){
    return new Promise(resolve => {
        setTimeout(() => resolve(num + 2) ,500);
    })
}

function multiply3(num){
    return new Promise(res => {
        setTimeout(() => res(num * 3) ,500)
    })
}
function subtract1(num){
    return new Promise(res => {
        setTimeout(()=> res(num - 1),500)
    })
}

add2(5)
    .then((res) => multiply3(res))
    .then((res) => subtract1(res))
    .then((final) => console.log(final))
    .catch(err => console.log(error))


// ===================================================================

function hello(name){
    return new Promise(resolve => {
        setTimeout(()=> resolve(`Hello ${name}`),3000);
    })
}

function hi(name){
    return new Promise(resolve => {
        setTimeout(()=> resolve(`hi ${name}`),6000);
    })
}
function bye(name){
    return new Promise((resolve,reject) => {
        // setTimeout(()=>resolve(`bye ${name}`),10000);
        setTimeout(()=>reject(`no`),10000);
    })
}

// Promise.allSettled([hello('berlin'),hi('rizz'),bye('san')])
// .then((res) => console.log(res))

// Promise.all([hi('Berlin'),hello('rizz'),bye('san')])
// .then((res) => console.log(res))
// .catch((err) => console.log(err))
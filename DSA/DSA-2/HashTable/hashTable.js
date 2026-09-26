// class HashTable{
//     constructor(size = 10){
//         this.table = new Array(size);
//         this.size = 0;
//     }


//     hash(key){
//         let result = 0;
//         for(let ch of key){
//             result += ch.charCodeAt(0);
//         }
//         return result % this.table.length;
//     }

//     set(key, value){
//         let index = this.hash(key);
//         let bucket = this.table[index];
//         if(!bucket) this.table[index] = [];

//         for(let pair of this.table[index]){
//             if(pair[0] === key){
//                 pair[1] = value;
//                 return;
//             }
//         }

//         this.table[index].push([key,value]);
//     }

//     get(key){
//         let index = this.hash(key);

//         let bucket = this.table[index];

//         if(bucket){
//             for(let [k,v] of bucket){
//                 if(k === key) return v;
//             }
//         }
//         return null;
//     }

//     remove(key){
//         let index = this.hash(key);
//         let bucket = this.table[index];

//         if(bucket) {
//             this.table[index] = bucket.filter(([k]) => k !== key);
//         }
//     }

//     display(){
//         for(let i = 0; i < this.table.length; i ++){
//             let bucket = this.table[i];

//             if(bucket){
//                 let formatted = bucket.map(([k,v]) => `[${k} : ${v}]`).join(',');
//                 console.log(`${i} : ${formatted}`);
//             }
//         }
//     }
// }

// const tb = new HashTable(10);

// tb.set('bob',90);
// tb.set('babe',80);
// tb.set('bib',20);
// tb.set('obb',1000);
// tb.display()


class HashTable{
    constructor(size = 10){
        this.size = size;
        this.table = new Array(size);
    }

    hash(key){
        let result = 0;

        for(let ch of key){
            result += ch.charCodeAt(0);
        }

        return result % this.table.length;
    }

    set(key,value){
        let index = this.hash(key);
        let bucket = this.table[index];

        if(!bucket) this.table[index] = [];

        for(let pair of this.table[index]){
            if(pair[0] === key){
                pair[1] = value;
                return
            }
        }

        this.table[index].push([key,value])
    }

    get(key){
        let index = this.hash(key);
        let bucket = this.table[index];

        if(bucket){
            for(let [k,v] of this.table[index]){
                if(k === key) return v;
            }
        }
        return 'not found';
    }

    remove(key){
        let index = this.hash(key);
        let bucket = this.table[index];

        if(bucket){
            this.table[index] = bucket.filter(([k]) => k !== key);
        }
    }

    display(){
        for(let i = 0; i < this.table.length; i ++){
            let bucket = this.table[i];

            if(bucket){
                let formatted = bucket.map(([k,v]) => `[${k} : ${v}]`).join(',');
                console.log(`${i} : ${formatted}`);
            }
        }
    }
}

const tb = new HashTable(10)
tb.set('bob',90);
tb.set('babe',80);
tb.set('bib',20);
tb.set('obb',1000);
tb.remove('obb')
tb.display();


/*
- A hash table is a key-value data structure that uses a hash function to map keys to indices, 
    allowing average constant-time operations. 

- It handles collisions using techniques like chaining or open addressing and maintains 
    efficiency using load factor and rehashing.

- js objects, db indexing, compiler symbol tables
*/

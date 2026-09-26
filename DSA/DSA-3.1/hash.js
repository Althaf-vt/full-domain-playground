class HashTable{
    constructor(size = 10){
        this.size = 0;
        this.table = new Array(size);
    }

    hash(key){
        let total = 0;

        for(let ch of key){
            total += ch.charCodeAt(0);
        }
        return total % this.table.length;
    }

    set(key,value){
        let index = this.hash(key);
        let bucket = this.table[index];
        if(!bucket) this.table[index] = [];

        for(let pair of this.table[index]){
            if(pair[0] === key){
                pair[1] = value;
                return;
            }
        }
        this.table[index].push([key,value]);
    }

    get(key){
        let index = this.hash(key);

        let bucket = this.table[index];

        if(bucket){
            for(let [k,v] of this.table[index]){
                if(k === key){
                    return v;
                }
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

                console.log(`${i} : ${formatted}`)
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

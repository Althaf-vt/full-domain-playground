class HashTable{
    constructor(size = 10){
        this.table = new Array(size);
        this.count = 0;
    }
    
    hash(key){
        let result = 0;
        for(let char of key){
            result += char.charCodeAt(0);
        }
        return result % this.table.length;
    }
    set(key,value){
        let index = this.hash(key);
        
        let bucket = this.table[index];
        
        if(!bucket) this.table[index] =[];
        
        for(let pair of this.table[index]){
            if(pair[0] === key){
                pair[1] = value;
                return;
            }
        }
        this.table[index].push([key,value]);
        this.count ++
        
        if(this.isOverLoad()){
            console.log('over')
            this.rehash()
        }
    }
    
    get(key){
        let index = this.hash(key);
        let bucket = this.table[index];
        
        if(!bucket) return 'not found'
        
        for(let item of this.table[index]){
            if(item[0] === key){
                return item[1];
            }
        }
        return 'not found';
    }
    
    delete(key){
        let index = this.hash(key);
        let bucket = this.table[index];
        
        if(!bucket) return false;
        
        for(let i = 0; i < bucket.length; i ++){
            if(bucket[i][0] === key){
                bucket.splice(i,1);
                this.count --;
                if(bucket.length ===0) this.table[index] = undefined;
                
                return 'removed';
            }
        }
        return false;
    }
    
     display(){
        for(let i = 0; i < this.table.length; i ++){
            let bucket = this.table[i];
            
            if(bucket){
                let formatted = bucket.map(([k,v]) => `[${k} : ${v}]`).join(',');
                console.log(`${i} => ${formatted}`)
            }
        }
    }
    
    isOverLoad(){
        return this.count / this.table.length > 0.7;
    }
    rehash(){
        let temp = this.table;
        
        
        this.table = new Array(temp.length * 2);
        this.count = 0
        
        for(let i = 0; i < temp.length; i ++){
            let bucket = temp[i];
            
            if(bucket){
                for(let [key,value] of bucket){
                    this.set(key,value);
                }
            }
        }
    }
}

const t = new HashTable();
t.set('hello','hi')
t.set('berlin',10)
t.set('bob',3)
t.set('he','hi')
t.set('heee','hi')
t.set('heeee','hi')
t.set('hee','hi')
t.set('heel','hi')
t.set('heei','hi')
// console.log(t.get('berlin'))
// t.delete('h')
t.display()
class Stack{
    constructor(){
        this.items = [];
    }
    isEmpty(){
        return this.items.length === 0;
    }
    push(x){
        this.items.push(x);
    }
    pop(){
        if(this.isEmpty()) return 'empty stack';
        let removed = this.items.pop();
        return removed;
    }
    display(){
        if(this.isEmpty()){
            console.log('empty stack');
        }else{
            console.log(this.items);
        }
    }
    peek(){
        if(this.isEmpty()) return 'empty stack';
        return this.items[this.items.length - 1];
    }

    reverse(){
        if(this.isEmpty()) return;

        let temp = this.pop();
        this.reverse();
        this.insertAtBottom(temp);
    }

    insertAtBottom(top){
        if(this.isEmpty()){
            this.push(top);
            return;
        }

        let temp = this.pop();
        this.insertAtBottom(top);
        this.push(temp);
    }

    reverseBrute(){
        const temp = [];
        while(!this.isEmpty()){
            temp.push(this.pop());
        }

        console.log(`reversed : ${temp}`);

        while(temp.length){
            this.push(temp.pop());
        }
    }

    sortBrute(){
        const temp = [];
        while(!this.isEmpty()){
            let curr = this.pop();

            while(temp.length && curr < temp[temp.length - 1]){
                this.push(temp.pop());
            }

            temp.push(curr);
        }
        this.items = temp;
    }

    sort(){
        if(this.isEmpty()) return;

        let temp = this.pop();
        this.sort();
        this.insertSorted(temp);
    }

    insertSorted(value){
        if(this.isEmpty() || value >= this.peek()){
            this.push(value);
            return;
        }

        let temp = this.pop();
        this.insertSorted(value);
        this.push(temp)
    }
}

const stack = new Stack();

stack.push(10)
stack.push(90)
stack.push(780)
stack.push(40)
stack.display()
stack.reverseBrute();
stack.sortBrute()
stack.sort()
stack.display();






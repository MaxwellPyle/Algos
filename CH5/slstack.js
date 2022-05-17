class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class slStack{
    constructor() {
        this.top = null;
        this.tail = null;
    }

    push(val) {
        var newNode = new Node(val);

        if(!this.top) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
    }

    pop() {
        if(!this.top) {
            console.log("This stack is empty");
            return null;
        }

        var popped = this.top;
        this.top = this.top.next;
        return popped.value;

    }

    topVal() {
        return this.top.value;
    }

    contains(val) {
        if(!this.top) {
            console.log("This stack is empty");
            return null;
        }

        var runner = this.top;

        while(runner){
            if(runner.value === val){
                return true;
            }
            runner =  runner.next;
        }
        return false;

    }
    
    isEmpty() {
        if(!this.top) {
            return true;
        } else {
            return false;
        }
    }

    size(){
        if(!this.top) {
            console.log("This stack is empty");
            return null;
        }

        var size = 0;
        var runner = this.top;

        while(runner){
            size += 1;
            runner =  runner.next;
        }

        return size;
    }
}

var slstack = new slStack;

slstack.push(4);
slstack.push(33);
slstack.push(22);
slstack.push(2);

console.log(slstack.topVal());
console.log(slstack.pop());
console.log(slstack.contains(2));
console.log(slstack.isEmpty());
console.log(slstack.size());


class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SLList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    addFront(num){
        var newNode = new Node(num);
        newNode.next = this.head;
        
        if(this.head == null){
            this.head = newNode;
            this.tail = newNode;
        }else{

            this.head = newNode;
        }

    }

    addBack(num){
        var newNode = new Node(num);
        if(this.tail==null){
            this.tail = newNode;
            this.head = newNode;
        } else{

            this.tail.next = newNode;
            this.tail = newNode;
        }
        

    }
    
    removeFront(){
        if(this.head == null){
            return null;
        } else {
            this.head = this.head.next;
        }
    }

    contains(val){
        var runner = this.head;
        while(runner !== null){
            if(runner.value == val){
                return true;
            } else{
                runner =  runner.next;
            }
        }
        return false;
        
    }

    length(){
        var runner = this.head;
        var i = 0;
        while(runner !== null){
            i++;
            runner =  runner.next;
        }
        return i;
    }
    
    average(){
        var runner = this.head;
        var len = this.length();
        var total = 0;
        
        while(runner !== null){
            total += runner.value;  
            runner = runner.next;
        }
        var avg = total / len;
        return avg;
    }

    min(){
        var min = this.head.value;
        var runner = this.head;
        while(runner !== null){
            if(runner.value <= min){
                min = runner.value;
            }
            runner =  runner.next;
        }
        return min;
    }

    max() {
        var max = this.head.value;
        var runner = this.head;
        while(runner !== null){
            if(runner.value >= max){
                max = runner.value;
            }
            runner =  runner.next;
        }
        return max;
    }

    display(){
        var values = [];
        var runner = this.head;
        while(runner !== null){
            values.push(runner.value);
            runner =  runner.next;
        }
        var displayString = "";
        for(var i = 0; i < values.length; i++){
            displayString += `${values[i]}, `
        }
        return displayString;
    }

    printValues(){
        var runner = this.head;
        while(runner !== null){
            console.log(`${runner.value}`);
            runner = runner.next;
        }
    }

    lastNode(){
        var runner = this.head;
        while(runner !== null){
            if(runner.next === null){
                return runner.value;
            } else{
                runner = runner.next;
            }
    
        }
    }

}

var sll = new SLList;

sll.addFront(33);
sll.addBack(6);
sll.addFront(32);
sll.addBack(2);
sll.printValues();
console.log(sll.contains(32));
console.log(sll.length());
console.log(sll.average());
console.log(sll.min());
console.log(sll.max());
console.log(sll.display());
console.log(sll.lastNode());
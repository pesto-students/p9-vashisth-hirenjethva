// STACK IMPLEMENTED USING LIST
class Stack{
    constructor(){
        this.stack = []
        this.size = 0
    }
    push(val){
        this.stack.push(val)
        this.size++
    }
    pop(){
        if (this.size > 0)
            this.size--
            return this.stack.pop()
    }
    isEmpty(){
        return this.size === 0
    }
    print(){
        console.log(this.stack)
    }
    top(){
        if (this.size > 0){
            return this.stack[this.size-1]
        }
    }
}

module.exports = Stack


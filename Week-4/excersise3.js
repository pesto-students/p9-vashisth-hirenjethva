const Fib = {
    n: 5,
    [Symbol.iterator]: function(){
        let i=1;
        let old = 0, new1 = 0;
        return {
            next: () => {
                if(i++ <= this.n){
                    [old, new1] = [new1, (old + new1) || 1];
                    return {value:old, done:false}
                }
                else{
                    return {done:true}
                }
            }
        }
    }
};

//print like this
console.log([...Fib]);
//or like this
for(let num of Fib){
    console.log(num);
}


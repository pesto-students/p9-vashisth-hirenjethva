/*
Problem - increment() called 3 times still log is printing is 0.

Explain - increment function is working fine but the when we are concat count variable with message it is by default getting 0
as count++ scope is only available in increment function. 

Resolution - For getting the correct log message we have set the message globally same like count variable. 

working code should be like this 

function createIncrement(){
    let count=0;
    let message;
    function increment(){
        count ++;
        message= `Count is ${count}`;
    }
     
    function log(){
        console.log(message);
    }
    return [increment, log];
}


*/

function createIncrement(){
    let count=0;
    function increment(){
        count ++;
    }
    let message= `Count is ${count}`; 
    function log(){
        console.log(message);
    }
    return [increment, log];
}

const [increment, log] = createIncrement();
increment();
increment();
increment();
log(); // Count is 0 



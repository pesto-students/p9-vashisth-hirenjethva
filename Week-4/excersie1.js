
//Updated code
function getNumber(resolveTime, rejectTime){
    let randomNum = parseInt(Math.random()*100);
    console.log(randomNum);

    if (randomNum % 5 == 0){
        // Thenable object
        return {
            then(){
                setTimeout(() => console.log(`custom promise has been REJECTED after ${rejectTime}ms`), rejectTime)
            }
        }
    }
    return {
        // Thenable object
        then(){
            setTimeout(() => console.log(`custom promise has been RESOLVED after ${resolveTime}ms`), resolveTime)
        }
    }
}

getNumber(1000, 2000).then();
/*
function displayLog(some) {
    if(Number(some) % 5 == 0){
        setTimeout(() => console.log("Reject the promise " + some),2000);
    }else{
        setTimeout(() => console.log("Resolve the promise " + some),1000);
    }
}

function getNumber(mycallback){
    let randNum = Math.floor((Math.random() * 100) + 1);
    mycallback(randNum);
}

getNumber(displayLog);
*/




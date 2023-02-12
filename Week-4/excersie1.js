

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





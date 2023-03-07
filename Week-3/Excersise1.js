const add = (a = 0, b = 0) => (a + b);


function memoize(fn){
    const mapObj = new Map();
    return function(...args){
        const key = args.toString();
        if(mapObj.has(key)){
            console.log("result found in cache.");
            return mapObj.get(key);
        }
        console.log("Function calle !!");
        mapObj.set(key, fn(...args))
        return mapObj.get(key);
    };
}

function timeit(fn){
    console.time();
    console.log(fn());
    console.timeEnd();
}

const memoizeAdd = memoize(add);

timeit(() => memoizeAdd(100, 100));
timeit(() => memoizeAdd(100)); 
timeit(() => memoizeAdd(100, 200)); 
timeit(() => memoizeAdd(100, 100)); //returns the result from cache.

/*
--OutPut
Function called !!
200
default: 6.917ms
Function called !!
100
default: 0.713ms
Function called !!
300
default: 0.708ms
result found in cache.
200
default: 0.877ms
*/

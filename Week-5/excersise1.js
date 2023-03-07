/* 
Aysnc/ Await
*/
async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
  }
  
  fetchData().then((data) => {
    console.log(data);
  }).catch((error) => {
    console.log(error);
  });

  
/*
generators
*/

function* fetchGenerator() {
    try {
      const response = yield fetch('https://jsonplaceholder.typicode.com/posts');
      const data = yield response.json();
      yield data;
    } catch (error) {
      console.log(error);
    }
  }
  
  const iterator = fetchGenerator();
  
  function iterate(iteration) {
    if (iteration.done) {
      console.log(iteration.value);
      return;
    }
  
    const promise = iteration.value;
    promise.then((value) => {
      iterate(iterator.next(value));
    }).catch((error) => {
      iterate(iterator.throw(error));
    });
  }
  
  iterate(iterator.next());

console.log('Hello');

const promise = fetch("https://json.versant.digital/.netlify/functions/fake-api/message")

promise.then( res => console.log(res.status));
promise.then( res => console.log(res.type));
// promise.then( res => console.log(res));
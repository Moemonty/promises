const resolved = Promise.resolve(1);
resolved.then(res => console.log(1));
const promise2 = Promise.resolve(resolved);

// Is written out first, then the thenables
console.log(resolved === promise2);


const rejected = Promise.reject(33);

rejected.catch(err => console.log(err));
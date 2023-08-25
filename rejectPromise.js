const promise = Promise.reject(11);

promise.finally(() => {
  return Promise.reject(22);
}).catch((reason) => {
  console.log(reason);
})
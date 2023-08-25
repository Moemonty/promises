const promise1 = fetch("https://www.educative.io/udata/1kZPll2Qgkd/book.json");
const promise = fetch("https://www.educative.io/udata/1kZPll2Qgkd/book.json");
promise1.then(response => {
  const promise2 = response.json();
  // fetch requires a second promise to read the body of a response
  // need to use response.json();
  promise2.then(payload => {
    console.log(payload);
  }).catch(reason => {
    console.error(reason.message);
  });
}).catch(reason => {
  // always have a catch
  console.error(reason.message);
});

// below only requires one error handler
promise.then(response => {
  return response.json();
}).then(payload => {
  console.log(payload);
}).catch(reason => {
  console.error(reason.message);
});
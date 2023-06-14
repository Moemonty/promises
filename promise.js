console.log('Hello');

const promise = fetch("https://json.versant.digital/.netlify/functions/fake-api/message");
const notOkPromise = fetch("https://json.versant.digital/.netlify/functions/fake-api/messageXXX");
const failedPromise = fetch("https://json.versant.digitaxxl/.netlify/functions/fake-apxr/messagexx");

promise.then(
    (res) => {
        console.log('Success!');
        console.log(res.type);
        console.log('-------------------------');
    },
    (res) => {
        console.log(res.type)
        console.log('error');
    }
).finally(() => console.log('Finally, called at end!'));

failedPromise.then(
    (res) => {
        console.log('-------------------------');
        console.log('Success!')
        console.log(res);
        console.log(res.type)
    },
    (res) => {
        console.log('Promise not fullfilled');
        console.log(res.message);
        console.log(res.stack);
        console.log('-------------------------')
    }
);


// Gerard Way Status Checking
notOkPromise.then(res => {
    if (res.ok) {
        console.log('Response okay!')
    } else {
        console.log('Trust me, I\'m not okay');
        console.log('-----------------------------')
    }
});

failedPromise.catch(res => console.log(res.message));
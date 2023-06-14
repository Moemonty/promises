console.log('Hello');

const promise = fetch("https://json.versant.digital/.netlify/functions/fake-api/message");
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
);

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




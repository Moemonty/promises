import XMLHttpRequest from 'xhr2';

function requestURL(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.addEventListener(("load"), () => {
            resolve({
                status: xhr.status,
                text: xhr.responseText
            });
        })

        xhr.addEventListener("error", error => {
            reject(error);
        })

        xhr.open("get", url);
        xhr.send();
    })
}

const promise = requestURL("https://www.educative.io/udata/1kZPll2Qgkd/book.json");
promise.then(res => console.log(res));
promise.catch(err => console.log(err));

promise.finally(() => console.log('final handler'))



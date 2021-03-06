import ndjsonStream from 'can-ndjson-stream';

const g = typeof window !== 'undefined' ? window : global;
const supportsStream = typeof g.ReadableStream !== 'undefined';
const ENDPOINT = 'https://dog-things-api.bitovi.com';

export async function getProducts(callback) {
  let url = `${ENDPOINT}/product${supportsStream ? '' : '?json'}`;

  if(supportsStream) {
    let cb = Zone.current.wrap(callback);
    let res = await fetch(url);
    let stream = ndjsonStream(res.body);
    let reader = stream.getReader();
  
    while (true) {
      const {done, value} = await reader.read();
      if (done) return;
      cb(value);
    }
  } else {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => {
      let json = JSON.parse(xhr.responseText);
      callback(json);
    };
  }
}

export async function getCart() {
  let url = `${ENDPOINT}/cart`;

  if(supportsStream) {
    let res = await  fetch(url);

    let json = await res.json();
    return json;
  } else {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.onload = () => {
        let json = JSON.parse(xhr.responseText);
        resolve(json);
      };
      xhr.onerror = reject;
    });
  }
}
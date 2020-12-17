const counter = require('./candiesJAR');

async function read() {
    const input = process.stdin;
    input.setEncoding('utf8');
    let value = 0;
    for await (let data of input) {
        value = parseInt(data.toString().split('\n')[0]);
    };
    counter(value);
}
read();
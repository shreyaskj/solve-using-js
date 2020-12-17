const fs = require('fs');
const oddEvenDiff = require('./oddEven');

const writeStream = fs.createWriteStream('./outputfile.txt');
const inputStream = process.stdin;
inputStream.setEncoding('utf8');
let value;
inputStream.on('data', (line) => {
    value = line.toString().split('\n')[0];
})
inputStream.on('close', () => {
    console.log(`output is : ${oddEvenDiff(value)}`);
    //writeStream.write(`output is : ${oddEvenDiff(value)}`);
})
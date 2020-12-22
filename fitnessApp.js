const fitnessCalc = require('./fitness');

const input = process.stdin;
input.setEncoding('utf8');
const arr = [];
async function read() {
    for await(let data of input){
        if(/\S/.test(data.toString())){
            arr.push(parseInt(data.toString().split(/\s+/)[0]));
        }
    }
    console.log(arr);
    fitnessCalc(arr)
}
read();
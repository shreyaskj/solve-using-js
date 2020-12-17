const input = process.stdin;
input.setEncoding('utf8');
const arr = [];
async function read() {
    for await(let data of input){
        if(/\S/.test(data.toString())){
            arr.push(data.toString().split('\n')[0]);
        }
    }
    console.log(arr);
}
read();
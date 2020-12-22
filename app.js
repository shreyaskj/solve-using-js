const fs = require('fs');
// const readline = require('readline');

const output = fs.createWriteStream('./outputfile.txt');
// const input = fs.createReadStream('./inputfile.txt');
// // process.stdin.setEncoding('utf-8');

// // process.stdin.pipe(output);

function add(numbers){
    let sum = 0;
    numbers.forEach((number) =>{
        sum += number;
    });
    //console.log('sum - ', sum);
    // process.stdout.write('sum - ', sum);
    output.write(`sum-- ${sum}`);
}
// let arr = [];
// // process.stdin.on('data', (data)=> {
// //     arr.push(parseInt(data.toString().split('\n')[0]));
// //     console.log(arr);
// // });
// // add(arr);
// // process.stdin.on('error', () => {
// //     add(arr);
// // })
// // process.stdin.on('end', () => {
// //     add(arr);
// // })
// // process.stdin.on('close', () => {
// //     add(arr);
// // })
// // const rl = readline.createInterface({
// //     input,
// //     output
// // });
// // //rl.write("output file");

// // rl.on('line', (line) => {
// //     output.write(line + '\n');
// // })
// const read = readline.createInterface({
//     input: process.stdin
// });

// read.on('line', (line) => {
//     arr.push(parseInt(line.toString().split('\n')[0]));
//     console.log(arr);
// });
// //add(arr)
// read.on('exit', ()=> {
//     add(arr);
// })

// // read the values from input - all the values, store in a varable
// // call the main function with the variable
// // console log the output

// Get process.stdin as the standard input object.
var standard_input = process.stdin;

// Set input character encoding.
standard_input.setEncoding('utf-8');

// Prompt user to input data in console.
// console.log("Please input text in command line.");

// // When user input data and click enter key.
// standard_input.on('data', function (data) {

//     // User input exit.
//     if(data === 'exit\n'){
//         // Program exit.
//         console.log("User input complete, program exit.");
//         process.exit();
//     }else
//     {
//         // Print user input in console.
//         console.log('User Input Data : ' + data);
//     }
// });
// let arr = [];
// async function read(){
//     for await (let data of standard_input){
//         arr.push(parseInt(data.toString().split('\n')[0]));
//         console.log(arr);
//     }
//     add(arr);
// }
// read();

// const readline = require('readline');
// const read = readline.createInterface({
//     input: process.stdin
// });
// let arr = [];
// read.on('line', (line) => {
//     arr.push(parseInt(line.toString().split('\n')[0]));
//     console.log(arr);
// });
// //add(arr)
// read.on('close', ()=> {
//     add(arr);
// })

const read = process.stdin;
read.setEncoding('utf8');
let arr = [];
read.on('data', (line)=> {
    arr.push(parseInt(line.toString().split('\n')[0]));
    console.log(arr);
});
read.on('close', () => {
    add(arr);
})

// this one with REGEX 

const input = process.stdin;
input.setEncoding('utf8');
const arr = [];
async function read() {
    for await(let data of input){
        if(/\S/.test(data.toString())){
            arr.push(data.toString().split(/\s+/)[0]);
        }
    }
    console.log(arr);
}
read();



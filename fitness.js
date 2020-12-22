function fitnessCalc(inputs) {
    let arr = [];
    let temp = [];
    let i = 0;
    while(i < inputs.length){
        if(inputs[i] === undefined){
            i++
            continue;
        } else if(inputs[i] >= 100 || inputs[i] <= 1){
            temp.push(0);
        } else {
            temp.push(inputs[i])
        }
        delete inputs[i];
        i = i + 3;
        if(temp.length === 3){
            arr.push(temp);
            i = 0;
            temp = []
            continue
        }
    }
    let final = arr.map((item) => {
        return Math.round((item.reduce((sum, item) => sum + item, 0))/3)
    })
    console.log(final)
    final.forEach((item, index) => {
        if(item < 70){
            console.log('Trainee No.',index+1,' is unfit')
        } else {
            console.log('Trainee No.',index+1,' is fit');
        }
    })
}
module.exports = fitnessCalc
let JAR = 10;
function counter(quantity) {
    if(quantity <= 5 && quantity >= 1) {
        JAR -= quantity;
        console.log('NUMBER OF CANDIES SOLD :', quantity);
    } else {
        console.log('INVALID OUTPUT');
    }
    if(JAR < 5){
        JAR = 10;
    }
    console.log('NUMBER OF CANDIES AVAILABLE :', JAR);
};

module.exports = counter;
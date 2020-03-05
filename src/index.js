function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    // write your solution here
    let arr = expr.split('');
    arr.forEach((item, index, array) => {
        if ( array[index] === ' ') arr.splice( index , 1);
      });
      
        switch (arr[1]) {
            case '+':
                return Math.round((+arr[0] + +arr[2]) * 100) / 100;
                break;
            case '-':
                return Math.round((+arr[0] - +arr[2]) * 100) / 100;
                break;
            case '/':
                if (+arr[2] != 0){
                   return Math.round((+arr[0] / +arr[2]) * 100) / 100
        expect(() => expressionCalculator(expr)).to.throw("TypeError: Division by zero.");
                } else throw "TypeError: Division by zero.";
                //return (+arr[2] != 0)? Math.round((+arr[0] / +arr[2]) * 100) / 100 : throw "Error2";
                // return Math.round((+arr[0] / +arr[2]) * 100) / 100;
                break;
            case '*':
                return Math.round((+arr[0] * +arr[2]) * 100) / 100;
                break;
        };
}

module.exports = {
    expressionCalculator
}

let expression = "2 + 2";
expression = expression.replace(/\s+/g, '');
let arr=expression.split('');
console.log(arr);
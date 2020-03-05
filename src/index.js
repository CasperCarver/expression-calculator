function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {


    let arr = expr;
    let scOpen = 0;
    let scClose = 0;
    let spaceExpr = 0;
    let solve;
    let iStart  = 0;
    let iEnd=arr.length;

    if ( arr[0] != "" ){ // удаление всех одиночных пробелов для первого вызова без рекурсии
      for(let i=0;i  < expr.length; i++ ){
        if(expr[i]==" "){
          spaceExpr++;
        }
      }
      if(spaceExpr > 0 ){ 
      arr=expr.split(" ");
      }
      else{
        arr=expr.split("");
      }
    };


    
    for( let j = 0; j < expr.length; j++){   // проверка на парность скобок
        if( expr[j] == "(" ) scOpen++;
        
        if( expr[j] == ")" ) scClose++;
        }
      
    if( scOpen != scClose ) throw 'ExpressionError: Brackets must be paired';
    



    for( let j = 0 ;  j<arr.length; j++){
      if( arr[j]=="(" ) iStart=j;
      
        if( arr[j]==")" ){
        iEnd=j-2;
        arr.splice(j-1,2);
        arr.splice(iStart,2);
        iStart=iStart+1;
        iEnd=iEnd-2;
        break;
      }
    }


    for(let i=iStart; i<iEnd;i++){
      if(arr[i]=="/"){
        if(arr[i+1]==0) throw 'TypeError: Division by zero.';
        
        solve=arr[i-1]/arr[i+1];
        arr[i-1] = solve;
        arr.splice(i,2);
        i=i-1;
        iEnd=iEnd-2;
      }
        if(arr[i]=="*"){
        solve=arr[i-1]*arr[i+1];
        arr[i-1]=solve;
        arr.splice(i,2);
        i=i-1;
        iEnd=iEnd-2;
      }
    }

    for(let i=iStart; i<iEnd;i++){
      if(arr[i]=="+"){
        solve=parseFloat(arr[i-1])+parseFloat(arr[i+1]);
        arr[i-1]=solve;
        arr.splice(i,2);
        i=i-1;
        iEnd = iEnd-2;
      }
        if(arr[i]=="-"){
        solve=parseFloat(arr[i-1])-parseFloat(arr[i+1]);
        arr[i-1]=solve;
        arr.splice(i,2);
        i=i-1;
        iEnd=iEnd-2;
      }
    }

    while(arr.length>3){                //запуск рекурсии после высчитывания скобок
      expressionCalculator(arr);
    }

    for(let i=0;i<arr.length;i++){  //  возврат solve
      if(arr[i]!==""){
        return arr[i];
      }
    }


   
}

 // // write your solution here
    // let arr = expr.split('');
    // arr.forEach((item, index, array) => {
    //     if ( array[index] === ' ') arr.splice( index , 1);
    //   });
      
    //     switch (arr[1]) {
    //         case '+':
    //             return Math.round((+arr[0] + +arr[2]) * 100) / 100;
    //             break;
    //         case '-':
    //             return Math.round((+arr[0] - +arr[2]) * 100) / 100;
    //             break;
    //         case '/':
    //             if (+arr[2] != 0){
    //                return Math.round((+arr[0] / +arr[2]) * 100) / 100
    //     expect(() => expressionCalculator(expr)).to.throw("TypeError: Division by zero.");
    //             } else throw "TypeError: Division by zero.";
    //             //return (+arr[2] != 0)? Math.round((+arr[0] / +arr[2]) * 100) / 100 : throw "Error2";
    //             // return Math.round((+arr[0] / +arr[2]) * 100) / 100;
    //             break;
    //         case '*':
    //             return Math.round((+arr[0] * +arr[2]) * 100) / 100;
    //             break;
    //     };



module.exports = {
    expressionCalculator
}

// let expression = "2 + 2";
// expression = expression.replace(/\s+/g, '');
// let arr=expression.split('');
// console.log(arr);

// const expr = " 100 - 60 / 38 + (  19 / 88 * 97 / 82 / 94  ) * 92 ";
// let arr=expr;
//     let brackets1=0;
//     let brackets2=0;
//     let space=0;
//     if(arr[0]!=""){ // удаление пробелов
//       for(let i=0;i<expr.length;i++){
//         if(expr[i]==' '){
//           space++;
//         }
//       }
//       if(space!=0){
//       arr=expr.split(' ');
//       }
//       else{
//         arr=expr.split('');
//       }
//     }
//     console.log( arr);
// function declaration 
// function add ( first , second ){
// const total = first + second;
// return total;
// }


const number = 56;// this is called function expression 
const add1 = function add1( first, second){
    const total = first + second;
    return total;
}

// this is called anonymous , cz etar nam nai
// const add2 = function ( first, second){ 
//     const total = first + second;
//     return total;
// }

function add ( first , second){
    const total = first + second;
    return total;
}

function add4 ( first , second){
    return first + second;
}

const add2 = function (first, second){
    return first + second;
}

const add6 = (first, second) => first + second; // this is called arrow function 

const result = add6( 10, 20);
console.log(result);

// Interview question : differences between 
// function declaration, function expression and arrow function
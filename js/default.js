// old method
// function add(first,second){ 
//     console.log(first , second)
//     second = second || 0; // this is ols style short cut
//     // if(second === undefined){
//     //     second = 0;
//     // }
//     const total = first + second;
//     return total;
// }


//ES6 method
function add ( first, second = 0){
    const total = first + second;
    return total;
}

const result = add (10, 20);
console.log(result);

//another one 

 function fullName (first , last = 'Chowdhury'){
    const name = first + ' ' + last;
    return name;
 }

 const name = fullName ('Shakib');
 console.log(name);
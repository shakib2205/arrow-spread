const fish ={
    name: 'king Ilish',
    address : 'Chadpur',
    color: 'silver',
    phone: '01625828335',
    price: 4000
}
// const phone = fish.phone;
// const color =fish.color;
// const price = fish.price;

const {phone} = fish;

const {age, name} ={name: 'almas', age: 56, profession: 'makeup artist'}

// console.log(age);


const {address} = fish;
// console.log(address);

//array destructuring

const [first, another] = [33,55,44, 66,77];
// console.log(first,another);

const nayoks = ['shakib', 'bappi' , 'raj'];
const [king, lost, notun] = nayoks;
console.log(notun);

function getNames (){
    return ['Ali', 'Halim'];

}
const [baba, chaca] = getNames();
console.log(chaca ,baba);
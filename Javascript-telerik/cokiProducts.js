const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test = [
'"5"',
'"milk 1.2"',
'"orange juice 2.9"',
'"icecream 2"',
'"cake 5.1"',
'"beer 1.2"',
'"5"',
'"2 beer, 3 orange juice"',
'"milk, cake"',
'"icecream, 2 cake"',
'"icecream, icecream, 3 icecream"',
'"5 orange juice, 3 orange juice, orange juice, orange juice"' 	
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;
const n=+gets().match(/\d/g);
let products=[];
let prices=[];
let products1=[];
let numberOfProducts=[];
let m;
for(let i=0;i<n+1;i+=1){
    if(i!==n){
let line=gets().split(" ");
let input=[];
for(let j=0;j<line.length;j+=1){
input.push(line[j]);
}

products.push(input[0].replace(/"/g,""));
prices.push(input[input.length-1].replace(/"/g,""));
}else{
    m=+gets().match(/\d/g);
}
}
console.log(m);
for(let i=0;i<m;i+=1){
    let inp=gets().split(", ");
    for(let j=0;j<inp.length;j+=1){
    numberOfProducts.push(inp[j].replace(/"/g,""));
}
}
// for(let i=0;i<prices.length;i+=1){
//     console.log(prices[i]);
// }
// for(let i=0;i<products.length;i+=1){
//     console.log(products[i]);
// }
for(let i=0;i<numberOfProducts.length;i+=1){
    console.log(numberOfProducts[i]);
}
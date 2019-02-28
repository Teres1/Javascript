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
'5 5',
    '1 1 3 3 5',
    '-6 -7 2 -3 -1',
    '3 0 -4 5 9',
    '7 -7 0 1 0',
    '-7 -6 -4 -4 9' 	
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;
const sizes=gets();
let input=sizes.split(" ");
let w=+sizes[0];
let h=+sizes[1];
let d=+sizes[2];
let matrix=[];
let totalSum=0;
for (let i = 0; i < h; i++) {
    let row=[];
    line1=gets().split('|');
    for (let j = 0; j < d; j++) {
        let inp=line1.split(" ");
        for(let k=0;k<w;k+=1){

        }

        col[j]= +(inp[j]);
    }
    matrix[i]=col;

}
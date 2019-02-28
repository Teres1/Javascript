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
    '8',
    '7',
    '3',
    '2',
    '3',
    '5',
    '2',
    '2',
    '4'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;
const n = +gets();
let a=[];
for(let i =0;i<n;i+=1){
  a.push(+gets());
}
let count=1;
let maxCount=0;
for(let i=1;i<a.length;i+=1){
      if(a[i-1]<a[i]){
          count+=1;
          if(maxCount<count){
              maxCount=count;
          }
      }else{

          count=1;
      }
    }
      print(maxCount);

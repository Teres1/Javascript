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
    '6 6',
    '92 11 23 42 59 48',
    '09 92 23 59 56 14',
    '17 63 59 46 85 95',
    '34 59 52 69 23 95',
    '59 88 78 71 29 95',
    '26 34 16 63 39 95' 	
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;
const line=gets();
let input=line.split(" ");
const n=+input[0];
const m=+input[1];
let matrix=[];
for (let i = 0; i < n; i++) {
    let col=[];
    line1=gets();
     let inp=line1.split(" ");
    for (let j = 0; j < m; j++) {

        col[j]= (inp[j]);
    }
    matrix[i]=col;

}
let count;
let maxCount=1;
for(let i=0;i<n;i+=1){
    count=1;
    for(let j=0;j<m-1;j+=1){
    if(matrix[i][j]==matrix[i][j+1]){
        count+=1;
    }else{
        count=1;
    }if(count>maxCount){
        maxCount=count;
    }
}
}
for(let j=0;j<m;j+=1){
    count=1;
    for(let i=0;i<n-1;i+=1){
    if(matrix[i][j]==matrix[i+1][j]){
        count+=1;
    }else{
        count=1;
    }if(count>maxCount){
        maxCount=count;
    }
}
}
for(let i=0;i<n-1;i+=1){
    for(let j=0;j<m-1;j+=1){
        count=1;
        for(let r=i,c=j;r<n-1&&c<m-1;r+=1,c+=1){
    if(matrix[i][j]==matrix[r+1][c+1]){
        count+=1;
    }else{
        count=1;
    }if(count>maxCount){
        maxCount=count;
    }
}
}
}
for(let i=0;i<n-1;i+=1){
    for(let j=m-1;j>=1;j-=1){
        count=1;
        for(let r=i,c=j;r<n-1&&c>=1;r+=1,c-=1){
    if(matrix[i][j]==matrix[r+1][c-1]){
        count+=1;
    }else{
        count=1;
    }if(count>maxCount){
        maxCount=count;
    }
}
}
}
print(maxCount);
quit(0);

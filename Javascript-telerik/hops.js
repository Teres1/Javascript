function solve(args){
    let a=[];
    let m=+args[1];
    let step=-1;
    let input=args[0].split(',');
    for(let i=0;i<input.length;i+=1){
        a.push(+input[i]);
    
}

let max=a[0];
let sum=new Array(m).fill(a[0]);
let s=[];
for(let i=2;i<args.length;i+=1){
    
    s.push(args[i].split(',').map(Number));
    
}console.log(s);
    for(let i=0;i<s.length;i+=1){
       let j=0;
       while(j<s[i].length){
        //    console.log(s[i][j]);
           let k=0;
           while(k<a.length){
               if((k+s[i][j]>a.length)||(k+s[i][j]<0)){
                   break;
               }
               k+=s[i][j];
               console.log(k+'%');
               sum[j]+=a[k];
           }
            j+=1;
            console.log(i,j);
        }
    console.log(sum[j-1]+'$');
}
       
    if(max<sum){
           max=sum;
       }
    
    console.log(max);
}
solve(['2, -4, -6, 10, 2, 1, 5',
'3',
'3, 2, -1',
'2, 2, -4',
'2, -3']);
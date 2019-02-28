'use strict';
function solve(args){
    let a=[];
    let s=[];
    let b=[];
    let result='';
    let count0=[];
    let count1=[];
    let maxCount1=0;
    let sub=0;
    let sub1=0;
    let maxCount0=0;
    for(let i=1;i<args.length;i+=1){
        s.push(+args[i]);
        }
        for(let i=0;i<s.length;i+=1){
            a.push(s[i].toString(2));
        }
        for(let i=0;i<a.length;i+=1){
                 b.push(a[i].slice(a[i].length-30,a[i].length));
                 result+=b[i];
            }
        console.log(result);
        console.log(b);
        for(let i=0;i<result.length;i+=1){
            if(result[i]==='0'){
                count0.push(i);
            }
            else if (result[i]==='1'){
                count1.push(i);
            }
        }
        for(let i=1;i<count0.length;i+=1){
            sub=count0[i]-count0[i-1]-1;
            if(maxCount1<sub){
                maxCount1=sub;
            }
        }for(let i=1;i<count1.length;i+=1){
            sub1=count1[i]-count1[i-1]-1;
            if(maxCount0<sub1){
                maxCount0=sub1;
            }
        }
        console.log(maxCount0);
       console.log(maxCount1);

    
}
solve(['10',
'1111',
'2222',
'3333',
'4444',
'5555',
'6666',
'7777',
'8888',
'9999',
'101010']);
function solve(args){
    let a=[];
    let result1='';
    let result2='';
    for(let i=0;i<args.length;i+=1){
        a.push(args[i]);
    }
    for(let i=0;i<a.length-1;i+=1){
        result1+=+a[i][1]*a[i+1][0];
        result1+=' ';
    } 
    for(let i=0;i<a.length-1;i+=1){
        result2+=Math.abs(a[i]-a[i+1]);
        result2+=' ';
    }
    console.log(result1);
    console.log(result2);
}
solve(['44',
'69',
'46',
'63',
'83',
'13',
'62',
'14',
'31',
'68',
'87']);
function solve(args){
    let result='';
    let result1='';
    for (let i=1;i<args.length-1;i+=1){
        
       result+=((+(args[i][1]+args[i+1][0])+' '));
    }
    for(let i=1;i<args.length-1;i+=1){
        result1+=(+(args[i][0]+(+((+args[i][1]+(+args[i+1][0])%10)+args[i+1][1])))+' ');
    }
    console.log(result);
    console.log(result1);
}
solve(['4',
'12',
'23',
'34',
'45']);
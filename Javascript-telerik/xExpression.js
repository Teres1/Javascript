function solve(args){
    let str=args[0];
    let a=[];
    let b=[];
    for(let i=0;i<str.length;i+=1){
        if (str[i]==='('){
           a.push(i);
        }
        if(str[i]===')'){
            b.push(i);
        }
    }
    console.log(result);
    var result = eval("3+(6/5)+(2*3/7)*7/2*(9/4+4*1)");
}
solve(['3+(6/5)+(2*3/7)*7/2*(9/4+4*1)']);
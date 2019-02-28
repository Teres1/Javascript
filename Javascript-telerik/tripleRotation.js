function solve(args){
    let str=args[0];
    for(let i=0;i<3;i+=1){
        str=str.substring(str.length-1,str.length)+str.substring(0,str.length-1);
    }
    console.log(+str);
}
solve(['53']);
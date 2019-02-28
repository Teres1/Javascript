function solve(args){
    let n=+args[0];
    let p=n.toString(2);
    console.log(p);
    let result='';
    let result3='';
    let result1='';
    let result2='';
    result2+='.\n';
    result2+='.\n';
    result2+='.\n';
    result2+='.\n';
    result2+='.\n';
    result+='.#.\n';
    result+='##.\n';
    result+='.#.\n';
    result+='.#.\n';
    result+='###\n';
    result1+='###\n';
    result1+='#.#\n';
    result1+='#.#\n';
    result1+='#.#\n';
    result1+='###\n';
    while(p>0){
        if(p%10===0){
            result3+=result;
            result3+=result2;
        }
        else{
           result3+=result1;
           result3+=result2;
        }
        p=p/10;
    }
    console.log(result3);
}
solve(['1234']);
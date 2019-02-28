function solve(args){
    let s=[];
    let result='';
    for(let i=0;i<args[0].length;i+=1){
        s.push(args[0].charAt(i));
    }
    for(let i=0;i<s.length;i+=1){
        if(s[i]!==s[i+1]){
            result+=s[i];
        }
    }

    console.log(result);
}
solve(['hoboobbo422222Aaao']);
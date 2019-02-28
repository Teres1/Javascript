function solve(args){
    let input=args[0].split(" ");
    let s=[];
    let sum=0;
    for(let i=0;i<input.length;i+=1){
        s.push(+input[i]);
    }
    for(let i=2;i<s.length-2;i+=1){
        if(s[i-1]>s[i]&&s[i+1]>s[i]&&s[i-2]<s[i-1]&&s[i+1]>s[i+2]){
            sum+=s[i];
        }
    }
    console.log(sum);
    

}
solve([
    "53 20 1 30 2 40 3 3 10 1"
]);
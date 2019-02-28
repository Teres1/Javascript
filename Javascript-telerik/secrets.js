function solve(args){
    let specialSum=0;
    let result="";
    for(let i=args.length-1;i>=0;i-=1){
        if(i%2===0){
            specialSum+=(+args[i])*(i+1)*(i+1);
            
        }
        else{
            specialSum+=(Math.pow((+args[i]),2))*(i+1);
        }
    }
    console.log(specialSum);
    let lastNum = specialSum.toString().slice(-1);
    let r=specialSum%26;
    if(lastNum==='0'){
        console.log(+args+" has no secret alpha-sequence");
    }
    else{
    for(let i=65+r;i<(65+r+(+lastNum))&&i<91;i+=1){
        result+=String.fromCharCode(i);
    }
    if((26-r)<lastNum){
    for(let j=65;j<91-r;j+=1){
        result+=String.fromCharCode(j);
    }
}
console.log(result);
    }
   
}
solve('424');
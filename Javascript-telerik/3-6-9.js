function solve(args){
    let a=+args[0];
    let b=+args[1];
    let c=+args[2];
    let r,s;
    if(b===3){
        r=a+c;
    }
     else if(b===6){
         r=a*c;  
    }
    else if(b===9){
        r=a%c;
    }
    if(r%3===0){
        s=r/3;
        console.log(s);
        console.log(r);
    }
    else{
        s=r%3;
        console.log(s);
        console.log(r);
    }
}
solve(['9',
'9',
'5']);
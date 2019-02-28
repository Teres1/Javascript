function solve(args){
    let first=+args[0][0];
    let second=+args[0][1];
    let third=+args[0][2];
    let product=1;
    let sum=0;
    if(third===0){
       product=first*second;
    }
    else if((0<third)&&(third<=5)){
        product=first*second/third;
    } else if((5<third)&&(third<=9)){
        product=(first+second-1)*third;
    }
    console.log(product.toFixed(2));
}
solve(['120']);
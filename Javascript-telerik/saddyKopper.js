function solve(args){
    let str=args[0];
    let sum=0;
    let product=1;
    let str1;
    let s=[];
    let transformation=0;
    let j=0;
    let productSum=0;
    let productProduct=1;
    let a=[];
   if(transformation<10){
    for(let i=0;i<str.length-1;i+=1){
         str1=str.substring(0,str.length-1);
         if(i%2===0){
             sum+=+str1[i];
         }
         s.push(sum);
         str1=str1.substring(0,str1.length-1);
    }
    for(let i=0;i<s.length;i+=1){
        product*=s[i];
    }
    console.log(s);
    console.log(product);
    if(product.length===1){
       console.log(count);
       console.log(product);
    }
    if (product.length>1){
        transformation+=1;
        for(let i=0;i<product.length-1;i+=1){
       product=product.substring(0,product.length-1);
       productSum+=product[i];
       if(i%2===0){
           a.push(productSum);
           product=product.substring(0,product.length-1);
       }
            }
            for(let i=0;i<s.length;i+=1){
                productProduct*=a[i];
            }
        }
        transformation+=1;
    }
    console.log(transformation,productProduct);
    }
solve(['12345']);
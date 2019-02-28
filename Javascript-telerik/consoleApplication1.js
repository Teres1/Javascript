function solve(args){
   let s=[];
   let product1=1;
   let product2=1;
   for(let i=0;i<args.length-1;i+=1){
       s.push(args[i]);
   }
   if(s.length<=10){
   for(let i=0;i<s.length;i+=1){
       if(s[i]==='0'){
           product1*=1;
       }
       else{
           if(i%2!==0){
       for(let j=0;j<s[i].length;j+=1){
               if(s[i][j]==='0'){
                   product1*=1;
               }
               else{
                   product1*=+s[i][j];
               }
           }
        }
       }
    }
    console.log(product1);

    } else if(s.length>10){
        for(let i=0;i<10;i+=1){
            if(s[i]==='0'){
                product1*=1;
            }
            else{
                if(i%2!==0){
            for(let j=0;j<s[i].length;j+=1){
                    if(s[i][j]==='0'){
                        product1*=1;
                    }
                    else{
                        product1*=+s[i][j];
                    }
                }
             }
            }
        }
            for(let i=10;i<s.length;i+=1){
                if(s[i]==='0'){
                    product1*=1;
                }
                else{
                    if(i%2!==0){
                for(let j=0;j<s[i].length;j+=1){
                        if(s[i][j]==='0'){
                            product2*=1;
                        }
                        else{
                            product2*=+s[i][j];
                        }
                    }
                }
            }

    }

    console.log(product1);
    console.log(product2);
}  
}
solve(['123',
 '456', 
 '789', 
 '1238', 
 '856',
 '3',
 '3',
 '3',
 '3',
 '3',
 '3',
 '3',
'END']);
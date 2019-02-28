function solve(args){
    let salt=+args[0];
    let s=args[1];
    let result=0;
    let RESULT=0;
    console.log(s);
    for(let i=0;i<s.length;i+=1){
        if(((s.charCodeAt(i)>=32)&&(s.charCodeAt(i)<=47))||((s.charCodeAt(i)>=123)&&(s.charCodeAt(i)<=126))||
        ((s.charCodeAt(i)>=58)&&(s.charCodeAt(i)<=63))||((s.charCodeAt(i)>=123)&&(s.charCodeAt(i)<=126))){
               result=s.charCodeAt(i)-salt;
               if(i%2===0){
                   result/=100;
                   result=result.toFixed(2);
               }else{
                   result*=100;
               }
            }
            else if((s.charCodeAt(i)>=48)&&(s.charCodeAt(i)<=57)){
                result=s.charCodeAt(i)+salt+1000;
                if(i%2===0){
                    result/=100;
                    result=result.toFixed(2);
                }else{
                    result*=100;
                }
            }
            else if(((s.charCodeAt(i)>=65)&&(s.charCodeAt(i)<=90))||
            ((s.charCodeAt(i)>=97)&&(s.charCodeAt(i)<=122))){
                results=s.charCodeAt(i)*salt+1000;
                if(i%2===0){
                    result/=100;
                    result=result.toFixed(2);
                }else{
                    result*=100;
                }
            }
            else if(s.charCodeAt(i)===64){
                RESULT=result; break;
            }
    }
    console.log(RESULT);
}
solve(['10',
'Starwars 4, 5 and 6 are better that Starwars 1, 2 and 3 :-)@']);
function solve(args){
    let m=+args[0];
    let s=args[1];
    let result=0;
    let RESULT=0;
    for(let i=0;i<s.length;i+=1){
        if(((s.charCodeAt(i)>=32)&&(s.charCodeAt(i)<=47))||((s.charCodeAt(i)>=123)&&(s.charCodeAt(i)<=126))||
    ((s.charCodeAt(i)>=58)&&(s.charCodeAt(i)<=63))||((s.charCodeAt(i)>=123)&&(s.charCodeAt(i)<=126))){
           result%=m;
        }
        else if((s.charCodeAt(i)>=48)&&(s.charCodeAt(i)<=57)){
            result*=s.charCodeAt(i)-48;
        }
        else if((s.charCodeAt(i)>=65)&&(s.charCodeAt(i)<=90)){
            result+=s.charCodeAt(i)-65;
        }
        else if((s.charCodeAt(i)>=97)&&(s.charCodeAt(i)<=122)){
            result+=s.charCodeAt(i)-97;
        }
        else if(s.charCodeAt(i)===64){
            RESULT=result; break;
        }
    }
    console.log(RESULT);
}
solve(['2001',
'Hello .NET 5! My name is Peter 8-)@']);
function solve(args){
    let n=+args[0];
    let s=[];
    let v=0;
    let m=0;
    for(let i=1;i<args.length;i+=1){
        s.push(args[i]);
    }
    for(let i=0;i<s.length;i+=1){
        if(s[i].length%2){
        for(let j=0;j<(s[i].length+1)/2;j+=1){
            m+=(+s[i][j]);

            }
            for(let j=(s[i].length-1)/2;j<s[i].length;j+=1){
            v+=(+s[i][j]);
            }
        }
        else{
            for(let j=0;j<s[i].length/2;j+=1){
                m+=(+s[i][j]);
            }
            for(let j=s[i].length/2;j<s[i].length;j+=1){
                v+=(+s[i][j]);
        }
    }
}
if(m>v){
    console.log('M '+(m-v));
}
else if(m<v){
    console.log("V "+(v-m));
}
else{
    console.log("No "+(m+v));
}
    console.log(s);
    console.log(v);
    console.log(m);
}
solve(['3',
 '0505',
 '7891',
 '9178']);
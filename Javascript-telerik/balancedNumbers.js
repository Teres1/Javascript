function solve(args){
    let s=[];
    let sum=0;
    for (let i=0;i<args.length;i+=1){
        s.push(args[i]);
    }
    for(let i=0;i<s.length;i+=1){
        if(+s[i][0]+(+s[i][2])===(+s[i][1])){
            sum+=+s[i];

        }
        else{
            break;
        }
}
    console.log(sum);
}
solve(['132',
'123'
]);
function solve(params) {
    let s = parseInt(params[0]);
    let count = 0;
    for(let i=0;i<(s/3)+1;i+=1){
        for(j=0;j<(s/3)+1;j+=1){
            for(let k=0;k<(s/3)+1;k+=1){
                if(s===(4*i+3*j+10*k)){
                    count+=1;
                    
                }
            }
        }

    }
    console.log(count);
}
let params=[40];
solve(params);
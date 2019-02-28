function solve(args){
    let p=+args[0];
    let m=+args[1];
    let s=[];
    let t='';
    let r=new Array(m).fill('');
    let v=new Array(m).fill('');
    let q=p.toString(2);
    let w='';
    for(let i=q.length-1;i>=0;i-=1){
        w+=q[i];
    }
    for(let i=0;i<q.length;i+=1){
        t+='0';
    }
    for(let i=2;i<m+2;i+=1){
        s.push((+args[i]).toString(2));
    }
    for(let i=0;i<s.length;i+=1){
        for(let j=s[i].length-1;j>=0;j-=1){
            r[i]+=s[i][j];
        }
    }
    
    for(let i=0;i<r.length;i+=1){
        for(let j=0;j<r[i].length;j+=1){
            if((r[i].substring(j,j+q.length))===w){
                let k=j;
                j+=q.length-1;
                r[i]=r[i].replace(r[i].substring(k,k+q.length),t);
            }
        }
    }
    for(let i=0;i<r.length;i+=1){
        for(let j=r[i].length-1;j>=0;j-=1){
            v[i]+=r[i][j];
        }
    }
    for(let i=0;i<v.length;i+=1){
        console.log(parseInt(v[i],2));
    }
}
solve(['5',
'2',
'469',
'13']);
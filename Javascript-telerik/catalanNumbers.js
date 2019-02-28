function s(p){let n=+p[0],c=1,f=1;for(let i=2;i<=n;i+=1){c*=(n+i);f*=i;}let r=c/f;return r/2;}
let p = '7';
console.log(s(p));
function solve(args){
    let a=args[0];
    let i=0;
    while(i<a.length){
        if((a.charCodeAt(i)>=97)&&(a.charCodeAt(i)<=122)){
            i+=a.charCodeAt(i)-96;
            if(i>a.length){
                console.log('Djor and Djano are lost at '+i+'!');
                break;
            }
        } else if((a.charCodeAt(i)>=65)&&(a.charCodeAt(i)<=90)){
            i-=a.charCodeAt(i)-64;
            if(i<0){
                console.log('Djor and Djano are lost at '+i+'!');
                break;
            }
        } else if(a[i]==='^'){
            console.log(' Djor and Djano are at the party at  '+i+'!');
            break;
        }
    }
}
solve(['abcAkzzzz^']);
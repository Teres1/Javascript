function solve(args){
    let a=args[0];
    console.log(a);
    let i=0;
    while(i<a.length){
       if(+a[i]%2===0){
        if(+a[i]===0){
            console.log('Too drunk to go on after '+i+ '!');
            break;
        } else{
            i+=+a[i];
            console.log(i+'@');
            if(i>a.length){
                console.log('Fell off the dancefloor at '+i+'!');
                break;
            }
        }
        } else if(+a[i]%2===1){
            i-=+a[i];
            console.log(i+'#');
            if(i<0){
                console.log('Fell off the dancefloor at '+i+'!');
                break;
            }
        } else if(a[i]==='^'){
            console.log('Jump, Jump, DJ Tomekk kommt at '+i+'!');
            break;
        }
    }

}
solve(['203']);
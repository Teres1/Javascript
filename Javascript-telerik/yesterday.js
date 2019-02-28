function solve(args){
    let y=+args[0];
    let m=+args[1];
    let d=+args[2];
    let n='';
    let result='';
 
    if((d===1)&&((m===5)||(m===7)||(m===10)||(m===12))){
        m-=1;
        switch(m){
            case 1: n='Jan'; break;
            case 2: n='Feb'; break;
            case 3: n='Mar'; break;
            case 4: n="Apr"; break;
            case 5: n='May'; break;
            case 6: n='Jun'; break;
            case 7: n='Jul'; break;
            case 8: n='Aug'; break;
            case 9: n='Sep'; break;
            case 10: n='Oct'; break;
            case 11: n='Nov'; break;
            case 12: n='Dec'; break;
        }
       result+='30'+'-'+n+'-'+y;
    } else if((d===1)&&(m===3)&&(y%4===0)&&(y!==2000)){
       result='29'+'-Feb-'+y;
}  else if((d===1)&&(m===3)&&(y%4!==0)){
      result='28'+'-Feb-'+y;
} else if((d===1)&&(m===1)){
    result='31'+'-Dec-'+(y-1);
}  else if((d===1)&&(m===8)){
    result='31'+'-Jul-'+y;
}  else if((d===1)&&((m===2)||(m===4)||(m===6)||(m===9)||(m===11))){
    m-=1;
    switch(m){
        case 1: n='Jan'; break;
        case 2: n='Feb'; break;
        case 3: n='Mar'; break;
        case 4: n="Apr"; break;
        case 5: n='May'; break;
        case 6: n='Jun'; break;
        case 7: n='Jul'; break;
        case 8: n='Aug'; break;
        case 9: n='Sep'; break;
        case 10: n='Oct'; break;
        case 11: n='Nov'; break;
        case 12: n='Dec'; break;
    }
    result='31'+'-'+n+'-'+y;
} else if(d>1) {
    switch(m){
        case 1: n='Jan'; break;
        case 2: n='Feb'; break;
        case 3: n='Mar'; break;
        case 4: n="Apr"; break;
        case 5: n='May'; break;
        case 6: n='Jun'; break;
        case 7: n='Jul'; break;
        case 8: n='Aug'; break;
        case 9: n='Sep'; break;
        case 10: n='Oct'; break;
        case 11: n='Nov'; break;
        case 12: n='Dec'; break;
    }
    result=(d-1)+'-'+n+'-'+y;
}
    console.log(result);
}
solve(['2017',
'3',
'1']);
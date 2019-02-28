function solve(args){
    let day=+args[0];
    let month=+args[1];
    let year=+args[2];
    let result='';
    if((((day>=1)&&(day<=30))&&((month===1)||(month===3)||(month===5)||(month===7)||
    (month===8)||(month===10)||(month===12)))||(((day>=1)&&(day<=29))&&((month===4)||
(month===6)||(month===9)||((month===11)))||(day>=1)&&(day<=27)&&(month===2))){
result+=(day+1)+'.'+month+'.'+year;
    } else if (((day===31)&&((month===1)||(month===3)||(month===5)||(month===7)||
    (month===8)||(month===10)))||((day===30)&&((month===4)||
(month===6)||(month===9)||((month===11))))){
result+=('1')+'.'+(month+1)+'.'+year;
} else if((day===31)&&(month===12)){
    result+='1.01.'+(year+1);
} else if((day===28)&&(month===2)&&((year%4!==0)||(year%400===0))){
result+='1.03.'+year;
}  else if((day===29)&&(month===2)&&(year%4===0)&&(year%400!==0)){
    result+='1.03.'+year;
    }
console.log(result);
}
solve(['31',
'12',
'2012']);

function pointCircleRectangle(arr){
    let x=+arr[0];
    let y=+arr[1];
    let cir='';
    let rec='';
    if((Math.sqrt(Math.pow(x-1,2)+Math.pow(y-1,2)))<=1.5){
        cir='inside circle';
    if((x>=-1)&&(x<=5)&&(y>=-1)&&(y<=1)){
        rec='inside rectangle';
    }else{
    rec='outside rectangle';
       }
    }
    else{
        cir='outside circle';
    if((x>=-1)&&(x<=5)&&(y>=-1)&&(y<=1)){
        rec='inside rectangle';
        }
    else{
        rec='outside rectangle';
        }
    }
console.log(cir+' '+rec);
}
let arr=['1','2'];
pointCircleRectangle(arr);

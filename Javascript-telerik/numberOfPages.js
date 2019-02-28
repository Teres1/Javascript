function solve(args){
    let d=+args[0];
    let n;
    if((0<d)&&(d<=9)){
        n=d;
    } else if((9<d)&&(d<=189)){
        n=(d-9)/2+9;
    } else if((189<d)&&(d<2889)){
        n=(d-189)/3+99;
    } else if((2889<d)&&(d<38889)){
        n=(d-2889)/4+999;
    } else if((38889<d)&&(d<488889)){
        n=(d-38889)/5+9999;
    } else if((488889<d)&&(d<1000000)){
        n=(d-488889)/6+99999;
    }
    console.log(n);
}
solve(['999999']);
function solve(args){
    let totalArea=0;
    let area=[];
    let prices=[0.5,0.4,0.25,0.6,0.3,0.4];
    let seedAmount=[];
    for(let i=1;i<args.length;i+=2){
        area.push(+args[i]);
    }
    for(let i=0;i<args.length;i+=2){
        seedAmount.push(+args[i]);
    }
    for(let i=0;i<area.length;i+=1){
        totalArea+=area[i];
    }
    let totalCost=0;
    for(let i=0;i<seedAmount.length;i+=1){
        totalCost+=(prices[i])*(seedAmount[i]);
    }
    
    console.log("Total costs: "+totalCost.toFixed(2));
    if(totalArea<250){
        let beanArea=250-totalArea;
        console.log("Beans area: "+beanArea);
    }
    else if(totalArea===250){
        console.log("No area for beans");
    }
    else{
        console.log("Insufficient area");
    }   
}
solve(['10',
    '20',
    '25',
    '30',
    '42',
    '38',
    '15',
    '23',
    '18',
    '36',
    '70']);
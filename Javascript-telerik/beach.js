const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test = [
'5 0 10 0 11 0 10 0' 	
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;
const line1=gets().split(' ');
let startHourLoni=+line1[0];
let startMinutesLoni=+line1[1];
let endHourLoni=+line1[2];
let endMinutesLoni=+line1[3];
let startHourMoni=+line1[4];
let startMinutesMoni=+line1[5];
let endHourMoni=+line1[6];
let endMinutesMoni=+line1[7];
let max=Math.max(startHourLoni*60+startMinutesLoni,startHourMoni*60+startMinutesMoni);
let min=Math.min(endHourLoni*60+endMinutesLoni,endHourMoni*60+endMinutesMoni);
let result="";
if(min<max){
    result="No";
}
    else{
    result+=(max/60|0)+" ";
    result+=max%60+" ";
    result+=((min/60)|0)+" ";
    result+=min%60;

}
print(result);
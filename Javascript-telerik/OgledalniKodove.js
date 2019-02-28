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
'100 200' 	
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;
const line=gets();
let input=line.split(" ");
const a=+input[0];
const b=+input[1];
function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
print(Math.max(reverse_a_number(a),reverse_a_number(b)));

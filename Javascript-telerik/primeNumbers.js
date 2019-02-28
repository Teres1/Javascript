function sieveOfEratosthenes(n) {
    let i,
    j;

    for (i = n; i > 1; i -= 1) {
        let prime = true;
        for (j = 2; j < i; j +=1) {
            if (i%j === 0) {
                prime = false;
                break;
            }
        }
        if (prime) {
            console.log(i);
            break;
         
         
        }
    }
}
let n=100;
sieveOfEratosthenes(n);


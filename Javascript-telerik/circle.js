function maxOfFiveNumbers(arr) {
    let a = +arr[0],
        b = +arr[1],
        c = +arr[2],
        d = +arr[3],
        e = +arr[4];
    let max_a_b = Math.max(a, b);
    let max_c_d = Math.max(c, d);
    if (max_a_b > max_c_d) {
        if (max_c_d > e) {
            console.log(max_a_b);
        } else {
            if (max_a_b > e) {
                console.log(max_a_b);
            } else {
                console.log(e);
            }

        }

    }
    else {
        if (max_a_b > e) {
            console.log(max_c_d);
        } else {
            if (max_c_d > e) {
                console.log(max_c_d);
            } else {
                console.log(e);
            }

        }
    }
}
let arr=['1','2','3','4','5'];
maxOfFiveNumbers(arr);

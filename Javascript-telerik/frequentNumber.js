'use strict';
function frequentNumber(arr) {


    let max = 1,
        count = 1;
    let currentElement = +arr[0],
        finalElement = 0;
    for (let i = 0; i < arr.length; i += 1) {
        count = 1;
        currentElement = arr[i];
        let tempIndex = i + 1;
        while (tempIndex < arr.length) {
            if (arr[tempIndex] === currentElement) {
                count += 1;
            }
            tempIndex += 1;
        }

        if (count > max) {
            max = count;
            finalElement = currentElement;

        }
    }

    console.log(finalElement);
    console.log(max);
}
let arr = [1, 3, 5, 6, 2, 7, 2, 7, 7, 8, 2, 2, 7];
frequentNumber(arr);
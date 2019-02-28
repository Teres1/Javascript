
function convertNumberInWords(arr) {
    let num = +arr[0];
    if (num >= 100) {
        let digit3 = (num % 10) | 0,
            digit2 = (num / 10) % 10 | 0,
            digit1 = (num / 100) | 0;
        switch (digit1) {
            
            case 1: digit1 = 'One'; break;
            case 2: digit1 = 'Two'; break;
            case 3: digit1 = 'Three'; break;
            case 4: digit1 = 'Four'; break;
            case 5: digit1 = 'Five'; break;
            case 6: digit1 = 'Six'; break;
            case 7: digit1 = 'Seven'; break;
            case 8: digit1 = 'Eight'; break;
            case 9: digit1 = 'Nine'; break;

        }
        if (digit2 === 0) {
            switch (digit3) {
                case 0: digit3 = ''; break;
                case 1: digit3 = 'and one'; break;
                case 2: digit3 = 'and two'; break;
                case 3: digit3 = 'and three'; break;
                case 4: digit3 = 'and four'; break;
                case 5: digit3 = 'and five'; break;
                case 6: digit3 = 'and six'; break;
                case 7: digit3 = 'and seven'; break;
                case 8: digit3 = 'and eight'; break;
                case 9: digit3 = 'and nine'; break;

            }
            console.log(digit1 + ' hundred ' + digit3);
        }
        else if (digit2 === 1) {
            switch (digit3) {
                case 0: digit3 = 'and ten'; break;
                case 1: digit3 = 'and eleven'; break;
                case 2: digit3 = 'and twelve'; break;
                case 3: digit3 = 'and thirteen'; break;
                case 4: digit3 = 'and fourteen'; break;
                case 5: digit3 = 'and fifteen'; break;
                case 6: digit3 = 'and sixteen'; break;
                case 7: digit3 = 'and seventeen'; break;
                case 8: digit3 = 'and eighteen'; break;
                case 9: digit3 = 'and nineteen'; break;
            }

            console.log(digit1 + ' hundred ' + digit3);
        }
        else {
            switch (digit3) {
                case 0: digit3= ''; break;
                case 1: digit3 = 'one'; break;
                case 2: digit3 = 'two'; break;
                case 3: digit3 = 'three'; break;
                case 4: digit3 = 'four'; break;
                case 5: digit3 = 'five'; break;
                case 6: digit3 = 'six'; break;
                case 7: digit3 = 'seven'; break;
                case 8: digit3 = 'eight'; break;
                case 9: digit3 = 'nine'; break;

            }


            switch (digit2) {


                case 2: digit2 = 'and twenty'; break;
                case 3: digit2 = 'and thirty'; break;
                case 4: digit2 = 'and forty'; break;
                case 5: digit2 = 'and fifty'; break;
                case 6: digit2 = 'and sixty'; break;
                case 7: digit2 = 'and seventy'; break;
                case 8: digit2 = 'and eighty'; break;
                case 9: digit2 = 'and ninety'; break;

            }



            console.log(digit1 + ' hundred ' + digit2 + ' ' + digit3);
        }
    }

    else if (num >= 10) {
        let dig1 = (num / 10) | 0;
        let dig2 = (num % 10) | 0;
        if (dig1 === 1) {
            switch (dig2) {
                case 0: dig2 = 'Ten'; break;
                case 1: dig2 = 'Eleven'; break;
                case 2: dig2 = 'Twelve'; break;
                case 3: dig2 = 'Thirteen'; break;
                case 4: dig2 = 'Fourteen'; break;
                case 5: dig2 = 'Fifteen'; break;
                case 6: dig2 = 'Sixteen'; break;
                case 7: dig2 = 'Seventeen'; break;
                case 8: dig2 = 'Eighteen'; break;
                case 9: dig2 = 'Nineteen'; break;
            }

            console.log(dig2);
        } else {
            switch (dig1) {


                case 2: dig1 = 'Twenty'; break;
                case 3: dig1 = 'Thirty'; break;
                case 4: dig1 = 'Forty'; break;
                case 5: dig1 = 'Fifty'; break;
                case 6: dig1 = 'Sixty'; break;
                case 7: dig1 = 'Seventy'; break;
                case 8: dig1 = 'Eighty'; break;
                case 9: dig1 = 'Ninety'; break;

            }

            switch (dig2) {
                case 0: dig2= ''; break;
                case 1: dig2 = 'one'; break;
                case 2: dig2 = 'two'; break;
                case 3: dig2 = 'three'; break;
                case 4: dig2 = 'four'; break;
                case 5: dig2 = 'five'; break;
                case 6: dig2 = 'six'; break;
                case 7: dig2 = 'seven'; break;
                case 8: dig2 = 'eight'; break;
                case 9: dig2 = 'nine'; break;

            }

            console.log(dig1 + ' ' + dig2);
        }
    }
    else {
        switch (num) {
            case 0: console.log('Zero'); break;
            case 1: console.log('One'); break;
            case 2: console.log('Two'); break;
            case 3: console.log('Three'); break;
            case 4: console.log('Four'); break;
            case 5: console.log('Five'); break;
            case 6: console.log('Six'); break;
            case 7: console.log('Seven'); break;
            case 8: console.log('Eight'); break;
            case 9: console.log('Nine'); break;

        }
    }
}
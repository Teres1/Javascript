function solve(args) {
    let n = +args[0];
    let s = [];
    let a = [];
    let b = [];
    let firstPlayerScore = new Uint32Array(n);
    let finalFirstPlayerScore = 0;
    let finalSecondPlayerScore = 0;
    let secondPlayerScore = new Uint32Array(n);
    let firstPlayerWonGames = 0;
    let secondPlayerWonGames = 0;
    for (let i = 1; i < args.length; i += 1) {
        s.push(args[i]);
    }
    console.log(s);
    for (let j = 0; j < 2 * n; j += 1) {
        for (let i = 3 * j; i < 3 * j + 3; i += 1) {
            if (j % 2 === 0) {
                a.push(s[i]);
            }
            else {
                b.push(s[i]);
            }
        }
    }
    console.log(a);
    console.log(b);

    for (let k = 0; k < n; k += 1) {
        for (let j = 3 * k; j < 3 * k + 3; j += 1) {
            switch (a[j]) {
                case '2': firstPlayerScore[k] += 10; break;
                case '3': firstPlayerScore[k] += 9; break;
                case '4': firstPlayerScore[k] += 8; break;
                case '5': firstPlayerScore[k] += 7; break;
                case '6': firstPlayerScore[k] += 6; break;
                case '7': firstPlayerScore[k] += 5; break;
                case '8': firstPlayerScore[k] += 4; break;
                case '9': firstPlayerScore[k] += 3; break;
                case '10': firstPlayerScore[k] += 2; break;
                case 'A': firstPlayerScore[k] += 1; break;
                case 'J': firstPlayerScore[k] += 11; break;
                case 'Q': firstPlayerScore[k] += 12; break;
                case 'K': firstPlayerScore[k] += 13; break;
                case 'Z': firstPlayerScore[k] *= 2; break;
                case 'Y': firstPlayerScore[k] -= 200; break;
                case 'X': firstPlayerScore[k] += 50; break;
            }
        }
    }
    for (let k = 0; k < n; k += 1) {
        for (let j = 3 * k; j < 3 * k + 3; j += 1) {
            switch (b[j]) {
                case '2': secondPlayerScore[k] += 10; break;
                case '3': secondPlayerScore[k] += 9; break;
                case '4': secondPlayerScore[k] += 8; break;
                case '5': secondPlayerScore[k] += 7; break;
                case '6': secondPlayerScore[k] += 6; break;
                case '7': secondPlayerScore[k] += 5; break;
                case '8': secondPlayerScore[k] += 4; break;
                case '9': secondPlayerScore[k] += 3; break;
                case '10': secondPlayerScore[k] += 2; break;
                case 'A': secondPlayerScore[k] += 1; break;
                case 'J': secondPlayerScore[k] += 11; break;
                case 'Q': secondPlayerScore[k] += 12; break;
                case 'K': secondPlayerScore[k] += 13; break;
                case 'Z': secondPlayerScore[k] *= 2; break;
                case 'Y': secondPlayerScore[k] -= 200; break;
                case 'X': secondPlayerScore[k] += 50; break;
            }
        }
    }

    for (let i = 0; i < n; i += 1) {
        finalFirstPlayerScore += (+firstPlayerScore[i]);
        finalSecondPlayerScore += (+secondPlayerScore[i]);
        if (firstPlayerScore[i] > secondPlayerScore[i]) {
            firstPlayerWonGames += 1;
        }
        else {
            secondPlayerWonGames += 1;
        }
    }
    if ((a.some(x => x === 'X') && (b.every !== 'X'))) {
        console.log('X card drawn! Player one wins the match!');
    }
    else if ((a.every !== "X") && (b.some(x => x === "X"))) {
        console.log('X card drawn! Player two wins the match!');
    }

    else if (((a.every !== 'X') && (b.every !== 'X')) || (((a.some(x => x === 'X')) && (b.some(x => x === 'X'))))) {
        if (finalFirstPlayerScore > finalSecondPlayerScore) {
            console.log('First player wins!');
            console.log('Score: ' + finalFirstPlayerScore);
            console.log("Games won: " + firstPlayerWonGames);
        }
        else if (finalFirstPlayerScore < finalSecondPlayerScore) {
            console.log('Second player wins!');
            console.log('Score: ' + finalSecondPlayerScore);
            console.log("Games won: " + secondPlayerWonGames);
        }
        else {
            console.log("It's a tie!");
            console.log('Score: ' + finalFirstPlayerScore);
        }
    }
}
solve(['1',
    'K',
    'Q',
    'X',
    '10',
    '3',
    '10',
]);
function solve(params) {
   let rows = +params[0],
        cols = +params[1],
        tests = +params[rows + 2],
        knightMoves = [[-2, 1], [-1, 2], [1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1]];
 
    function getFigure(position) {
        let row = rows - position[1],
            col = position[0].charCodeAt(0) - 'a'.charCodeAt(0);
        return params[row + 2][col];
    }
 
    function solveTest(move) {
        let parts = move.split(' '),
            from = parts[0],
            to = parts[1],
            figure = getFigure(from);
 
        if (figure === '-') {
            return 'no'; // origin position is empty
        }
 
        if (getFigure(to) !== '-') {
            return 'no'; // destination is not empty
        }
 
        if (figure === 'Q') {
            let minRow = Math.min(from[1], to[1]),
                maxRow = Math.max(from[1], to[1]),
                minCol = Math.min(from[0].charCodeAt(0), to[0].charCodeAt(0)),
                maxCol = Math.max(from[0].charCodeAt(0), to[0].charCodeAt(0)),
                figures = 0;
            if (from[0] === to[0]) { // same column
                // move through rows minRow-maxRow
                for (let i = minRow; i <= maxRow; i+=1) {
                   let newPos = from[0] + i;
                    if (getFigure(newPos) != '-') figures++;
                }
            }
            else if (from[1] === to[1]) { // same row
                // move through columns minCol-maxCol
                for (let i = minCol; i <= maxCol; i+=1) {
                    let newPos = String.fromCharCode(i) + from[1];
                    if (getFigure(newPos) !== '-') figures+=1;
                }
            }
            else if (Math.abs(from[0].charCodeAt(0) - to[0].charCodeAt(0)) === Math.abs(from[1] - to[1])) { // diagonal
                if (from[0].charCodeAt(0) - to[0].charCodeAt(0) === from[1] - to[1]) {
                    // diagonal of type a1-c3
                    for (let i = 0; i <= maxRow - minRow; i+=1) {
                        let newPos = String.fromCharCode(minCol + i) + (minRow + i).toString();
                        if (getFigure(newPos) != '-') figures+=1;
                    }
                }
                else {
                    // diagonal of type a3-c1
                    for (let i = 0; i <= maxRow - minRow; i+=1) {
                     let newPos = String.fromCharCode(minCol + i) + (maxRow - i).toString();
                        if (getFigure(newPos) != '-') figures+=1;
                    }
                }
            }
            else {
                return 'no'; // invalid move for queen
            }
 
            if (figures !== 1) {
                return 'no'; // more than one figure in the path
            }
        }
        else if (figure === 'K') {
            for (let i = 0; i < knightMoves.length; i+=1) {
                let knightMove = knightMoves[i];
                let newPos = String.fromCharCode(from[0].charCodeAt(0) + knightMove[1]) +
                             (parseInt(from[1]) + knightMove[0]).toString();
                if (newPos === to) {
                    return 'yes';
                }
            }
            return 'no';
        }
        else {
            return 'no'; // not a valid move for any of the given figures
        }
 
        return 'yes';
    }

 
    for (let i = 0; i < tests; i+=1) {
        let move = params[rows + 3 + i];
        let answer = solveTest(move);
        console.log(answer);
    }
}
let args=[
    '3',
    '4',
    '--K-',
    'K--K',
    'Q--Q',
    '12',
    'd1 b3',
    'a1 a3',
    'c3 b2',
    'a1 c1',
    'a1 b2',
    'a1 c3',
    'a2 c1',
    'd2 b1',
    'b1 b2',
    'c3 a3',
    'a2 a3',
    'd1 d3'
];
solve(args);
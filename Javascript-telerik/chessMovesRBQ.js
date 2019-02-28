'use strict';
function solve(args) {
    let rows = +args[0];
    let columns = +args[1];
    let board = args.slice(2, rows + 2);
    console.log(board);
    let moves = args.slice(rows + 3);
    console.log(moves);
    function parseMove(move) {
        //move is in format 'a1 b6'
        let cells = move.split(" ");
        return {
            from: {
                rows: rows - Number(cells[0][1]),
                columns: cells[0].charCodeAt(0) - 97
            },
            to: {
                rows: rows - Number(cells[1][1]),
                columns: cells[1].charCodeAt(0) - 97
            }
        };
    }
    moves.forEach(function (move) {
        console.log(parseMove(move), move);
    });
    function canMoveBishop(from, to) {
        if (Math.abs(from.rows - to.rows) !== Math.abs(from.columns - to.columns)) {
            return false;
        }
        if ((from.rows === to.rows) && (from.columns === to.columns)) {
            return false;
        }
        let deltaRows = from.rows > to.rows ? -1 : 1,
            deltaColumns = from.columns > to.columns ? -1 : 1;
        while ((from.rows !== to.rows) || (from.columns !== to.columns)) {

            from.rows += deltaRows;
            from.columns += deltaColumns;

            if (board[from.rows][from.colums] !== '-') {
                return false;
            }
        }
        return true;

    }
    function canMoveRook(from, to) {
        if ((from.rows !== to.rows) && (from.columns !== to.columns)) {
            return false;
        }
        if ((from.rows === to.rows) && (from.columns === to.columns)) {
            return false;
        }

        let deltaRows = from.rows > to.rows ? -1 : 1;
        let deltaColumns = from.columns > to.columns ? -1 : 1;

        if (from.rows === to.rows) {
            deltaRows = 0;
        }
        else {
            deltaColumns = 0;
        }
        while ((from.rows !== to.rows) || (from.columns !== to.columns)) {

            from.rows += deltaRows;
            from.columns += deltaColumns;

            if (board[from.rows][from.colums] !== '-') {
                return false;
            }
        }
        return true;
    }
    function canMoveQueen(from, to) {
        return canMoveBishop(from, to) || canMoveRook(from, to);
    }
    for (let m of moves) {
        let move = parseMove(m);
        let piece = board[move.from.rows][move.from.columns];
        if (piece === 'R') {
            let canMove = canMoveRook(move.from, move.to);
            console.log(canMove ? 'yes' : 'no',piece,m);
        } else if (piece === 'Q') {
            let canMove = canMoveQueen(move.from, move.to);
            console.log(canMove ? 'yes' : 'no');

        } else if (piece === 'B') {
            let canMove = canMoveBishop(move.from, move.to);
            console.log(canMove ? 'yes' : 'no');
        }
    }
}

// let args = ['3',
//     '4',
//     '--R-',
//     'B--B',
//     'Q--Q',
//     '12',
//     'd1 b3',
//     'a1 a3',
//     'c3 c2',
//     'a1 c1',
//     'a1 b2',
//     'a1 c3',
//     'a2 b3',
//     'd2 c1',
//     'b1 b2',
//     'c3 b1',
//     'a2 a3',
//     'd1 d3'

// ];
let args=['5',
    '5',
   'Q---Q',
    '-----',
    '-B---',
    '--R--',
    'Q---Q',
    '10',
    'a1 a1',
    'a1 d4',
    'e1 b4',
    'a5 d2',
    'e5 b2',
    'b3 d5',
    'b3 a2',
    'b3 d1',
    'b3 a4',
    'c2 c5'
];
solve(args);
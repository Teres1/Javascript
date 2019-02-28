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
'5 6',
'1 3 2 2 2 4',
'3 3 3 2 4 4',
'4 3 1 2 3 3',
'4 3 1 3 3 1',
'4 3 3 3 1 1' 	
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;
const line=gets();
let input=line.split(" ");
const n=+input[0];
const m=+input[1];
let matrix=[];
for (let i = 0; i < n; i++) {
    let col=[];
    line1=gets();
     let inp=line1.split(" ");
    for (let j = 0; j < m; j++) {

        col[j]= +(inp[j]);
    }
    matrix[i]=col;

}
function largestArea() {
    let  matrix=[[]];
                let rowIndex = [];
                let colIndex = [];
                let counter = 1;
                for (let i = 0; i < matrix.length; i++)
                {
                    for (let j = 0; j < matrix[0].length; j++)
                    {
                        if (matrix[i][j] != Integer.MIN_VALUE)
                        {
                            rowIndex.add(i);
                            colIndex.add(j);
                            goRecursive(rowIndex, colIndex, counter, matrix[i][j],matrix);
                        }
                    }
                }
    
    
            }
    
            function goRecursive()
            {
                let rowIndex=[];
                let colIndex=[];
                let counter;
                let  root;
                let matrix=[[]];
                let currentCount = rowIndex.size();
                for (let i = 0; i < currentCount; i+=1)
                {
    
                    if (rowIndex.peek() - 1 >= 0 &&
                            matrix[rowIndex.peek() - 1][colIndex.peek()] == root)
                    {
                        counter+=1;
                        rowIndex.add(rowIndex.peek() - 1);
                        colIndex.add(colIndex.peek());
                        matrix[rowIndex.peek() - 1][colIndex.peek()] = Integer.MIN_VALUE;
                    }
    
    
                    //[0,+1]
                    if (colIndex.peek() + 1 < matrix.length &&
                            matrix[rowIndex.peek()][colIndex.peek() + 1] == root)
                    {
                        counter++;
                        rowIndex.add(rowIndex.peek());
                        colIndex.add(colIndex.peek() + 1);
                        matrix[rowIndex.peek()][colIndex.peek() + 1] = Integer.MIN_VALUE;
                    }
    
                    //[+1,0]
                    if (rowIndex.peek() + 1 < matrix.length &&
                            matrix[rowIndex.peek() + 1][colIndex.peek()] == root)
                    {
                        counter++;
                        rowIndex.add(rowIndex.peek() + 1);
                        colIndex.add(colIndex.peek());
                        matrix[rowIndex.peek() + 1][colIndex.peek()] = Integer.MIN_VALUE;
                    }
    
                    //[0,-1]
                    if (colIndex.peek() - 1 >= 0 &&
                            matrix[rowIndex.peek()][colIndex.peek() - 1] == root)
                    {
                        counter++;
                        rowIndex.add(rowIndex.peek());
                        colIndex.add(colIndex.peek() - 1);
                        matrix[rowIndex.peek()][colIndex.peek() - 1] = Integer.MIN_VALUE;
                    }
                    rowIndex.remove();
                    colIndex.remove();
    
                }
    
                if (rowIndex.size() != 0)
                {
                    goRecursive(rowIndex, colIndex, counter, root,matrix);
    
                }
                else
                {
                    if (counter > result)
                    {
                        result = counter;
                    }
                }
                return result;
    
    
            }
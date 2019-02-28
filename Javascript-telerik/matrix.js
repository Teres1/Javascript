function matrix(arr) {
    let n = +arr[0];
    let line = '';
    for (let i = 1; i <= n; i += 1) {

        for (j = i; j <= n+(i-1); j += 1) {
            line += j  + ' ';
        }
        line+='\n';
        
    }
    console.log(line);
    
}
arr = [4];
matrix(arr);
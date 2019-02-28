function solve(args) {
    let a = [];
    let b = [];
    let c = [];
    let d = 'end';
    let t = '';
    for (let i = 0; i < args.length - 1; i += 3) {
        a.push(+args[i]);
        if (args[i] === d) {
            break;
        }
    }
    for (let i = 1; i < args.length - 1; i += 3) {
        b.push(+args[i]);
        if (args[i] === d) {
            break;
        }
    }
    for (let i = 2; i < args.length; i += 3) {
        c.push(args[i]);
        if (args[i] === d) {
            break;
        }
    }
    for (let i = 0; i < a.length; i += 1) {
        if ((a[i] > 0) && (b[i] > 0)) {
            if ((i + 1) % 2 === 1) {
                for (let j = a[i]; j <= b[i]; j += 3) {
                    t += c[i][j];
                }
            } else if ((i + 1) % 2 === 0) {
                for (let j = a[i]; j <= b[i]; j += 4) {
                    t += c[i][j];
                }
            }
        }
        else if ((a[i] > 0) && (b[i] < 0)) {
            if ((i ) % 2 === 1) {
                for (let j = a[i]; ((j >=a[i]+ b[i])&&(j>=0)); j -= 3) {
                    t +=c[i][j];
                }
            } else if ((i) % 2 === 0) {
                for (let j = a[i]; ((j >=a[i]+ b[i])&&(j>=0)); j -= 4) {
                    t +=c[i][j];
                }
            }
        }
        else if ((a[i] < 0) && (b[i] < 0)) {
            if ((i + 1) % 2 === 1) {
                for (let j =c[i].length + a[i]-1; ((j <=c[i].length+ b[i]-1)&&(j<c[i].length)); j += 3) {
                    t +=c[i][j];
                }
            } else if ((i + 1) % 2 === 0) {
                for (let j = c[i].length+a[i]-1; ((j <= c[i].length+b[i]-1)&&(j<c[i].length)); j += 4) {
                    t +=c[i][j];
                }
            }
        }
        else if ((a[i] < 0) && (b[i] > 0)) {
            if ((i) % 2 === 1) {
                for (let j =c[i].length + a[i]; ((j <=c[i].length+ b[i])&&(j<c[i].length)); j += 3) {
                    t +=c[i][j];
                }
            } else if ((i) % 2 === 0) {
                for (let j = c[i].length+a[i]; ((j <= c[i].length+b[i])&&(j<c[i].length)); j += 4) {
                    t +=c[i][j];
                }
            }
        }
    }

    console.log(a);
    console.log(b);
    console.log(c);
    console.log(t);
}
solve(['18',
    '23',
    'А traveller might choose a route basedek mythology, chaos,',
    '11',
    '26',
    'on a given destiny not gettinging to Hesiod, was the first thing to exist.',
    '4',
    '-18',
    'into which one is the best.',
    '6',
    '16',
    'Choices as professions are made',
    '-4',
    '18',
    'much more difficult.',
    '20',
    '20',
    'With them you might need to do some research beforehand.',
    'end']);
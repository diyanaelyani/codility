function solution(A) {
    const length = A.length;

    if (length < 1 || length > 1000000) 
        return 0;

    let pairs = {};
    let item;

    for (let i = 0; i < length; i++ ) {
        item = A[i];
        if ( item < 1 || item > 1000000000) 
            return 0;

        if ( pairs[ item.toString() ] ) {
            delete pairs[ item.toString() ];
            continue;
        }

        pairs[ item.toString() ] = true;
    }
    
    let keys = Object.keys(pairs);

    return keys.length == 1 ? parseInt(keys[0]) : 0;
}


console.log(solution([9, 3, 9, 3, 9, 7, 9])); //7
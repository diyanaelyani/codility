function solution(A) {
    // N is an integer within the range [0..100,000];
    const length = A.length;
    if( length < 0 || length > 100000) return 0;

    A.sort(function(a, b) {return a - b});
    
    let missing = 1;

    for (let i of A) {
        // each element of array A is an integer within the range [1..(N + 1)].
        if( typeof i !== 'number' || i < 1 || i > length+1) return 0;

        // the elements of A are all distinct;
        if( i === missing-1) return 0;

        if( missing === i ) {
            missing++;
        }

     }
     return missing;
}

// A[0] = 2
// A[1] = 3
// A[2] = 1
// A[3] = 5
console.log(solution([2,3,1,5])); //4
console.log(solution([2,2,3,1,5])); //4
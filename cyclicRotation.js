function solution(A, K) {
    const N = A.length;

    if ( N < 0 || N > 100 || K < 0 || K > 100 )
        return [];

    if ( K == 0 ) 
        return A;

    while ( K != 0 ) {
        A.unshift(A[N-1]); // add the last item to the front
        A.pop(); //remove the last item
        console.log(...A);
        K--;
    }
    return A;
}

// A = [3, 8, 9, 7, 6]
//     K = 3
console.log(solution([3, 8, 9, 7, 6], 3)); // [9, 7, 6, 3, 8]

// A = [0, 0, 0]
//     K = 1
//console.log(solution([0, 0, 0], 1)); // [0, 0, 0]

// A = [1, 2, 3, 4]
//     K = 4
//console.log(solution([1, 2, 3, 4], 4)); // [1, 2, 3, 4]


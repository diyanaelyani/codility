function solution(X, A) {
    // N and X are integers within the range [1..100,000];
    // each element of array A is an integer within the range [1..X].
    const N = A.length;
    if( typeof N !== 'number' || N < 1 || N > 100000 || typeof X !== 'number' || X < 1 || X > 100000) return -1;

    let when = -1;
    let positions = new Map();

    for (let i = 0; i < N; i++) {
        if ( A[i] < 1 || A[i] > X) 
            break;

        if(A[i] <= X && !positions.has(A[i])) 
            positions.set(A[i], i);

        if(positions.size == X) break;
    }

    if(positions.size == X) 
        when = Math.max(...positions.values());
    

    return when;
}

console.log(solution(5, [1,3,1,4,2,3,5,4])); //6
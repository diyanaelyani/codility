function solution(N, A) {
    // N and M are integers within the range [1..100,000];
    const length = A.length;

    if( typeof N !== 'number' || N < 0 || N > 100000 || length < 0 || length > 100000)
        return [];

    //initialize counters array
    let counters = [];
    for ( let i=0; i<N; i++) counters[i] = 0;
    
    let maxCounter = 0;
    let maxEverything = 0;

    for ( let i=0; i<length; i++ ) {
        // each element of array A is an integer within the range [1..N + 1].
        if( A[i] < 1 || A[i] > N+1 )
            return [];

        if ( A[i] <= N) {
            if( maxEverything > counters[A[i]-1])
                counters[A[i]-1] = maxEverything;    
            
            counters[A[i]-1] ++;

            if( counters[A[i]-1] > maxCounter )
                maxCounter = counters[A[i]-1];
           
        } else 
            maxEverything = maxCounter;
    }

    for( let i = 0; i < N; i++) {
        if( maxEverything > counters[i]) counters[i] = maxEverything;
    }
    return counters;

}

const answer = solution(5, [3,4,4,6,1,4,4]);
console.log(...answer); // [3, 2, 2, 4, 2]


/* You are given N counters, initially set to 0, and you have two possible operations on them:

increase(X) − counter X is increased by 1,
max counter − all counters are set to the maximum value of any counter.
A non-empty array A of M integers is given. This array represents consecutive operations:

if A[K] = X, such that 1 ≤ X ≤ N, then operation K is increase(X),
if A[K] = N + 1 then operation K is max counter.
For example, given integer N = 5 and array A such that:

    A[0] = 3
    A[1] = 4
    A[2] = 4
    A[3] = 6
    A[4] = 1
    A[5] = 4
    A[6] = 4
the values of the counters after each consecutive operation will be:

    (0, 0, 1, 0, 0) 3 == N+1?
    (0, 0, 1, 1, 0)
    (0, 0, 1, 2, 0)
    (2, 2, 2, 2, 2)
    (3, 2, 2, 2, 2)
    (3, 2, 2, 3, 2)
    (3, 2, 2, 4, 2) */
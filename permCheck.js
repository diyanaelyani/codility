function solution(A) {

    // A non-empty array A consisting of N integers is given.
    const length = A.length;

    // N is an integer within the range [1..100,000];
    if( length <1 || length > 100000) 
        return 0;

    //sort int array using compare function
    A.sort(function(a, b) {return a - b});

    let currValue = 1;
    let temp = 0;

    for (let i = 0; i < length ; i++) {

        // each element of array A is an integer within the range [1..1,000,000,000].
        if ( typeof A[i] !== 'number' || A[i] < 1 || A[i] > 1000000000)
            return 0;

        // current value should be increased by 1, and
        // current item should not equal to the last item
        if ( A[i] !== currValue || A[i] == temp ) 
            return 0;

        temp = A[i];
        currValue++;
        
    }
    return 1;

    // A permutation is a sequence containing each element from 1 to N once, and only once.
    // given an array A, returns 1 if array A is a permutation and 0 if it is not.
}

console.log(solution([4,3,1,2])); //1
console.log(solution([4,1,3]));//0
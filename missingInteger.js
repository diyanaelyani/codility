function solution(A) {
    // N is an integer within the range [1..100,000];
    // each element of array A is an integer within the range [−1,000,000..1,000,000].
    const length = A.length;

    if( length < 1 || length > 100000)
        return 0;

    //sort int array using compare function
    A.sort(function(a, b) {return a - b});

    let smallest = 1;

    for (let i = 0; i < length; i++ ){
        if (typeof A[i] != 'number' || A[i] < -1000000 || A[i] > 1000000)
            return 0;
            
        if(smallest === A[i])
            smallest++;
    }
    return smallest;
}

console.log(solution([1, 3, 6, 4, 1, 2])); //5
console.log(solution([-1, -3])); //1
console.log(solution([1, 2, 3])); //4
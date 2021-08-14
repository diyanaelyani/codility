function solution(A) {
    //N is an integer within the range [3..100,000];

    const length = A.length;
    if ( length < 3 || length > 100000 ) return 0;

    for( let i=0; i<length; i++) {
        if( typeof A[i] != 'number' || A[i] < -1000 || A[i] > 1000) {
            return 0;
        }
    }

    //sort int array using compare function
    A.sort(function(a, b) {return a - b});
    let maxProduct = A[length - 1] * A[length - 2] * A[length - 3];

    //in case we have 2 -ve number in the beginning of array, we have to compare if 
    //the product bigger than last 3 items in the sorted array

    if(A[0] < 0 && A[1] < 0) {
        let temp = A[0] * A[1] * A[length - 1];

        if( temp > maxProduct ) maxProduct = temp;
    }
    return maxProduct;
}
// A[0] = -3
// A[1] = 1
// A[2] = 2
// A[3] = -2
// A[4] = 5
// A[5] = 6
console.log(solution([-3,1,2,-2,5,6]));
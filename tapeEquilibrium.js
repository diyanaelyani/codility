function solution(A) {
    const length = A.length;

    if( length < 2 || length > 100000 )
        return 0;

    if( A[0] < -1000 || A[0] > 1000)
        return 0;

    let left = A[0];
    let right = A.reduce( function(total, item) {return total + item;}) - left;
    let sum = Math.abs( left - right );
    let temp;

    for( let i = 1; i < length -1; i++ ) {
        if( A[i] < -1000 || A[i] > 1000)
            return 0;

        left += A[i];
        right -= A[i];
        temp = Math.abs( left - right );

        if ( temp < sum) {
            sum = temp;
        }
    }
    return sum;
}
console.log(solution([3,1,2,4,3])); //1
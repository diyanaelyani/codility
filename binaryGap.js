function solution(N) {
    if( typeof N !== 'number' || N < 1 || N > 2147483647 )
        return 0; 

    let binary = (N >>> 0).toString(2);
    const length = binary.length;
    let hasOne = false;
    let zeroes = 0;
    let gaps = [];
    let item;

    for (let i=0; i < length; i++ ) {
        item = binary.charAt(i);
        if ( item == 1 ) {
            if ( hasOne === false ) {
                hasOne = true;
                continue;
            }

            gaps.push(zeroes);
            zeroes = 0;
            continue;
        }
        zeroes ++;
    }
    return gaps.length == 0 ? 0: Math.max(...gaps);
}

console.log(solution(9)); // 2
console.log(solution(529)); //4
console.log(solution(20)); //1
console.log(solution(15)); //0
console.log(solution(32)); //0
console.log(solution(1041)); //5

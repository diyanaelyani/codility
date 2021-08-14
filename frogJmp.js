function solution(X, Y, D) {
    //three integers X, Y and D
    // returns the minimal number of jumps from position X to a position equal to or greater than Y.

    // X, Y and D are integers within the range [1..1,000,000,000];
    // X ≤ Y.

    if ( !(validInput(X) && validInput(Y) && validInput(D))) return 0;
    if ( X > Y) return 0;

    return Math.ceil((X-Y)/D);
}

function validInput(input) {
    if( typeof input !== 'number' || input < 1 || input > 1000000000) return false;
    return true;
}

// X = 10
// Y = 85
// D = 30
console.log(solution(10,85,30));//3
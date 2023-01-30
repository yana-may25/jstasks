function isEven(n) {
    if (n === 1) {
        return false;
    } else if (n === 0) {
        return true;
    } else {
        return n > 0 ? isEven(n - 2) : isEven(n + 2);
    }
};
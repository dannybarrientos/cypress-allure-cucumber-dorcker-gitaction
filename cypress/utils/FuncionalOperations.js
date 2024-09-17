function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
    }
    return true;
}

function isPalindrome(str) {
    const cleanStr = str.replace(/[^A-Za-z]/g, "").toLowerCase();
    return cleanStr === cleanStr.split("").reverse().join("");
}

function fibonacci(n) {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence.slice(0, n);
}

function findPair(numbers, target) {
    const map = {};
    for (let num of numbers) {
    if (map[target - num] !== undefined) {
        return [target - num, num];
    }
    map[num] = true;
    }
    return null;
}

module.exports = {
    isPalindrome,
    fibonacci,
    findPair,
    isPrime,
};
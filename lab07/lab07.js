

//-------------------------------------------------
// Part 2: Update exercises
//-------------------------------------------------

//2. Re - implement the following exercises from Lab 5 to use map / filter / reduce Array methods instead of for loops:

/* 4 Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers
/* 5 Define a function reverse() that computes the reversal of a string.
/* 7 Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i. */
function sum(arr) {
    return arr.reduce(function (prevValue, elem, i, array) {
        return prevValue + elem;
    });
};
function multiply(arr) {
    return arr.reduce(function (prevValue, elem, i, array) {
        return prevValue * elem;
    });
};
function reverse(s) {
    return s.split("").reverse().join("");
}
function filterLongWords(arr, i) {
    return arr.filter((a) => { return a.length > i });
}

console.log("sum([1,2,3,4]) is " + sum([1, 2, 3, 4]));
console.log("multiply([1,2,3,4]) is " + multiply([1, 2, 3, 4]));
console.log("reverse(\"jag testar\") is " + reverse("jag testar"));
console.log("filterLongWords(['abc', 'abcde', 'acda'], 3) is "+ filterLongWords(['abc', 'abcde', 'acda'], 3));
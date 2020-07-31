 /* 4 Define a function sum() and a function multiply() 
     that sums and multiplies (respectively) all the numbers in an array of numbers

/* 5 Define a function reverse() that computes the reversal of a string.
/* 7 Write a function filterLongWords() that takes an array of 
words and an integer i and returns the array of words that are longer than i. */

function sum(num = []){
    return num.reduce((pre,current) => pre + current);
}

function multiply(num = []){
    return num.reduce((pre,current) => pre * current);
}

function reverse(string){
    return string.split("").reduce((prev,current) => current + prev);
}

function filterLongWords(words = [],i){
   return words.filter(word => word.length > i);
}



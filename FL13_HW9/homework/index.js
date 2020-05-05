//Task 1
function convert(...args) {
    let array = [];
    for (let i =0; i<args.length;i++) {
        if (typeof args[i] === 'number') {
            let numToStr = String(args[i]);
            array.push(numToStr);
        } else {
            let strToNum = Number(args[i]);
            array.push(strToNum);
        }
    }
    return array;
}
//Task 2
function executeForEach (array, callBack) {
    for (let i = 0; i < array.length; i++) {
        callBack(array[i]);
    }
}
//Task 3
function mapArray (inputArray, callBack) {
    let outputArray = [];
    executeForEach(inputArray, function (el) {
        let value;
        if (el === '*') {
            value = el;
        } else {
            value = Number(el);
        }
        outputArray.push(callBack(value));
    });
    return outputArray;
}
//Task 4
function filterArray (inputArray, callBack) {
    let outputArray = [];
    executeForEach(inputArray, function(el){
        if (callBack(el)) {
            outputArray.push(el);
        }
    });
    return outputArray;
}
// Task 5
function containsValue (haystack, needle) {
    let result = false;
    executeForEach(haystack, function (el) {
        if (el === needle) {
            result = true;
        }
    });
    return result;
}
//Task 6
function flipOver (inputString) {
    let reverseString = '';
    for (let char of inputString) {
        reverseString = char + reverseString;
    }
    return reverseString;
}
//Task 7
function makeListFromRanfe(startOfRange, endOfRange) {
    let list =[];
    for (let i = startOfRange; i <= endOfRange; i++) {
        list.push(i);
    }
    return list;
}
//Task 8
const fruits = [
    { name: 'apple', weight: 0.5 },
    { name: 'pineapple', weight: 2 }
];
function getArrayOfKeys(haystack, property) {
    let newArray = [];
    executeForEach(haystack, function (el) { //el = haystack[i]
        newArray.push(el[property]);
    });
    return newArray;
}
//Task 9 -????
const startRange = 10;
const endRange = 20;
function substitute(inputArray) {
    return mapArray(inputArray, function (el) {
        if (el < endRange && el > startRange) {
            return '*';
        } else {
            return el;
        }
    });
}
//Task10
const date = new Date(2020, 0, 2);
function getPastDay (date, days) {
    let result = date;
    const pastDate = date.getDate() - days;
    result.setDate(pastDate);
    return result.getDate();
}
//Task 11
//"YYYY/MM/DD HH:mm
function formatDate (date) {
    return date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate() + '' +
        date.getHours() + ':' + date.getMinutes();
}
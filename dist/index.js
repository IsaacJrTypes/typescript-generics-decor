"use strict";
/*
Create a generic identity function that takes an argument of type T and returns a value of type T.
Example usage: identity<number>(1) should return 1, and identity<string>("hello") should return "hello".
*/
function checkType(arg) {
    return arg;
}
const msg = checkType("hello");
console.log(msg);
const msg2 = checkType(1);
console.log(msg2);
/*
Write a function reverseArray<T> that takes an array of elements of type T and returns a new array with the elements in reverse order.
Ensure type safety by restricting the function to only work with arrays.
*/
function reverseArray(arr) {
    arr.reverse();
    return arr;
}
const arr = reverseArray(["1", "2", "3", "4"]);
console.log(arr);
/*
Develop a function mapObject<K, V, U> that takes an object with keys of type K and values of type V, along with a mapping function that converts V to another type U. Return a new object with the same keys but values of type U.
Example usage: mapObject({a: 1, b: 2}, x => x.toString()) should return {a: "1", b: "2"}.
*/
function mapObject(obj, callback) {
    const newObj = {};
    // iterate items
    for (const key in obj) {
        newObj[key] = callback(obj[key]);
    }
    return newObj;
}
console.log(mapObject({ a: 1, b: 2 }, x => x.toString()));
/*
Implement a generic function filterArray<T> that filters elements of an array based on a predicate function. The predicate function should take an element of type T and return a boolean.
Example usage: filterArray<number>([1, 2, 3, 4], x => x % 2 === 0) should return [2, 4].
*/
function filterArray(arr, callback) {
    return arr.filter((val) => {
        return callback(val);
    });
}
console.log(filterArray([1, 2, 3, 4], x => x % 2 === 0));
//# sourceMappingURL=index.js.map
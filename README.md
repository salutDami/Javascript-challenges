# Javascript Notes

## How To Covert An Array To A String? 

To convert an array to string in JavaScript, use the **toString()** method. The **array.toString()** is a built in Javascript method that returns a string with all array vaues seperated by commas. The **toString()** method does not modify the original array.

- Argument: The **toString()** does not take in any argument. 

- Return Value: It is String that represents value of the array, seperated by a comma. 

```js
const birthYear = [1998, 1999, 2000, 2002];
let data = birthYear.toString();
console.log(data);

// The output here should be 1998,1999,2000,2002
```

**Converting an Array To string using an array.join() method**

JavaScript array join() is a built in method se to convert the elements of an array into a string. The toString() can't be used on an array of objects because it will return **[object Object]** instead of the actual values. The syntax **array.join(seperator)** 

- Arguments: The seperator s an optional argument. The seperator to be used, if ommited, the elements are seperated with a comma. 

- The Return Value: It returns a string rpresentimg the array values, separated by a specified separator.

```js
const birthYear = [1998, 1999, 2000, 2002];
let data = birthYear.join();
console.log(data);

// The output here should be 1998,1999,2000,2002
```

- The default argument for the **join()** method is **","** which was seen in the example above. 

```js
const birthYear = [1998, 1999, 2000, 2002];
let data = birthYear.join(" ... ");
console.log(data);

// The output here should be 1998 ... 1999 ... 2000 ... 2002 
```

**Using the **ForEach()**

The **forEach()** executes a provided function once for each array elements. 

```js
const birthYear = [1998, 1999, 2000, 2002];
brithYear.forEach((value,index,array) =>{
  console.log(value,index,array);
})

// expected output: "value"
// expected output: "index"
// expected output: "array"
```

Parameters;

-callbackFn: Function to execute on each element. 

The function is called with the following arguments:

-elements: The current element being processed in the array. 

-index: The index of teh element in the array. 

-array: The array **forEach()** called upon.

- thisArg: Value to use as this when executing callbackFn. This is optional by the way.

- [askjavascript.com](https://askjavascript.com/how-to-convert-javascript-array-to-string/#:~:text=To%20convert%20array%20to%20string%20in%20JavaScript%2C%20use,%28%29%20method%20does%20not%20modify%20the%20original%20array.)

- [MDN web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
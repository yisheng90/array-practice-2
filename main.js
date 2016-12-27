// importing our helper method, helper.test()
var helper = require('./test-helper-functions')

// Write your own tests and then write code to pass the tests!
// helper.test(myFunc(intput), expectedOutput)

//Question1
//Write a JavaScript function to remove a specific element from an array.
//Sample input: removeArrayElement([2, 5, 9, 6], 5))
//Sample output: [2, 9, 6]

function removeArrayElement(arr, elm) {
  for (var i =0; i<arr.length; i++) {
    if (arr[i] === elm) {
      arr.splice(i, 1)
    }
  }
  return arr
}

helper.test(removeArrayElement([2,5,9,6],5), [2,9,6])


//Question 2
//Write a JavaScript function to get nth largest element from an unsorted array.
//Sample input: nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4)
//Sample output: 89

function nthlargest(arr, elm) {
  arr = arr.sort(function (a,b) {
    return (a-b)
  })

  return arr[(arr.length-elm)]

}

helper.test(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4), 89)

//Question 3
//Write a JavaScript function to get a random item from an array.
//Sample input: randomItem(['hello', 'hi', 'bye'])
//Sample output: 'hello' // or 'hi', or 'bye'!

function randomItem(arr) {
  var index = Math.floor(Math.random()*(arr.length-1))
  return arr[index]
}

helper.test(randomItem(['hello', 'hi', 'bye']), ('hello' || 'hi' || 'bye'))

//Question 4
//Write a JavaScript function to generate an array of specified length, filled with integer numbers, increase by a specific step from starting position.
//Sample input: arrayRange(1, 4, 1))
//Sample output: [1, 2, 3, 4]
//Sample input: arrayRange(-6, 5, 2)
//Sample output: [-6, -4, -2, 0, 2]

function arrayRange(startelm, length, increment) {
  var arr = [startelm]
  for (var i =1; i<length; i++) {
    arr.push(arr[i-1]+increment)
  }

  return arr
}

helper.test(arrayRange(1, 4, 1), [1, 2, 3, 4])
helper.test(arrayRange(-6, 5, 2), [-6, -4, -2, 0, 2])

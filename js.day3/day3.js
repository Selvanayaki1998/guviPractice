let arr = [1, 2, 3, 4, 5];
let result1 = [];
let result2 = [];
let result3 = [];
// Print odd numbers in an array.

document.addEventListener("DOMContentLoaded", function () {
  // anonymous function////////////////////////////////////////////////////////////
  // odd number

  var odd = function (arr) {
    for (let a = 0; a < arr.length; a++) {
      if (arr[a] % 2 != 0) {
        result1.push(arr[a]);
      }
    }
  };
  odd(arr);

  // title caps

  function toTitleCase(str) {
    return str.replace(/\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
  var stringArray = ["jAVA sCRIPT", "type script", "titlE cASE"];
  var titleCaseArray = stringArray.map(toTitleCase);

  console.log(titleCaseArray);

  // sum of all number
  let sum1anonymous = 0;
  let anonymousSum = function (arr) {
    arr.forEach((element) => {
      sum1anonymous += element;
    });
  };
  anonymousSum(arr);

  // prime number

  let isPrime = function (num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  function findPrimeNumbers(arr) {
    return arr.filter(isPrime);
  }

  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let primeNumbersAnonymous = findPrimeNumbers(numbers);

  console.log("Prime Numbers:", primeNumbersAnonymous);

  // palindrome
  let isPalindrome = function (str) {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    return cleanStr === cleanStr.split("").reverse().join("");
  };

  let findPalindromes = function (arr) {
    return arr.filter(isPalindrome);
  };
  let words = ["racecar", "apple", "level", "deified", "hello", "madam"];
  let palindromesAnoymous = findPalindromes(words);

  console.log("Palindromes:", palindromesAnoymous);

  // Rotate an array by k times
  let k = 7;
  let array = [11, 22, 33, 44, 55];
  let limit = k % 5;
  let rotateARR = function () {
    for (i = 0; i < limit; i++) {
      array.unshift(array.pop(i));
    }
  };
  rotateARR();
  console.log(array, "***");
  // remove duplicate
  let removeDuplicates = function (arr) {
    return Array.from(new Set(arr));
  };
  const originalArray = [1, 2, 2, 3, 4, 4, 5];
  const uniqueArrayAnonymous = removeDuplicates(originalArray);

  console.log("Unique Array:", uniqueArrayAnonymous);

  //////////////// IIFE///////////////////////////////////////////////////////////

  (function (arr) {
    for (let a = 0; a < arr.length; a++) {
      if (arr[a] % 2 != 0) {
        result2.push(arr[a]);
      }
    }
    console.log(result2);
  })(arr);

  // title case

  let titleCaseArrayIIFE;
  (function (stringArray) {
    titleCaseArrayIIFE = stringArray.map(function (txt) {
      return txt.replace(/\S*/g, function (word) {
        return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
      });
    });
  })([
    "this is a sample title case string",
    "aLl LoWeRcAsE cHaRaCtErS",
    "tHiS Is a MiXeD CaSe StRiNg",
  ]);

  // sum of all number
  let sum1IIFE = 0;
  (function (arr) {
    arr.forEach((element) => {
      sum1IIFE += element;
    });
  })(arr);

  // prime number
  let primeNumbersIIFE;
  (function (arr) {
    primeNumbersIIFE = arr.filter(function (num) {
      if (num <= 1) {
        return false;
      }
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    });
  })([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  //  palindrome
  let palindromesIIFE;
  (function (arr) {
    palindromesIIFE = arr.filter(function (str) {
      const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

      return cleanStr === cleanStr.split("").reverse().join("");
    });
  })(words);

  console.log("Palindromes:", palindromesIIFE);

  // remove duplicate
  let uniqueArrayArrowFunction;
  (function (arr) {
    uniqueArrayArrowFunction = Array.from(new Set(arr));
  })(originalArray);

  console.log("Unique Array:", uniqueArrayAnonymous);

  // Rotate arr
  let arrVal = [10, 20, 30, 40, 50];
  (function () {
    let k = 99;

    for (i = 0; i < k % 5; i++) {
      arrVal.unshift(arrVal.pop(i));
    }
  })();
  console.log(arrVal, "%%%%");

  // arrow function/////////////////////////////////////////////////////////////////////
  var oddArrowFunc = () => {
    for (let a = 0; a < arr.length; a++) {
      if (arr[a] % 2 != 0) {
        result3.push(arr[a]);
      }
    }
  };
  oddArrowFunc(arr);
  console.log(result3);

  // title case

  let toTitleCaseArrFun = (str) => {
    return str.replace(/\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };
  var stringArray = ["jAVA sCRIPT", "type script", "titlE cASE"];
  var titleCaseArrowFuncVal = stringArray.map(toTitleCaseArrFun);
  // arrow Function
  let sum1arrowFunc = 0;
  let arrowSum = (arr) => {
    arr.forEach((element) => {
      sum1arrowFunc += element;
    });
  };
  arrowSum(arr);

  // prime number

  let isPrimeArr = (num) => {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  findPrimeNumbers = (arr) => {
    return arr.filter(isPrimeArr);
  };

  let primeNumbersArrowFunction = findPrimeNumbers(numbers);

  console.log("Prime Numbers:", primeNumbersAnonymous);

  // palindrome
  let isPalindromeArrowFunc = (str) => {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    return cleanStr === cleanStr.split("").reverse().join("");
  };

  let findPalindromesArrowFunc = (arr) => {
    return arr.filter(isPalindromeArrowFunc);
  };

  let palindromesArrowFunc = findPalindromesArrowFunc(words);

  console.log("Palindromes:", palindromesArrowFunc);

  let allResults =
    `-----------------ANONYMOUS: -----------------\n` +
    `OddNumber: ${result1.join(", ")}\n` +
    `title caps: ${titleCaseArray.join(", ")}\n` +
    `Sum of all Number: ${sum1anonymous}\n` +
    `Prime Number: ${primeNumbersAnonymous} \n` +
    `Palindrome: ${palindromesAnoymous} \n` +
    `Remove duplicates : ${uniqueArrayAnonymous} \n` +
    `Rotate an array : ${array} \n` +
    `-----------------IIFE : -----------------\n` +
    `OddNumber: ${result2.join(", ")}\n` +
    `title caps: ${titleCaseArrayIIFE.join(", ")}\n` +
    `Sum of all Number: ${sum1IIFE}\n` +
    `Prime Number: ${primeNumbersIIFE}\n` +
    `Palindrime: ${palindromesIIFE} \n` +
    `Remove duplicates : ${uniqueArrayArrowFunction} \n` +
    `Rotate an array : ${arrVal} \n` +
    ` -------------ARROW FUNCTION: -----------------\n` +
    `OddNumber: ${result3.join(", ")}\n` +
    `title caps: ${titleCaseArrowFuncVal} \n ` +
    `Sum of all Number: ${sum1arrowFunc}\n` +
    `Prime Number: ${primeNumbersArrowFunction} \n` +
    `Palindrome: ${palindromesArrowFunc}`;

  document.getElementById("results").innerText = allResults;
});

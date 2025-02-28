// ফর লুপ ব্যবহার করে ১ থেকে ১০০ পর্যন্ত সংখ্যার যোগফল নির্ণয় করুন।
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("Sum of 1 to 100 is", sum);

// একটি অ্যারের প্রতিটি উপাদানকে দ্বিগুণ করে নতুন অ্যারে তৈরি করুন।

const arrayNumbers = [1, 2, 3, 4, 5];
const doubled = arrayNumbers.map((num) => num * 2);
console.log("double the array is:", doubled);

// একটি অ্যারের মধ্যে সবথেকে বড় সংখ্যাটি খুঁজে বের করুন।
const numbers = [10, 5, 8, 21, 3];
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}
console.log(max);

// একটি স্ট্রিং উল্টো করে প্রিন্ট করুন।
const str = "Programming Hero";
const reversed = str.split("").reverse().join("");
console.log(reversed);

// একটি অ্যারের মধ্যে সম সংখ্যাগুলোর তালিকা তৈরি করুন।
let numbers = [];
for (let i = 1; i <= 100; i++) {
  numbers.push(i);
}

console.log(numbers);

const evenNumbers = [];
const oddNumbers = [];

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    evenNumbers.push(i);
  } else {
    oddNumbers.push(i);
  }
}

console.log("Even Numbers:", evenNumbers);
console.log("Odd Numbers:", oddNumbers);

// একটি সংখ্যার ফ্যাক্টরিয়াল নির্ণয় করুন।
function factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
}

console.log(factorial(5));

// একটি সংখ্যা প্রাইম কিনা তা যাচাই করুন।
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}
console.log(isPrime(1));
console.log(isPrime(17));
console.log(isPrime(18));

// একটি অ্যারে থেকে ডুপ্লিকেট মানগুলো সরিয়ে নতুন অ্যারে তৈরি করুন।
const numbers = [1, 2, 3, 4, 2, 3, 5, 6, 1];
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers);

//  একটি স্ট্রিংয়ের ভাওয়েল গুলো গণনা করুন।
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("Programming Hero"));

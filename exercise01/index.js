// Bài 1: Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử.
// Chương trình thực hiện tính và hiển thị xem có bao nhiêu số nguyên lớn hơn hoặc bằng 10.
function countGreaterThanOrEqualToTen(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 10) {
      count++;
    }
  }
  return count;
}

// Ví dụ sử dụng hàm
const inputArray = [];
function initializeArray(inputArray) {
  for (let i = 0; i < 10; i++) {
    const userInput = parseInt(prompt(`Nhập số nguyên thứ ${i + 1}: `), 10);
    inputArray.push(userInput);
  }
}
initializeArray(inputArray);
const result = countGreaterThanOrEqualToTen(inputArray);
console.log(`Số lượng số nguyên lớn hơn hoặc bằng 10 là: ${result}`);
// Bài 2: Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử khác nhau.
//  Chương trình hiển thị ra được phần tử có giá trị lớn nhất trong mảng và vị trí của phần tử đó.
function findMaxAndPosition(arr) {
  let max = arr[0];
  let position = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      position = i;
    }
  }
  return { max, position };
}
// Ví dụ sử dụng hàm
const inputArray2 = [5, 12, 7, 20, 3, 15, 8, 10, 25, 1];
// initializeArray(inputArray2);
const result2 = findMaxAndPosition(inputArray2);
console.log(
  `Phần tử lớn nhất là: ${result2.max} tại vị trí: ${result2.position}`
);
// Bài 3: Viết chương trình khởi tạo nhập vào một mảng số nguyên.
// Hiển hiện giá trị lớn nhất trong mảng đó và giá trị trung bình của các phần tử trong mảng.
function findMaxAndAverage(arr) {
  let max = arr[0];
  let sum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }
  let average = sum / arr.length;
  return { max, average };
}
// Ví dụ sử dụng hàm
const inputArray3 = [5, 12, 7, 20, 3, 15, 8, 10, 25, 1];
// initializeArray(inputArray3);
const result3 = findMaxAndAverage(inputArray3);
console.log(
  `Phần tử lớn nhất là: ${result3.max}, giá trị trung bình là: ${result3.average}`
);
// Bài 4: Viết chương trình khởi tạo nhập vào một mảng số nguyên và đảo ngược các phần tử trong mảng đó.
function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    // Hoán đổi phần tử
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
  return arr;
}
// Ví dụ sử dụng hàm
const inputArray4 = [5, 12, 7, 20, 3, 15, 8, 10, 25, 1];
// initializeArray(inputArray4);
const result4 = reverseArray(inputArray4);
console.log(`Mảng sau khi đảo ngược là: ${result4}`);
// Bài 5: Viết chương trình đếm số nguyên âm trong một chuỗi.
function countNegativeIntegers(str) {
    const numbers = str.split(' ').map(Number);
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            count++;
        }
    }
    return count;
}
// Ví dụ sử dụng hàm
const inputString = "5 -3 12 -7 20 -1 15 -8 10 25 -4";
const result5 = countNegativeIntegers(inputString);
console.log(`Số lượng số nguyên âm trong chuỗi là: ${result5}`);
// Bài 6: Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử.
//  Nhập phần tử số nguyên và tìm xem số đó có nằm trong mảng số nguyên không? 
// Nếu có thuộc mảng số nguyên thì in ra "Number X is in the array" còn lại in ra 
// "Number X is not in the array".
function isNumberInArray(arr, number) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === number) {
            return true;
        }
    }
    return false;
}
// Ví dụ sử dụng hàm
const inputArray6 = [5, 12, 7, 20, 3, 15, 8, 10, 25, 1];
// initializeArray(inputArray6);
const numberToFind = 15;
const result6 = isNumberInArray(inputArray6, numberToFind);
if (result6) {
    console.log(`Number ${numberToFind} is in the array`);
} else {
    console.log(`Number ${numberToFind} is not in the array`);
}

// Bài 7: Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử.
//  Chương trình sắp xếp mảng theo thứ tự giảm dần và hiển thị ra mảng đã được sắp xếp.
function sortArrayDescending(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                // Hoán đổi phần tử
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
// Ví dụ sử dụng hàm
const inputArray7 = [5, 12, 7, 20, 3, 15, 8, 10, 25, 1];
// initializeArray(inputArray7);
const result7 = sortArrayDescending(inputArray7);
console.log(`Mảng sau khi sắp xếp giảm dần là: ${result7}`);

// Bài 8: Viết chương trình khởi tạo nhập vào 2 mảng số nguyên gồm 10 phần tử, gọi là mảng a và b.
// Mảng c là một mảng được khai báo gồm 20 phần tử số nguyên.
// Chương trình sẽ lưu các phần tử được nối từ hai mảng b và a vào mảng c. Hiển thị mảng c.
function mergeArrays(arrA, arrB) {
    const arrC = [];
    for (let i = 0; i < arrA.length; i++) {
        arrC.push(arrA[i]);
    }
    for (let j = 0; j < arrB.length; j++) {
        arrC.push(arrB[j]);
    }
    return arrC;
}
// Ví dụ sử dụng hàm
const arrayA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayB = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const result8 = mergeArrays(arrayA, arrayB);
console.log(`Mảng c sau khi nối từ mảng a và b là: ${result8}`);


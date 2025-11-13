// Bài 1: Viết một chương trình để in các ký tự trong một mảng theo thứ tự đảo ngược.
//  Ví dụ, nếu một mảng chứa các ký tự
//  [ ‘c’, ‘s’, ‘c’, ‘2’, ‘6’, ‘1’ ] sau khi thực hiện đảo ngược sẽ là “261csc”

let arr = ["c", "s", "c", "2", "6", "1"];

let stringMock = arr.reverse().join("");
console.log("arr.reverse().flat()", arr.reverse().join(""));

// Bài 2: Viết một chương trình khai báo một mảng ký tự. In ra số “ký tự số” trong mảng.

// Bài 3: Viết một chương trình để đếm số ký tự trong một chuỗi.
let a = "Cắt giao diện về Responsive";
console.log(
  "a.split",
  a
    .split(" ")
    .reduce(
      (previousValue, currentValue) => previousValue + currentValue.length,
      0
    )
);

// Bài 4: Viết một chương trình nhập vào 2 chuỗi, sau đó kiểm tra xem hai chuỗi có giống nhau hay không.

// Bài 5: Viết chương trình nhập vào một mảng ký tự, tìm tất cả các ký tự trong mảng là (-) và thay thế các ký tự này bởi ký tự ( _ )

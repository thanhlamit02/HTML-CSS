/* Khai báo biến: var */
// var fullName = 'Nguyễn Thành Lâm';
// alert(fullName);

//Hàm alert chỉ thông báo lần lượt các câu lệnh, không thông báo được đồng thời
//Có thể dùng dấu ; hoặc không tùy vào thói quen sử dụng

// var age = 20; //Khai báo biến
// alert(age); //Gọi tên biến

/* Hàm built in
    1, Alert
    2, Console
    3, Confirm
    4, Prompt
    5, Set timeout
    6, Set interval
*/

/*
console.log('This is Javascript basic');
var fullName = 'Nguyen Thanh Lam';
console.log(fullName);

confirm('Xác nhận thông báo!');

prompt('Bạn bao nhiêu tuổi?');

setTimeout(function() {
        alert('Day la thong bao test setTimeout');
    }, 1000) //In ra thông báo sau 1 khoảng thời gian

setInterval(function() {
        console.log('Đây là thông báo test setInterval');
    }, 1000) //In ra nội dung được lặp lại sau 1 khoảng thời gian nhất định

var age = 20;
var nextAge = age + 1;

console.log(nextAge);
*/

//var number = 9;
//var output = --number + number++;
//8 + 8 = 16
//--number: lưu biến trả về giá trị sau khi trừ, number++: lưu biến giá trị ban đầu
//console.log('output: ', output);

/*Toán tử nối chuỗi

var firstName = 'Nguyen';
var lastName = 'Lam';
console.log(firstName + ' ' + lastName);

var name = 'Thanh'
name += ' ' + 'Lam'; //Toán tử cộng bằng
console.log(name);

var nameOne = 'Le';
var nameTwo = 'Thi';
var nameThree = 'Hoai';
var nameOfPerson = nameOne + ' ' + nameTwo + ' ' + nameThree;
console.log(nameOfPerson);

var a = 1;
var b = -1;
var c = 0;
var d = 0;

var e = a <= b;
var f = c == d;
var g = a >= c;

console.log(e, f, g) // Output: ?
*/

// Toán tử Boolen
/* Để vượt qua thử thách này, hãy tạo biến canBuyAlcohol để thể hiện xem giá trị
của biến age có đủ tuổi mua rượu hay không(?).
Theo luật, người từ 18 tuổi trở lên mới được phép mua rượu.*/

/*
var age = 16;
var canBuyAlcohol = age >= 16;
console.log(canBuyAlcohol);
*/

//Câu lệnh if-else
/**
 * câu lệnh khi dùng if-else đc convert sang sẽ là sai khi:
 * 0
 * '' - ""
 * NaN
 * null
 * undefined
 * false
 */

var fullName = 0;
if (fullName) {
    console.log('Câu này đúng');
} else {
    console.log('Câu này sai');
}

var number = 13;
var remain = number % 2;
var isOdd = remain === 1;

if (isOdd) {
    console.log('True');
} else {
    console.log('False');
}

//Kiểu dữ liệu

/*
Kiểu dữ liệu trong Javascript
1. Dữ liệu nguyên thủy - Primitive Data
    -Number: số 
    -String: chuỗi kí tự: số hoặc chữ
    -Boolean: đúng hoặc sai
    -Undefined: không xác định
        Ex: var age;
    -Null: rỗng
    -Symbol:
        Ex: var id = Symbol('id'); unique
2. Dữ liệu phức tạp Complex Data
    -Function
        Ex: var myFunction = function (){
            alert('This is a function);
        }
    Run: myFunction();
    -Object
        Ex: var myObject = {
                name: 'Nguyen Lam',
                age: 20,
                address: 'Nam Dinh'
            };

            var myArray = [
                'Java',
                'C++'
            ];

3. Cách kiểm tra kiểu dữ liệu
    console.log(typeof tên biến);
*/


/** Toán tử so sánh
 *  ===
 *  !=
 */


//Toán tử logic:
/**
 * &&: lấy những giá trị phía sau
 * Ex: var result = 'A' && 'B';
 *      console.log('result', result);
 *      Kết quả: result B
 * ||: lấy những giá trị phía trước, không quan tâm đến giá trị sau
 * Ex: var result = 'A' || undefined || 'B"
 *      console.log('result', result);
 *      Kết quả: result A
 */

//Làm việc với hàm
function showAlert() {
    alert('This is Javascript basic');
}
// Gọi hàm
showAlert();

function showMessage(message) {
    console.log(message);
}

showMessage("Hi anh em F8!");


//Hàm có 1 tham số
function triple(x) {
    console.log(x);
}
triple('hi F8');

//Hàm có nhiều tham số
function sum(a, b) {
    console.log(a);
    console.log(b);
}
sum('Day la F8', 'This is F8');

//Từ khóa return
function cong(a, b) {
    return a + b; //các câu lệnh sau return sẽ không được thực hiện
}

var result = cong(2, 8);
console.log(result);

function toString(a, b) {
    return a.toString() + b.toString();
}

var result1 = toString('Day la', ' F8');
console.log(result1);

//Các loại function
/**
 * Declare function
 * Expression function
 * Arrow function
 */ 

//Làm việc với chuỗi 

var coursesStr = 'HTML & CSS, JavaScript, ReactJS';

function strToArray(str) {
   return str.split(', ');
}

// Expected results
console.log(strToArray(coursesStr));

// Output: ['HTML & CSS', 'JavaScript', 'ReactJS']

//1. Length
console.log(coursesStr.length);

//2. Find index
console.log(coursesStr.indexOf('CSS'));

//3. Cut string
console.log(coursesStr.slice(3));

//4. Replace
console.log(coursesStr.replace('HTML', 'SQL'));

//5. Convert to Uppercase & Lowercase
//Cắt ngược phải đếm từ số âm!
console.log(coursesStr.toLowerCase());
console.log(coursesStr.toUpperCase());

//6. Trim --Xóa bỏ các kí tự khoảng trắng có trong chuỗi
console.log(coursesStr.trim());

//7. Split --Cắt chuỗi ra thành phần tử mảng. Muốn cắt thì cần phải có điểm trung giữa các phần tử của chuối
console.log(coursesStr.split(', '));

//8. Get a character by index
//--Truyền giá trị của index không phù hợp với giá trị của chuỗi --> rỗng
console.log(coursesStr.charAt(3)); //Cách viết thứ nhất
console.log(coursesStr[3]); //Cách viết thứ hai

/*
Đối tượng Number trong Javascript là đối tượng giúp chúng ta định nghĩa số và làm việc với số. 
Chúng ta thường sử dụng các phương thức sau của đối tượng Number khi làm việc với số trong Javascript:

Phương thức	                                    Vai trò
Number.isFinite()	                Xác định xem giá trị đã cho có phải là số hữu hạn hay không. Trả về boolean
Number.isInteger()	                Xác định xem giá trị đã cho có phải là số nguyên hay không. Trả về boolean
Number.parseFloat()	                Chuyển đổi chuỗi đã cho thành một số dấu phẩy động
Number.parseInt()	                Chuyển đổi chuỗi đã cho thành một số nguyên
Number.prototype.toFixed()	        Chuyển đổi và trả về chuỗi đại diện cho số đã cho, có số chữ số chính xác sau dấu thập phân
Number.prototype.toString()	        Chuyển đổi và trả về số đã cho dưới dạng chuỗi
 */

Number.isFinite(2 / 0); // false
Number.isFinite(20 / 5); // true
Number.isFinite(0 / 0); // false

Number.isInteger(999999999); // true
Number.isInteger(0.2);       // false
Number.isInteger(Math.PI);   // false

Number.parseFloat('10') // 10
Number.parseFloat('10.00') // 10
Number.parseFloat('238,21') // 238
Number.parseFloat('237.22') // 237.22
Number.parseFloat('34 56 78') // 34
Number.parseFloat(' 37 ') // 37
Number.parseFloat('18 is my age') // 18

Number.parseInt('10') // 10
Number.parseInt('10.00') // 10
Number.parseInt('238,21') // 238
Number.parseInt('237.22') // 237
Number.parseInt('34 56 78') // 34
Number.parseInt(' 37 ') // 37
Number.parseInt('18 is my age') // 18

var numberObject = 1234.56789;

numberObject.toFixed(); // '1235'
numberObject.toFixed(1); // '1234.6'
numberObject.toFixed(6); // '1234.567890'

(11).toString();    // '11'
(18).toString();     // '18'
(17.3).toString();   // '17.3'


//Phương thức check xem có phải thuộc Kiểu NaN hay không
var number = 23 / 'ahsd';
console.log(isNaN(number));

/*
Tạo hàm isNumber, hàm này dùng với mục đích kiểm tra xem một giá trị có phải là 1 số hay không
Hàm isNumber có 1 tham số, hãy đặt tên nó là value
Khi value có kiểu số, hàm sẽ trả về true, ngược lại trả về false
*/

function isNumber(value){
    return typeof value === 'number';
}

// Expected results:
console.log(isNumber(999)); // true
console.log(isNumber('abc')); // false
console.log(isNumber('100')); // false


function isNumber(value) {
    return value.toString() === "NaN" || typeof value !== "number" ? false : true;
}

// Expected results:
console.log(isNumber(999)); // true
console.log(isNumber('abc')); // false
console.log(isNumber('100')); // false

console.log(isNumber(NaN)); // false
console.log(isNumber(100 / 'abc')); // false
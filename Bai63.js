var a = 123456789123456789123;
var b = 344568560135805236565;
var tong = a + b;
var hieu = a - b;
var tich = a * b;
var thuong = a / b;
console.log("Tong: " + tong);
console.log("Hieu: " + hieu);
console.log("Tich: " + tich);
console.log("Thuong: " + thuong);

var mang = [];
mang.push(tong);
mang.push(hieu);
mang.push(tich);
mang.push(thuong);

const fs = require('fs');
var des_filename = './Output/Bai63.out';

fs.writeFile(des_filename, mang, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
})
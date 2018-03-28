var arr = [];
const fs = require('fs');
var src_filename = 'data.txt';
var des_filename = './Output/Bai62.out';

fs.readFile(src_filename, function(err, data){
    arr = data.toString().split(" ");
    

    var k = 0;
    var tong = 0;
    for(let i = 1; i < arr.length - 1; i+=1){
        for(let j = i-1; j < arr.length; j+=1){
            if(arr[i] == arr[j] + arr[j+2]){
                tong += parseInt(arr[i]);
                k = 1;
            }
        }
    }
    if(k == 10)
        var kq = "Khong co cac phan tu xung quanh";
    else
        var kq = "Tong cac phan tu xung quanh trong mang la: " + tong;

    console.log(kq);


    fs.writeFile(des_filename, kq, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    })

});   

var arr = [];
var x = 5;
const fs = require('fs');
var src_filename = 'data.txt';
var des_filename = './Output/Bai38.out';

fs.readFile(src_filename, function(err, data){
    arr = data.toString().split(" ");
    
    var dem = 0;
    for(let i = 1; i < arr.length - 1; i+=1){
        if(arr[i] < arr[i - 1] && arr[i] < arr[i + 1]){
            dem += parseInt(arr[i]);
        }
    }
    var kq = "Tong cac phan tu cuc tieu la: " + dem;

    console.log(kq);


    fs.writeFile(des_filename, kq, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    })

});   


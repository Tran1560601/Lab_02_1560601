var arr = [];
var x = 5;
const fs = require('fs');
var src_filename = 'data.txt';
var des_filename = './Output/Bai39.out';

fs.readFile(src_filename, function(err, data){
    arr = data.toString().split(" ");
        
    var dem = 0;
    for(let i = 0; i < arr.length; i+=1){
        if(arr[i] % 3 == 0 && arr[i] % 5 == 0){
            dem += parseInt(arr[i]);
        }
    }
    var kq = "Tong cac phan tu la boi cua 3 & 5 la " + dem;

    console.log(kq);


    fs.writeFile(des_filename, kq, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    })

});   


var arr = [];
var x = 5;
const fs = require('fs');
var src_filename = 'data.txt';
var des_filename = './Output/Bai34.out';

fs.readFile(src_filename, function(err, data){
    arr = data.toString().split(" ");
    
    
        
    var tong = 0;
    for(let i = 0; i < arr.length; i+=1){
        if(i % 2 == 0){
            tong += parseInt(arr[i]);
        }
    }
    var kq = "Tong cac phan tu nam o vi tri chan la: " + tong;

    console.log(kq);


    fs.writeFile(des_filename, kq, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    })

});   

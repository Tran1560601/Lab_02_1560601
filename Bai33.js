var arr = [];
var x = 5;
const fs = require('fs');
var src_filename = 'data.txt';
var des_filename = './Output/Bai33.out';


function SoNguyenTo(x) {
    var s = 0;
    for(let i = 2; i <= x; i+=1){
        if(x % i == 0)
            s+=1;
    }
    if(s == 1)
        return 1;
    return 0;
}   

fs.readFile(src_filename, function(err, data){
    arr = data.toString().split(" ");
    
    
    var tong = 0;
    for(let i = 0; i < arr.length; i+=1){
        if(SoNguyenTo(arr[i]) == 1){
            tong += parseInt(arr[i]);
        }
    }
    kq = "Tong cac phan tu nguyen to la: " + tong;
    console.log(kq);


    fs.writeFile(des_filename, kq, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    })

});   

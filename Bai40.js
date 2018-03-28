
function SoHoanThien(x) {
    var s = 0;
    for(let i = 1; i < x; i+=1){
        if(x % i == 0)
            s+=i;
    }
    if(s == x)
        return 1;
    return 0;
}   
var arr = [];
var x = 5;
const fs = require('fs');
var src_filename = 'data.txt';
var des_filename = './Output/Bai40.out';

fs.readFile(src_filename, function(err, data){
    arr = data.toString().split(" ");
        
    var dem = 0;
    for(let i = 0; i < arr.length; i+=1){
        if(SoHoanThien(arr[i]) == 1){
            dem += parseInt(arr[i]);
        }
    }
    var kq = "Tong cac so hoan thien la: " + dem;
    console.log(kq);


    fs.writeFile(des_filename, kq, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    })

});   


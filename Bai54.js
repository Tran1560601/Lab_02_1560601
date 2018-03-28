
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
var arr = [];
var x = 0;
const fs = require('fs');
var src_filename = 'data.txt';
var des_filename = './Output/Bai54.out';

fs.readFile(src_filename, function(err, data){
    arr = data.toString().split(" ");

    var vitri = 0;
    console.log("------Chen " + x + " vao phia truoc so nguyen to dau tien------");
    for(let i = 0; i < arr.length; i+=1){
        if(SoNguyenTo(arr[i]) == 1){
            vitri = i;
            break;
        }
    }
    arr.length++;
    for(var i = arr.length - 1; i > vitri; i-=1){
        arr[i] = arr[i-1];
    }
    arr[vitri] = x;
    for(let i = 0; i < arr.length; i+=1){
        console.log(arr[i]);
    }
    fs.writeFile(des_filename, arr, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    })

});   

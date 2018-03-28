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
var x = 9;
var vitri = -1;

const fs = require('fs');
var src_filename = 'data.txt';
var des_filename = './Output/Bai12.out';

fs.readFile(src_filename, function(err, data){
    arr = data.toString().split(" ");
    
    var mang = [];
    console.log('-----Vi tri phan tu nho nhat trong mang----');
    var vitri = 0;
    var min = arr[0];
    for(let i = 0; i < arr.length; i+=1){
        if(arr[i] < min){
            min = arr[i];
            vitri = i;
        }
    }
    console.log("vi tri phan tu nho nhat la: " + vitri);
 
    mang.push(vitri);
    fs.writeFile(des_filename, mang, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    })

});   

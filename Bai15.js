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
var n = 10;
var dem = 0;

const fs = require('fs');
var src_filename = 'data.txt';
var des_filename = './Output/Bai15.out';

fs.readFile(src_filename, function(err, data){
    arr = data.toString().split(" ");
    
    var mang = [];
    console.log("------Xuat Vi Tri Cac So Nguyen To Lon Hon 23 Trong Mang------");
    for(let i = 0; i < arr.length; i+=1){
        if(SoNguyenTo(arr[i]) == 1 && arr[i] > 23){
            console.log(i);
            mang.push(i);
            dem = 1;
        }
    }
    fs.writeFile(des_filename, mang, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    })

    if(dem == 0)
        console.log("Khong co so nguyen to nao lon hon 22 ");
});   
  
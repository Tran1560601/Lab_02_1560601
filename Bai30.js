var arr = [];
const fs = require('fs');
var src_filename = 'data.txt';
var des_filename = './Output/Bai30.out';


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

fs.readFile(src_filename, function(err, data){
    arr = data.toString().split(" ");
    
    var mang = [];
    console.log("------Xuat Mang Cac So Hoan Thien------");
    for(let i = 0; i < arr.length; i+=1){
        if(SoHoanThien(arr[i]) == 1){
            console.log(arr[i]);
            mang.push(arr[i]);
        }
    }

    fs.writeFile(des_filename, mang, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    })

});   



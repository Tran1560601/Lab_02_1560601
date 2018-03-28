var arr = [];
var x = 20;
const fs = require('fs');
var src_filename = 'data.txt';
var des_filename = './Output/Bai29.out';


fs.readFile(src_filename, function(err, data){
    arr = data.toString().split(" ");
    
    var dem = 0;
    
    for(let i = 0; i < arr.length; i+=1){
        if(arr[i] < x){
            dem++;
        }
    }
    var kq = "So lan xuat hien phan tu nho hon " + x +" la " + dem;
        
    console.log(kq);


    fs.writeFile(des_filename, kq, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    })

});   


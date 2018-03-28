
var arr = [];

const fs = require('fs');
var src_filename = 'data.txt';
var des_filename = './Output/Bai18.out';

fs.readFile(src_filename, function(err, data){
    arr = data.toString().split(" ");
    
    var mang = [];
   
        
    var vitri = -1;
    console.log("------Xuat Vi Tri Phan Tu Duong Dau Tien Trong Mang------");
    for(let i = 0; i < arr.length; i+=1){
        if(arr[i] > 0){
            vitri = i;
            break;
        }
    }
    console.log(vitri);
    mang.push(vitri);

    fs.writeFile(des_filename, mang, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    })

});   



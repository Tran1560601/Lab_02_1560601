
var arr = [];

const fs = require('fs');
var src_filename = 'data.txt';
var des_filename = './Output/Bai22.out';

fs.readFile(src_filename, function(err, data){
    arr = data.toString().split(" ");
    
    var mang = [];
            
    
    var le_max = -1;
    for(let i = 0; i < arr.length; i+=1){
        if(arr[i] % 2 == 1){
            le_max = arr[i];
        }
    }
    console.log("------Xuat So Le Lon Nhat Trong Mang------");
    for(let i = 0; i < arr.length; i+=1){
        if(arr[i] % 2 == 1 && arr[i] > le_max){
            le_max = arr[i];
        }
    }
    console.log(le_max);
    mang.push(le_max);

    fs.writeFile(des_filename, mang, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    })

});   

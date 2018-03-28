var arr = [];
var arr1 = [];

const fs = require('fs');
var src_filename = 'data.txt';
var src_filename1 = 'data1.txt';
var des_filename = './Output/Bai25.out';

fs.readFile(src_filename, function(err, data){
    arr = data.toString().split(" ");     
    
    fs.readFile(src_filename1, function(err, data1){
        arr1 = data1.toString().split(" ");
        
    })

    var mang = [];
    console.log("------Phan Tu Xuat Hien Trong Day A Nhung Khong Xuat Hien Trong Day B------");
    for(let i = 0; i < arr.length; i+=1){
        var dem = 0;
        for(let j = 0; j < arr1.length; j+=1){
            if(arr[i] == arr1[j])
                dem++;
        }
        if(dem == 0)
            mang.push(arr[i]);
    }

    fs.writeFile(des_filename, mang, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    })

    
    var mang1 = [];
    console.log("------Phan Tu Xuat Hien Trong 2 Day A Va B------");
    for(let i = 0; i < arr.length; i+=1){
        var dem = 0;
        for(let j = 0; j < arr1.length; j+=1){
            if(arr[i] == arr1[j])
                dem++;
        }
        if(dem != 0)
            mang1.push(arr[i]);
    }
    fs.writeFile(des_filename, mang1, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    })

});   

 

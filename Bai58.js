var arr = [];
const fs = require('fs');
var src_filename = 'data.txt';
var des_filename = './Output/Bai58.out';

fs.readFile(src_filename, function(err, data){
    arr = data.toString().split(" ");
    

    var k = 2;
    //console.log("------Sap xep Mang Theo Thu Tu Giam Dan------");
    for(let i = 0; i < arr.length - 1; i+=1){
        for(let j = i+1; j < arr.length; j+=1){
            if(arr[i] < arr[j]){
                var temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
            }
        }
    }
    var kq = "Phan tu lon thu " + k + " la: " + arr[k];
    console.log(kq);

    fs.writeFile(des_filename, kq, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    })

});   

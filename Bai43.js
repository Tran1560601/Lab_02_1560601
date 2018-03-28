
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
const fs = require('fs');
var src_filename = 'data.txt';
var des_filename = './Output/Bai43.out';

fs.readFile(src_filename, function(err, data){
    arr = data.toString().split(" ");
    console.log(arr.length);
       
    console.log("------Sap xep Mang Theo Thu Tu Tang Dan So Nguyen To------");
    for(let i = 0; i < arr.length - 1; i+=1){
        for(let j = i+1; j < arr.length; j+=1){
            if(arr[i] > arr[j] && SoNguyenTo(arr[i]) == 1 && SoNguyenTo(arr[j]) == 1){
                var temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
            }
        }
    }
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

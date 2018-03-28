
var arr = [];

const fs = require('fs');
var src_filename = 'data.txt';
var des_filename = './Output/Bai23.out';

fs.readFile(src_filename, function(err, data){
    arr = data.toString().split(" ");
    
    var mang = [];
            
    
    var max = arr[0];
    var vitri_max = 0;
    var min = arr[0];
    var vitri_min = 0;
    for(let i = 0; i < arr.length; i+=1){
        if(arr[i] > max){
            max = arr[i];
            vitri_max = i;
        }
    }
    for(let i = 0; i < arr.length; i+=1){
        if(arr[i] < min){
            min = arr[i];
            vitri_min = i;
        }
    }
    arr[vitri_max] = min;
    arr[vitri_min] = max;
    console.log("------Mang Sau khi Hoan Doi Vi Tri Lon Nhat VA Nho Nhat------");
    for(let i = 0; i < arr.length; i+=1){
        console.log(arr[i]);
        mang.push(arr[i]);
    }

    fs.writeFile(des_filename, mang, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    })

});   




var arr = [];

const fs = require('fs');
var src_filename = 'data.txt';
var des_filename = './Output/Bai17.out';

fs.readFile(src_filename, function(err, data){
    arr = data.toString().split(" ");
    
    var mang = [];
   
    var vitri = -1;
    var max = 0;
    for(let i = 0; i < arr.length; i+=1){
        if(arr[i] < 0){
            max = arr[i];
            break;
        }
    }
    if(max == 0)
        console.log("Mang khong co phan tu am");
    else{
        console.log("------Xuat Vi Tri Phan Tu Am Lon Nhat Trong Mang------");
        for(let i = 0; i < arr.length; i+=1){
            if(arr[i] < 0 && arr[i] > max){
                max = arr[i];
                vitri = i;
            }
        }
        console.log(vitri);
    }
    mang.push(vitri);

    fs.writeFile(des_filename, mang, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    })

});   



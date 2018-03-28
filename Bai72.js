var arr = [];
const fs = require('fs');
var src_filename = 'data.txt';
var des_filename = './Output/Bai72.out';

fs.readFile(src_filename, function(err, data){
    arr = data.toString().split(" ");
    

    var phantu = 0;
    var dem_max = 0;
    for(let i = 0; i < arr.length; i+=1){
        var dem = 0;
        for(let j = i; j < arr.length; j+=1){
            if(arr[i] == arr[j]){
                dem++;
            }
        
        }
        if(dem > dem_max){
            phantu = arr[i];
            dem_max = dem;
        }
    }
    var kq = 'So xuat hien nhieu nhat la: ' + phantu;
    console.log(kq);

    fs.writeFile(des_filename, kq, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    })

});   

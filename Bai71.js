var arr = [];
const fs = require('fs');
var src_filename = 'data.txt';
var des_filename = './Output/Bai71.out';

fs.readFile(src_filename, function(err, data){
    arr = data.toString().split(" ");
            
    var maxle_dau = -1;
    for(let i = 0; i < arr.length; i+=1){
        if(arr[i] % 2 == 1){
            maxle_dau = arr[i];
            break;
        }
    }

    for(let i = 0; i < arr.length; i+=1){
        if(arr[i] % 2 == 1 && arr[i] > maxle_dau){
            maxle_dau = arr[i];
        }
    }
    var giatrichan = 0;
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] % 2 == 0 && arr[i] > maxle_dau){
            giatrichan = arr[i];
            break;
        }
    }

    for(let i = 0; i < arr.length; i+=1){
        if(arr[i] % 2 == 0 && arr[i] > maxle_dau && arr[i] < giatrichan){
            giatrichan = arr[i];
        }
    }
    var kq = 'So chan nho nhat lon hon moi so le la: ' + giatrichan;
    console.log(kq);

    fs.writeFile(des_filename, kq, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    })

});   

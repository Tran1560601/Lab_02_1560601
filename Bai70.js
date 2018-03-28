var arr = [];
const fs = require('fs');
var src_filename = 'data.txt';
var des_filename = './Output/Bai70.out';

fs.readFile(src_filename, function(err, data){
    arr = data.toString().split(" ");
            
        
    var maxchan_dau = 0;
    for(let i = 0; i < arr.length; i+=1){
        if(arr[i] % 2 == 0){
            maxchan_dau = arr[i];
            break;
        }
    }

    for(let i = 0; i < arr.length; i+=1){
        if(arr[i] % 2 == 0 && arr[i] > maxchan_dau){
            maxchan_dau = arr[i];
        }
    }
    var giatrile = -1;
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] % 2 == 1 && arr[i] > maxchan_dau){
            giatrile = arr[i];
            break;
        }
    }

    for(let i = 0; i < arr.length; i+=1){
        if(arr[i] % 2 == 1 && arr[i] > maxchan_dau && arr[i] < giatrile){
            giatrile = arr[i];
        }
    }
    var kq = 'So le nho nhat lon hon moi so chan la: ' + giatrile;
    console.log(kq);

    fs.writeFile(des_filename, kq, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    })

});   


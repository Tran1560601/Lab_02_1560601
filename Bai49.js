var arr = [];
const fs = require('fs');
var src_filename = 'data.txt';
var des_filename = './Output/Bai49.out';

function xoaPT(arr, k)
{
    for(var i = k; i < arr.length; i++)
    {
            arr[i] = arr[i+1];
    }
    arr.length--;
}
fs.readFile(src_filename, function(err, data){
    arr = data.toString().split(" ");
    
    var max = arr[0];
    for(let i = 0; i < arr.length; i+=1){
        if(arr[i] > max){
            max = arr[i];
        }
    }

    console.log("------Xoa cac phan tu co gia tri lon nhat------");
    for(var i = 0; i < arr.length; i++)
    {
        if(arr[i] == max)
        {
                xoaPT(arr, i);
                i--;
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

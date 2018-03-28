var arr = [];
const fs = require('fs');
var src_filename = 'data.txt';
var des_filename = './Output/Bai48.out';

fs.readFile(src_filename, function(err, data){
    arr = data.toString().split(" ");
    
        
    console.log("------Xoa cac phan tu tai vi tri le------");
    for(let i = arr.length - 1; i >= 0; i--)
    {
        if(i%2 != 0)
        {
            for(j = i; j < arr.length-1; j++)
            {
                arr[j] = arr[j+1];
            }
            arr.length--;
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

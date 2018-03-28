var arr = [];
const fs = require('fs');
var src_filename = 'data.txt';
var des_filename = './Output/Bai67.out';

fs.readFile(src_filename, function(err, data){
    arr = data.toString().split(" ");
        
    console.log("------Xoa cac phan tu co gia tri trung ------");
    for(let i=0; i < arr.length - 1; i++){
        for( let k = i+1; k < arr.length; k++){

            if (arr[k] == arr[i]){
                for(let j = k; j < arr.length - 1; j++){
                    arr[j] = arr[j+1];
                }
                arr.length--;
                k--;
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

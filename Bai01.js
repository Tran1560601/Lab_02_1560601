var arr = [];

const fs = require('fs');
var src_filename = 'data.txt';
var des_filename = './Output/Bai01.out';

// var p = fs.readFile(src_filename, (err, data) =>{
//     arr = data.toString().split(" ");
// });
// p.then(function(arr){
//     fs.writeFile(des_filename, arr, function(err) {
//         if(err) {
//             return console.log(err);
//         }
//         console.log("The file was saved!");
//         console.log(err1);
// })})
//     .catch((xe_dap) => {
//         console.log("Được chiếc xe đạp ....");
// });


fs.readFile(src_filename, function(err, data){
    arr = data.toString().split(" ");
    
    // console.log("------Xuat mang------");
    // for(let i = 0; i < arr.length; i+=1){
    //     console.log(arr[i]);
    // }
   
    fs.writeFile(des_filename, arr, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    })
});
 
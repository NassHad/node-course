const fs = require('fs');

// reading files
// fs.readFile('./docs/blog12.txt', (err, data) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });
// console.log('last line');

// writing files
// fs.writeFile('./docs/blog1.txt', 'Hello world !', () => {
//     console.log('File was written');
// });
//
// fs.writeFile('./docs/blog2.txt', 'Hello again !', () => {
//     console.log('File was written');
// });

// directories
/*
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err) => {
        (err) ? console.log(err) : 'folder created';
    })
} else {
    fs.rmdir('./assets', (err) => {
        (err) ? console.log(err) : 'folder deleted';
    })
}
*/

// deleting files

if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err) => {
        (err) ? console.log(err) : 'file deleted';
    })
}

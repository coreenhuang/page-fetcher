const fs = require('fs');
const request = require('request');

const args = process.argv.slice(2);
let url = args[0];
let localFilePath = args[1];


request(url, (error) => {
  if (error) {
    console.log('error:', error); 
  }
 
  fs.writeFile(localFilePath, response, (error) => {

    if (error) {
      console.log('error:', error); 
    }

    let fileSize = 

    console.log(`Downloaded and saved ${fileSize} bytes to ${localFilePath}`); 

  })

});
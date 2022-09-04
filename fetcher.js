const fs = require('fs');
const request = require('request');

const args = process.argv.slice(2);
let url = args[0];
let localFilePath = args[1];


request(url, (error, response, body) => {

  if (error) {
    console.log('error:', error); 
  } else {

    fs.writeFile(localFilePath, body, (error) => {
      if (error) {
        console.log('error:', error); 
      }
      console.log(`Downloaded and saved ${body.length} bytes to ${localFilePath}`); 
    })
  }

});
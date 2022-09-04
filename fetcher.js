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
      } else {
        console.log(`Downloaded and saved ${body.length} bytes to ${localFilePath}`); 
      }
    })
  }

});

//> node fetcher.js http://www.example.edu/ ./index.html
// Downloaded and saved 1235 bytes to ./index.html
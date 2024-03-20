const fs = require("fs");
const http = require("http");
const https = require("https");
const urlModule = require("url");

//Performs GET request and save the response to a file//

function fetchAndSave(url, outputFileName) {
  const protocol = url.startsWith("https") ? https : http;

  protocol
    .get(url, (response) => {
      let responseData = "";

      response.on("data", (chunk) => {
        responseData += chunk;
      });

      response.on("end", () => {
        fs.writeFile(outputFileName, responseData, (err) => {
          if (err) {
            console.error(
              `Error in the file ${outputFileName}: ${err.message}`
            );
          } else {
            console.log(
              `HTML successfully saved from ${url} to ${outputFileName}`
            );
          }
        });
      });
    })
    .on("error", (err) => {
      console.error(`Error fetching URL ${url}: ${err.message}`);
    });
}

if (process.argv.length < 3) {
  console.error("Usage: node urls.js FILENAME");
  process.exit(1);
}

const fileName = process.argv[2];

fs.readFile(fileName, "utf8", (err, data) => {
  if (err) {
    console.error(`Error reading file ${fileName}: ${err.message}`);
    process.exit(1);
  }

  const urls = data.trim().split("\n");

  //Process the URLs//
  urls.forEach((url) => {
    const parsedUrl = urlModule.parse(url);
    const outputFileName = `${parsedUrl.hostname}.html`;
    fetchAndSave(url, outputFileName);
  });
});

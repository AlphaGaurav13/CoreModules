var fs = require('fs');

// console.log('file reading Synchronously');
// var data = fs.readFileSync('CoreModule/gaurav.txt', 'utf8');
// console.log(data);
// console.log("sync reading done");




// // async

// console.log("start async reading")

// fs.readFile('fread.txt', 'utf-8', (err, data) => {
//   if(err) {
//     console.log(err);
//   }else {
//     console.log(data);
//   }
// })

// console.log("Async reading done");


// fs.readFile("test.json", (err, data) => {
//   if(err) {
//     console.log(err);
//   }else {
//     console.log(JSON.parse(data));
//   }
// })

// var content = "Hi, this is node js class";
// sync writing

// fs.writeFileSync("CoreModule/fwrite.txt", content);
// console.log("File written successfully");


// var contentjson={"name": "Arwin"}
// fs.writeFile("testasyn.json", JSON.stringyfy(contentjson), (err) => {
//   if(err) {
//     console.log(err);
//   }else {
//     console.log("File written successfully");
//   }
// })

// file copying 

// fs.copyFileSyn("test.txt", "testcopy.txt");


// fs.copyFile("test.json", "testcopy.json", (err) => {
//   if(err) {
//     console.log(err);
//   }
// })



// // deleting file the files  || unlinkSync ||  unlink

// fs.unlink("test.json", (err) => {
//   if(err) {
//     console.log(err);
//   }
// })


var http = require("http");


http.createServer((req, res) => {
  fs.readFile("test.txt", "utf-8", (err, data) =>  {
    if(err) {
      res.end(err)
    }else {
      res.writeHead(200, {'content-type': 'text/plain'})
      res.end(data);
    }
  })
}).listen(3001, () => {
  console.log("open browser at http://localhost:3001");
})
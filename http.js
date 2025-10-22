var http = require("http");

http.createServer((req, res) => {
  res.write("Hello ");
  res.write("My name is Gaurav. ");
  res.write("I am learning Node.js ");
  // var a = 10;
  // function add(a,b) {
  //   return a + b;
  // }
  // res.write(add(4,5).toString());
  // // res.write(a.toString());
  // res.end();

  function fact(n) {
    if(n == 0 || n == 1) {
      return 1;
    }

    return n * fact(n - 1);
  }


  res.write("Factorial of 5 is " + fact(5));
  res.end();
}).listen(3001, () => {
  console.log("Server is running at http://localhost:3001");
});

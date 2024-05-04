const http = require("http");

const port = 8081; // local port num

http
  .createServer((req, res) => { // call back function
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>Hey! server has started and now you can procced :-)... </h2>");
    res.end();
  })
  .listen(port, () => { // call back function
    console.log(`NodeJs Server Started Running on Port: ${port}`);
  });

// http://localhost:8081
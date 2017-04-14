/*jshint esversion: 6 */

const net = require('net');

const server = net.createServer((socket)=>{


  console.log("New Connection.");

  socket.on('data', (data) => {

  // switch statement??


  // with cases for each page?

    const dataArray = data.toString().split('\r\n');
    const requestLine = dataArray[0].split(' ');
    const method = requestLine[0];
    const path = requestLine[1];
    const httpVersion = requestLine[2];
    console.log(path);



switch (data) {

  default:
    socket.write(indexHdBod);
    [break;]
}

  socket.end();



  });
});

// This initiates the Server
server.listen(8080,()=> {

  });

const indexHdBod = `HTTP/1.1 200 OK
Content-type: text/html
Content-Length: ${indexHTML.length}

${indexHTML}`;

const hydrogenHdBod = `HTTP/1.1 200 OK
Content-type: text/html
Content-Length: ${hydrogen.length}

${hydrogen}`;

const heliumHdBod = `HTTP/1.1 200 OK
Content-type: text/html
Content-Length: ${helium.length}

${helium}`;

const errorStatusHdBod = `HTTP/1.1 200 OK
Content-type: text/html
Content-Length: ${errorStatus.length}

${errorStatus}`;


// const indexHTML = connect html page here
// const hydrogen = connect hydrogen page here
// const helium = connect helium page here
// const errorStatus = connect 404 page here
var exec = require("child_process").exec;
function start(response) {
  console.log("Request handler 'start' was called.");
  fs = require('fs');


  response.writeHead(200, {'Content-Type': 'text/html'});

  var file = fs.createReadStream('G:/tp_embarqué/index.html');
  file.pipe(response);
  response.end;

}
function conn(response){
  console.log("Request handler 'start' was called.");
  fs = require('fs');


  response.writeHead(200, {'Content-Type': 'text/html'});

  var file = fs.createReadStream('G:/tp_embarqué/seconnecter.html');
  file.pipe(response);
  response.end;

}
      
 
function find(response) {
  console.log("Request handler 'start' was called.");
  exec("find /",
  { timeout: 10000, maxBuffer: 20000*1024 },
  function (error, stdout, stderr) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write(stdout);
  response.end();
  });
 }
 function upload(response) {
  console.log("Request handler 'upload' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello Upload");
  response.end();
 }
 function show(response) {
  console.log("Request handler 'show' was called."); 
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello show");
  response.end();
 }
 function login(response) {
  console.log("Request handler 'login' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello login");
  response.end();
 }
 function logout(response) {
  console.log("Request handler 'start' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello logout");
  response.end();
 }
 exports.start = start;
  exports.upload = upload;
 exports.find = find;
 exports.show = show;
 exports.login = login;
 exports.logout = logout;
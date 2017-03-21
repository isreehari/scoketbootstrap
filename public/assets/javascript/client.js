var socket = io('http://192.168.56.102:8080');
socket.on("message-from-server",function(evt){
  console.log(evt.greeting);
});

socket.emit("message-from-client",{greeting:'Hello from Client'});

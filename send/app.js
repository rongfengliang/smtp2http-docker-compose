var email 	= require("emailjs");
var server 	= email.server.connect({
   host:    "smtp2http", 
   ssl:     false
});
 
// send the message and get a callback with an error or details of the message that was sent
server.send({
   text:    "dalongdemo", 
   from:    "1141591465@qq.com", 
   to:      "dalongrong@qq.com",
   subject: "dalongdemo"
}, function(err, message) { console.log(err || message); });
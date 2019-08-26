var twilio = require('twilio');
var accountSid = '#'; // Your Account SID from www.twilio.com/console
var authToken = '#';   // Your Auth Token from www.twilio.com/console

var client = new twilio(accountSid, authToken);

function sendSms(msg,number){
    
    client.messages.create({
        body:msg,
        to: number,  // Text this number
        from: '+12022171993' // From a valid Twilio number
    })
    .then((message) => console.log("message sent :",message.sid));

}

module.exports=sendSms

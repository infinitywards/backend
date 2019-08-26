var twilio = require('twilio');
var accountSid = 'AC9f3c5bb4801cf4849c46986fb3f17167'; // Your Account SID from www.twilio.com/console
var authToken = '10a5a0a7279913f3fbcafd749a096fce';   // Your Auth Token from www.twilio.com/console

var client = new twilio(accountSid, authToken);

function sendSms(msg,number){
    
    client.messages.create({
        body:msg,
        to: number,  // Text this number
        from: '+12035909565' // From a valid Twilio number
    })
    .then((message) => console.log("message sent :",message.sid));

}

module.exports=sendSms

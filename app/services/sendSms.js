var twilio = require('twilio');
var accountSid = 'AC947d59f1edf12eeb95a35920a8186762'; // Your Account SID from www.twilio.com/console
var authToken = '5e3c96bdc7ed66bc9d0320ea15be1136';   // Your Auth Token from www.twilio.com/console

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

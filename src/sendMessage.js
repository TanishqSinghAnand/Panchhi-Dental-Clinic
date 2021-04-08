const accountSid = "AC4e197ad8662ecc7d9bccf943d21d38e6";
const authToken = "28d4a6c0a6904409468721718243ebef";
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    body: "Your appointment is coming up on July 21 at 3PM",
    from: "whatsapp:+14155238886",
    to: "whatsapp:+917837552077",
  })
  .then((message) => console.log(message.sid))
  .done();

import { Twilio } from "twilio";
const accountSid = process.env.TWILIO_ACCOUNT_SID!;
const authToken = process.env.TWILIO_AUTH_TOKEN!;

const client = new Twilio(accountSid, authToken);

export const sendMessage = (to: string, from: string, body: string,mediaUrl:string) => {

  return new Promise((resolve, reject) => {
    client.messages
      .create({
        to,
        from,
        body,
        mediaUrl
      })
      .then(message => {
        resolve(message.sid);
      })
      .catch(error => {
        reject(error);
        console.log(error);
      });
  });
};

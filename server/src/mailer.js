import nodeMailer from 'nodemailer';

let mailTransporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'promaserver@gmail.com',
        pass: 'gxonfgqgzyvmpkpd'
    }
});

export default function sendMail(mailDetails) {
    mailTransporter.sendMail(mailDetails)
        .then(() => { console.log('Mail sent successfully') })
        .catch((error) => { console.log('Error while sending mail: ' + error) });
}
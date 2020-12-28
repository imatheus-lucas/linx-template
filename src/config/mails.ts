import nodemailer from 'nodemailer'

const mailer = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, 
    auth: {
      user: 'testAccount.user', 
      pass: 'testAccount.pass', 
    },
})

export default mailer;
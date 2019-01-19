const nodeMailer = require('nodemailer');

let transporter = nodeMailer.createTransport({
  // service: 'Gmail',
  host: 'smtp.163.com',
  secureConnection: true, // use SSL
  port: 465,
  secure: true,
  auth: {
    // user: 'gongshichaoha@gmail.com',
    user: 'littleomarr@163.com',
    // pass: 'gong8075'
    // pass: 'fgkiffrimznebeee'
    pass: 'A12345678'
  }
});

let mailOptions = {
  from: `"emmm"<littleomarr@163.com>`,
  to: '767745133@qq.com',
  subject: '别退了',
  html: `对不起`
};

transporter.sendMail(mailOptions,(error,log)=>{
  console.log(error,log);
});






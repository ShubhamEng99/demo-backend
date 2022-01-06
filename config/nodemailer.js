const nodemailer=require('nodemailer');

const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, 
      auth: {
        user: 'shubham.eng1999@gmail.com', 
        pass: '',
      },
});
  

module.exports=transporter;

  

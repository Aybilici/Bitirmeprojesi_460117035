require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const emailController = require('./email/email.controller');
const emailControllers = require('./mail/email.controller');
const { PORT, CLIENT_ORIGIN, DB_URL } = require('./config');
const path = require('path');

app.use(
  cors({
    origin: CLIENT_ORIGIN,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.get('/wake-up', (req, res) => res.json('👌'));

app.post('/email', emailController.collectEmail);

app.get('/email/confirm/:id', emailController.confirmEmail);

app.post('/mail', emailControllers.collectEmail);
app.get('/mail/en/confirm/:id', emailControllers.confirmEmail);

const options = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
};
app.post('/gonullumaltepe', (req, res) => {
  var data = req.body;

  var smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    port: 465,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
    debug: true,
  });

  var mailOptions = {
    from: data.email,
    to: 'abdulhakbilici@gmail.com',
    subject: 'Gönüllü Staj Başvuru',
    html: `<div style="width:70%; height:100%; border-radius:15px; background-color: #114AA1; margin: 10px auto; padding:20px 30px; color:white; font-size:25px;"><h3 style="text-align:center">Gönüllü Staj Çalışmak!</h3>
              <p>Adı-Soyadı: <span style="background-color: #fff; color:#2855ac; padding:5px; border-radius:5px; font-weight:bold;">${data.name} ${data.lastname}</span></p>
              <p>Mailiniz: <span style="background-color: #fff; color:#2855ac; padding:5px; border-radius:5px; font-weight:bold;">${data.email}</span></p>
              <p>Telefon: <span style="background-color: #fff; color:#2855ac; padding:5px; border-radius:5px; font-weight:bold;">${data.tele}</span></p>
              <p>Okulu: <span style="background-color: #fff; color:#2855ac; padding:5px; border-radius:5px; font-weight:bold;">${data.school}</span></p>
              <p>Bölümü: <span style="background-color: #fff; color:#2855ac; padding:5px; border-radius:5px; font-weight:bold;">${data.episode}</span></p>
              <p>Okul Durumu: <span style="background-color: #fff; color:#2855ac; padding:5px; border-radius:5px; font-weight:bold;">${data.status}</span></p>
              <p>Turkcell için fikri var mı?: <span style="background-color: #fff; color:#2855ac; padding:5px; border-radius:5px; font-weight:bold;">${data.turk}</span></p>
              <p>Neden stajyerde çalışmak ister: <span style="background-color: #fff; color:#2855ac; padding:5px; border-radius:5px; font-weight:bold;">${data.intern}</span></p>
              <p>Nerde çalışmak ister: <span style="background-color: #fff; color:#2855ac; padding:5px; border-radius:5px; font-weight:bold;">${data.place}</span></p>
              <p>Soru: <span style="background-color: #fff; color:#2855ac; padding:5px; border-radius:5px; font-weight:bold;">${data.sorular}</span></p>
              <p>Soru2: <span style="background-color: #fff; color:#2855ac; padding:5px; border-radius:5px; font-weight:bold;">${data.sorular2}</span></p>
              <p>Staj başlama-bitiş tarihi: <span style="background-color: #fff; color:#2855ac; padding:5px; border-radius:5px; font-weight:bold;">${data.start} - ${data.finish}</span></p>
              <p>Kendisi anlatsın: <span style="background-color: #fff; color:#2855ac; padding:5px; border-radius:5px; font-weight:bold;">${data.message}</span></p>
              <img src="https://s.turkcell.com.tr/SiteAssets/Hakkimizda/genel-bakis/logolarimiz/TURKCELL_YATAY_DISI_LOGO.jpg" width="300px" height="200px" style="margin:20px 0px;"
        alt="turkcell" />
              </div>
              `,
  };

  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.send(error);
      console.log(data.file);
    } else {
      res.send('Success');
      console.log(data.file);
    }
    smtpTransport.close();
  });
});
app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/gonulluankara', (req, res) => {
  var data = req.body;

  var smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    port: 465,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
    debug: true,
  });

  var mailOptions = {
    from: data.email,
    to: 'abdulhakbilicii@gmail.com',
    subject: 'Gönüllü Staj Başvuru',
    html: `<div style="width:70%; height:100%; border-radius:15px; background-color: #114AA1; margin: 10px auto; padding:20px 30px; color:white; font-size:25px;"><h3 style="text-align:center">Gönüllü Staj Çalışmak!</h3>
              <p>Adı-Soyadı: <span style="background-color: #fff; color:#2855ac; padding:5px; border-radius:5px; font-weight:bold;">${data.name} ${data.lastname}</span></p>
              <p>Mailiniz: <span style="background-color: #fff; color:#2855ac; padding:5px; border-radius:5px; font-weight:bold;">${data.email}</span></p>
              <p>Telefon: <span style="background-color: #fff; color:#2855ac; padding:5px; border-radius:5px; font-weight:bold;">${data.tele}</span></p>
              <p>Okulu: <span style="background-color: #fff; color:#2855ac; padding:5px; border-radius:5px; font-weight:bold;">${data.school}</span></p>
              <p>Bölümü: <span style="background-color: #fff; color:#2855ac; padding:5px; border-radius:5px; font-weight:bold;">${data.episode}</span></p>
              <p>Okul Durumu: <span style="background-color: #fff; color:#2855ac; padding:5px; border-radius:5px; font-weight:bold;">${data.status}</span></p>
              <p>Turkcell için fikri var mı?: <span style="background-color: #fff; color:#2855ac; padding:5px; border-radius:5px; font-weight:bold;">${data.turk}</span></p>
              <p>Neden stajyerde çalışmak ister: <span style="background-color: #fff; color:#2855ac; padding:5px; border-radius:5px; font-weight:bold;">${data.intern}</span></p>
              <p>Nerde çalışmak ister: <span style="background-color: #fff; color:#2855ac; padding:5px; border-radius:5px; font-weight:bold;">${data.place}</span></p>
              <p>Soru: <span style="background-color: #fff; color:#2855ac; padding:5px; border-radius:5px; font-weight:bold;">${data.sorular}</span></p>
              <p>Soru2: <span style="background-color: #fff; color:#2855ac; padding:5px; border-radius:5px; font-weight:bold;">${data.sorular2}</span></p>
              <p>Staj başlama-bitiş tarihi: <span style="background-color: #fff; color:#2855ac; padding:5px; border-radius:5px; font-weight:bold;">${data.start} - ${data.finish}</span></p>
              <p>Kendisi anlatsın: <span style="background-color: #fff; color:#2855ac; padding:5px; border-radius:5px; font-weight:bold;">${data.message}</span></p>
              <img src="https://s.turkcell.com.tr/SiteAssets/Hakkimizda/genel-bakis/logolarimiz/TURKCELL_YATAY_DISI_LOGO.jpg" width="300px" height="200px" style="margin:20px 0px;"
        alt="turkcell" />
              </div>
              `,
  };

  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.send(error);
      console.log(data.file);
    } else {
      res.send('Success');
      console.log(data.file);
    }
    smtpTransport.close();
  });
});

app.post('/zorunlumaltepe', (req, res) => {
  var data = req.body;

  var smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    port: 465,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
    debug: true,
  });

  var mailOptions = {
    from: data.email,
    to: 'abdulhakbilici@gmail.com',
    subject: 'Zorunlu Staj Başvuru',
    html: `<div style="width:70%; height:100%; border-radius:15px; background-color: #114AA1; margin: 10px auto; padding:20px 30px; color:white; font-size:25px;"><h3 style="text-align:center">Zorunlu Staj Çalışmak!</h3>
              <p>Adı-Soyadı: <span style="background-color: #fff; color:#2855ac; padding:5px; border-radius:5px; font-weight:bold;">${data.name} ${data.lastname}</span></p>
              <p>Mailiniz: <span style="background-color: #fff; color:#2855ac; padding:5px; border-radius:5px; font-weight:bold;">${data.email}</span></p>
              <p>Telefon: <span style="background-color: #fff; color:#2855ac; padding:5px; border-radius:5px; font-weight:bold;">${data.tele}</span></p>
              <p>Okulu: <span style="background-color: #fff; color:#2855ac; padding:5px; border-radius:5px; font-weight:bold;">${data.school}</span></p>
              <p>Bölümü: <span style="background-color: #fff; color:#2855ac; padding:5px; border-radius:5px; font-weight:bold;">${data.episode}</span></p>
              <p>Okul Durumu: <span style="background-color: #fff; color:#2855ac; padding:5px; border-radius:5px; font-weight:bold;">${data.status}</span></p>
              <p>Turkcell için fikri var mı?: <span style="background-color: #fff; color:#2855ac; padding:5px; border-radius:5px; font-weight:bold;">${data.turk}</span></p>
              <p>Neden stajyerde çalışmak ister: <span style="background-color: #fff; color:#2855ac; padding:5px; border-radius:5px; font-weight:bold;">${data.intern}</span></p>
              <p>Nerde çalışmak ister: <span style="background-color: #fff; color:#2855ac; padding:5px; border-radius:5px; font-weight:bold;">${data.place}</span></p>
              <p>Soru: <span style="background-color: #fff; color:#2855ac; padding:5px; border-radius:5px; font-weight:bold;">${data.sorular}</span></p>
              <p>Soru2: <span style="background-color: #fff; color:#2855ac; padding:5px; border-radius:5px; font-weight:bold;">${data.sorular2}</span></p>
              <p>Staj başlama-bitiş tarihi: <span style="background-color: #fff; color:#2855ac; padding:5px; border-radius:5px; font-weight:bold;">${data.start} - ${data.finish}</span></p>
              <p>Kendisi anlatsın: <span style="background-color: #fff; color:#2855ac; padding:5px; border-radius:5px; font-weight:bold;">${data.message}</span></p>
              <img src="https://s.turkcell.com.tr/SiteAssets/Hakkimizda/genel-bakis/logolarimiz/TURKCELL_YATAY_DISI_LOGO.jpg" width="300px" height="200px" style="margin:20px auto;"
        alt="turkcell" />
              </div>
              `,
  };

  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.send(error);
      console.log(data.file);
    } else {
      res.send('Success');
      console.log(data.file);
    }
    smtpTransport.close();
  });
});

app.post('/zorunluankara', (req, res) => {
  var data = req.body;

  var smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    port: 465,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
    debug: true,
  });

  var mailOptions = {
    from: data.email,
    to: 'abdulhakbilicii@gmail.com',
    subject: 'Zorunlu Staj Başvuru',
    html: `<div style="width:70%; height:100%; border-radius:15px; background-color: #114AA1; margin: 10px auto; padding:20px 30px; color:white; font-size:25px;"><h3 style="text-align:center">Zorunlu Staj Çalışmak!</h3>
              <p>Adı-Soyadı: <span style="background-color: #fff; color:#2855ac; padding:5px; border-radius:5px; font-weight:bold;">${data.name} ${data.lastname}</span></p>
              <p>Mailiniz: <span style="background-color: #fff; color:#2855ac; padding:5px; border-radius:5px; font-weight:bold;">${data.email}</span></p>
              <p>Telefon: <span style="background-color: #fff; color:#2855ac; padding:5px; border-radius:5px; font-weight:bold;">${data.tele}</span></p>
              <p>Okulu: <span style="background-color: #fff; color:#2855ac; padding:5px; border-radius:5px; font-weight:bold;">${data.school}</span></p>
              <p>Bölümü: <span style="background-color: #fff; color:#2855ac; padding:5px; border-radius:5px; font-weight:bold;">${data.episode}</span></p>
              <p>Okul Durumu: <span style="background-color: #fff; color:#2855ac; padding:5px; border-radius:5px; font-weight:bold;">${data.status}</span></p>
              <p>Turkcell için fikri var mı?: <span style="background-color: #fff; color:#2855ac; padding:5px; border-radius:5px; font-weight:bold;">${data.turk}</span></p>
              <p>Neden stajyerde çalışmak ister: <span style="background-color: #fff; color:#2855ac; padding:5px; border-radius:5px; font-weight:bold;">${data.intern}</span></p>
              <p>Nerde çalışmak ister: <span style="background-color: #fff; color:#2855ac; padding:5px; border-radius:5px; font-weight:bold;">${data.place}</span></p>
              <p>Soru: <span style="background-color: #fff; color:#2855ac; padding:5px; border-radius:5px; font-weight:bold;">${data.sorular}</span></p>
              <p>Soru2: <span style="background-color: #fff; color:#2855ac; padding:5px; border-radius:5px; font-weight:bold;">${data.sorular2}</span></p>
              <p>Staj başlama-bitiş tarihi: <span style="background-color: #fff; color:#2855ac; padding:5px; border-radius:5px; font-weight:bold;">${data.start} - ${data.finish}</span></p>
              <p>Kendisi anlatsın: <span style="background-color: #fff; color:#2855ac; padding:5px; border-radius:5px; font-weight:bold;">${data.message}</span></p>
              <img src="https://s.turkcell.com.tr/SiteAssets/Hakkimizda/genel-bakis/logolarimiz/TURKCELL_YATAY_DISI_LOGO.jpg" width="300px" height="200px" style="margin:20px auto;"
        alt="turkcell" />
              </div>
              `,
  };

  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.send(error);
      console.log(data.file);
    } else {
      res.send('Success');
      console.log(data.file);
    }
    smtpTransport.close();
  });
});

app.post('/sendmaltepe', (req, res) => {
  var data = req.body;

  var smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    port: 465,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
    debug: true,
  });

  var mailOptions = {
    from: data.email,
    to: 'abdulhakbilici@gmail.com',
    subject: 'Bilgi',
    html: `<div style="width:70%; height:100%; border-radius:15px; background-color: #114AA1; margin: 10px auto; padding:20px 30px; color:white; font-size:25px;"><h3 style="text-align:center">Bilgi vermek istiyorum!</h3>
              <p>Adı-Soyadı: <span style="background-color: #fff; color:#2855ac; padding:5px; border-radius:5px; font-weight:bold;">${data.name}</span></p>
              <p>Mailiniz: <span style="background-color: #fff; color:#2855ac; padding:5px; border-radius:5px; font-weight:bold;">${data.email}</span></p>
              <p>Kendisi anlatsın: <span style="background-color: #fff; color:#2855ac; padding:5px; border-radius:5px; font-weight:bold;">${data.message}</span></p>
              <img src="https://s.turkcell.com.tr/SiteAssets/Hakkimizda/genel-bakis/logolarimiz/TURKCELL_YATAY_DISI_LOGO.jpg" width="300px" height="200px" style="margin:20px auto;"
        alt="turkcell" />
              </div>
              `,
  };

  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.send(error);
      console.log(data.file);
    } else {
      res.send('Success');
      console.log(data.file);
    }
    smtpTransport.close();
  });
});

app.post('/sendankara', (req, res) => {
  var data = req.body;

  var smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    port: 465,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
    debug: true,
  });

  var mailOptions = {
    from: data.email,
    to: 'abdulhakbilicii@gmail.com',
    subject: 'Bilgi',
    html: `<div style="width:70%; height:100%; border-radius:15px; background-color: #114AA1; margin: 10px auto; padding:20px 30px; color:white; font-size:25px;"><h3 style="text-align:center">Bilgi vermek istiyorum!</h3>
              <p>Adı-Soyadı: <span style="background-color: #fff; color:#2855ac; padding:5px; border-radius:5px; font-weight:bold;">${data.name}</span></p>
              <p>Mailiniz: <span style="background-color: #fff; color:#2855ac; padding:5px; border-radius:5px; font-weight:bold;">${data.email}</span></p>
              <p>Kendisi anlatsın: <span style="background-color: #fff; color:#2855ac; padding:5px; border-radius:5px; font-weight:bold;">${data.message}</span></p>
              <img src="https://s.turkcell.com.tr/SiteAssets/Hakkimizda/genel-bakis/logolarimiz/TURKCELL_YATAY_DISI_LOGO.jpg" width="300px" height="200px" style="margin:20px auto;"
        alt="turkcell" />
              </div>
              `,
  };

  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.send(error);
      console.log(data.file);
    } else {
      res.send('Success');
      console.log(data.file);
    }
    smtpTransport.close();
  });
});

mongoose
  .connect(DB_URL, options, () => {
    app.listen(PORT, () => console.log('Tamamdır'));
  })

  .catch((err) => console.log(err));

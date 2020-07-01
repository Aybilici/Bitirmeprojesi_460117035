const { CLIENT_ORIGIN } = require('../config');

// This file is exporting an Object with a single key/value pair.
// However, because this is not a part of the logic of the application
// it makes sense to abstract it to another file. Plus, it is now easily
// extensible if the application needs to send different email templates
// (eg. unsubscribe) in the future.
module.exports = {
  confirm: (id) => ({
    subject: 'React Confirm Email',
    html: `
    <div style="font-size: 30px; background-color: #2855ac; width: 80%; height: 100%; border: 1px solid black; margin: 10px auto; padding:10px; text-align:center;">
    <br />
      <a href='${CLIENT_ORIGIN}/confirm/${id}' style="text-decoration: none; color: #2855ac; background-color: #fff; padding: 20px; border-radius: 20px;  ">
        Hemen abone olalım!!
        
      </a><br /><img src="https://s.turkcell.com.tr/SiteAssets/Hakkimizda/genel-bakis/logolarimiz/TURKCELL_YATAY_DISI_LOGO.jpg" width="300px" height="200px" style="margin:20px 0px;"
        alt="turkcell" /></div>
    `,
    text: `Copy and paste this link: ${CLIENT_ORIGIN}/confirm/${id}`,
  }),
};

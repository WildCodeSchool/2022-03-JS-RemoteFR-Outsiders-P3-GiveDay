const express = require("express");
const flash = require("express-flash");

/* send reset password link in email */
router.post("/reset-password-email", function (req, res, next) {
  const email = req.body.email;

  //console.log(sendEmail(email, fullUrl));

  connection.query(
    'SELECT * FROM users WHERE email ="' + email + '"',
    function (err, result) {
      if (err) throw err;

      const type = "";
      const msg = "";

      console.log(result[0]);

      if (result[0].email.length > 0) {
        const token = randtoken.generate(20);

        const sent = sendEmail(email, token);

        if (sent != "0") {
          const data = {
            token: token,
          };

          connection.query(
            'UPDATE users SET ? WHERE email ="' + email + '"',
            data,
            function (err, result) {
              if (err) throw err;
            }
          );

          type = "success";
          msg = "The reset password link has been sent to your email address";
        } else {
          type = "error";
          msg = "Something goes to wrong. Please try again";
        }
      } else {
        console.log("2");
        type = "error";
        msg = "The Email is not registered with us";
      }

      req.flash(type, msg);
      res.redirect("/");
    }
  );
});

jwt.sign(payload, process.env.SECRET_JWT, { expiresIn: "1h" }, (err, token) => {
  res.json({
    success: true,
    token: "Bearer " + token,
  });
});

const payload = jwt.sign(
  {
    id: rows[0].id,
    email: rows[0].email,
    passToken,
  },
  process.env.SECRET_JWT,
  {
    expiresIn: "1h",
  }
);

/*res.cookie("user_giveday", token).json({
            message: "Password can be changed",
          });*/

require("dotenv").config();
const randtoken = require("rand-token");
const passToken = randtoken.generate(20);

class LogoutController {
  static logout = (req, res) => {
    console.warn("cookies :");
    console.warn(req.cookies.user_giveday);
    res.clearCookie("user_giveday").send("logout success de nouveau");

    // req.session.destroy(() => res.clearCookie("user_giveday").sendStatus(200));
  };
}

module.exports = LogoutController;

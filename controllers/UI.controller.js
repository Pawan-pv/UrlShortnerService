

function UI_Home(req, res) {
    return res.render("home")
  }

function UI_signup(req, res){
  return res.render("signup")
}

function UI_login(req, res){
    return res.render("login")
}
export { UI_Home, UI_signup , UI_login} 
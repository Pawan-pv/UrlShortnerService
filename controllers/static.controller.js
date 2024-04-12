import {User} from "../model/user.model.js"

async function login(req, res){
  const {username, password, email} = req.body;
  try {
    await User.creat({
      user_name: username,
      password: password,
      email: email
    })
    res.status(200).json({
      message: 'User created successfully'
    })
    res.render("login")
  } catch (error) {
    res.status(500).json({message: "Internal Server Error"})
  }
}
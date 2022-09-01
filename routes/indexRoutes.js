const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  res.send("Server OK");
});

route.get("/auth", (req, res) => {
  // логика определения авторизован ли user
  res.json({isAuth: true})
});

route.post("/user", async (req, res) => {
  try {
    // await User.create({ //создает обьект, без сохранения в БД
    //   name: req.body.firstName,
    //   lastName: req.body.lastName,
    //
    // });
    console.log('User Created');
    res.json({message: 'успешная запись'});
  } catch (error) {
    console.log('\x1b[31m', 'Post url error:', error.message);
    res.status(500).json({err: error.message})
  }


});

module.exports = route;

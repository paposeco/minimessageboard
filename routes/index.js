var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Oi",
    user: "Estela",
    added: new Date()
  },
  {
    text: "Ola!",
    user: "Tome",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: "Mini Messageboard", messages: messages})
});

/* get new message page */
router.get('/new', function(req, res, next){
  res.render('form', {title: "New Message"})
})

router.post('/new', function(req, res, next){
  const newmessage = {text: req.body.message, user: req.body.username, added: new Date()};
  messages.push(newmessage);
  res.redirect('/');
})

module.exports = router;

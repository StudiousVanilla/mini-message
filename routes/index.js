var express = require('express');
var router = express.Router();


const messages = [
  {
    text: "Well hello there!",
    user: "Obi-wan",
    added: new Date()
  },
  {
    text: "Now this is podracing",
    user: "Anakin",
    added: new Date()
  }
]


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message', messages:messages });
});

/* GET new message page */ 
router.get('/new', (req, res, next)=>{
  res.render('form')
})

router.post('/new', (req, res, next)=>{
  messages.push(
    {
      text: req.body.newMessage,
      user: req.body.userName,
      added: new Date()
    }
  )
  res.redirect('/')
})

module.exports = router;

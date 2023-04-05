const express = require('express');
const router = express.Router();
const Message = require('../models/message.js')


/* GET home page. */
router.get('/', async function(req, res, next) {
  const messages = await Message.find();
  res.render('index', { title: 'chat for fat idiots', messages: messages });
});

router.post('/', (req, res, next) => {
  const dateAdded = new Date()
  const newMessage = {
    text: req.body.text,
    user: req.body.user,
    added: `${dateAdded}`
  }
  const messageColRef = new Message({...newMessage})
  messageColRef.save()
    .then(result => res.redirect('/'))
    .catch(err => console.log(err))
  
})

module.exports = router

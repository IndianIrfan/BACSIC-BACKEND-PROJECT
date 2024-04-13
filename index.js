var express = require('express');
var router = express.Router();
var info=require('./users');
/* GET home page. */
router.get('/', function(req, res) {
  res.render('home')});


router.get('/about', function(req, res) {
  res.render('about')});
router.get('/service', function(req, res) {
  res.render('service'),{
    h:"service",
  }

});
router.get('/contact', function(req, res) {
  res.render('contact')});

router.post('/contact',  async function(req, res) 
{
  try{
  const infoinfo=  await new info(req.body);
    await infoinfo.save();
    res.redirect('/')
  }
   catch(err){
res.status(500).send(err)
}
});
module.exports = router;

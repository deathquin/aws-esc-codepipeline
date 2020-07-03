const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("HELLO2");
  res.render('index', { title: 'Express' });
});

router.get("/health", async function(req, res){
  res.writeHead(200, {
    'Content-Type': 'text/plain' // "Content-Type": "text/html"
  });

  res.write('OK1211 Express App');
  res.end();
});

module.exports = router;

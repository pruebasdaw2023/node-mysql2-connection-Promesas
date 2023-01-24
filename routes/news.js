const express = require('express');
const router = express.Router();
const pool = require('../config/dbConnection');

console.log('Conectado correctamente!!!');

/* GET home page. */
router.get('/', async function (req, res, next) {

  //UN SELECT PARA HACER LOS RESULTADOS DE CONSULTA  
  const result = await pool.query('SELECT * FROM news')
  console.log(result[0]);

  res.render('news/news', {
    news: result[0]
  });
});


router.post('/', async function (req, res, next) {

  console.log(req.body)
  const { title, news } = req.body

  // await pool.query('INSERT INTO news SET?', {
  //   title,
  //   news
  // })
  await pool.query('INSERT INTO news(title, news) VALUES (?, ?)', [title, news])

  res.redirect('/news')

});


module.exports = router;

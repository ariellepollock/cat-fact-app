var express = require('express');
var router = express.Router();
const axios = require('axios')

router.get('/fact', async (req, res, next) => {
  try {
      const catFactResponse = await axios.get('https://catfact.ninja/fact');
      const catFact = catFactResponse.data.fact;

      res.render('cat/fact', { fact: catFact });
  } catch (error) {
      next(error);
  }
});

module.exports = router;

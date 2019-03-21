const express = require('express');
const router = express.Router();
const data = require('../data.json');

router.get( '/:id', ( req, res ) => {

const { id }  = req.params;
const templateData = data.projects[id];

if (!templateData)
{
  res.render('error');
}

res.render('project', templateData);
});

module.exports = router;

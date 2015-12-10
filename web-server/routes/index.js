/**
 * Created by lixiaodong on 15/12/10.
 */

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('index.html', { title: 'Express' });
});

module.exports = router;
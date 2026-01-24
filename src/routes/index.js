const router = require('express').Router(); //allows to handle routs

router.get('/', (req, res) => { res.send('Hello There') });

router.use('/contacts', require('./contacts'));

module.exports = router;
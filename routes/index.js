const router = require('express').Router(); //alows to handle routs

router.get('/', (req, res) => { res.send('Hello There') });

module.exports = router;
const router = require('express').Router(); //allows to handle routs

router.use('/', require('./swagger'));

router.get('/', (req, res) => {
    //#swagger.tags=[´Hello There']
    res.send('Hello There')
});

router.use('/contacts', require('./contacts'));

module.exports = router;
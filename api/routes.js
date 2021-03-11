const router = require('express').Router();

router.get('/', (req, res) => res.send({ api: 'South System' }));

module.exports = router;

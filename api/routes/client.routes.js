const router           = require('express').Router({ mergeParams: true }),
      clientController = require('../controllers/client.controller');

router.get('/clients/all', clientController.getAll);
router.get('/clients/:id', clientController.getById);
router.post('/clients', clientController.addNew);

module.exports = router;
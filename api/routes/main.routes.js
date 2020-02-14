const router  = require('express').Router({ mergeParams: true }),
      mainController = require('../controllers/main.controller');

router.get('/', mainController.main);
router.get('/home', mainController.main);
router.get('/clients', mainController.getClientsPage);
router.get('/employees', mainController.getEmployeesPage);
router.get('/settings', mainController.getSettingsPage);
router.get('/statistics', mainController.getStatisticsPage);

router.get('*', mainController.error);

module.exports = router;
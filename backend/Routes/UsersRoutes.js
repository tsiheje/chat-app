const express = require('express');
const { CreateUsers, getAllUsers } = require('../Controllers/UsersControllers');
const router = express.Router();

router.post('/', CreateUsers);
router.get('/', getAllUsers);

module.exports = router;
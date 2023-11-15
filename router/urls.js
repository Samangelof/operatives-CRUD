const express = require('express');
const router = express.Router();

const { createOperator, getAllOperators, updateOperator, deleteOperator } = require('../views/views.js');

// •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
router.post('/api/v1/new_operative', createOperator);
router.get('/api/v2/operatives', getAllOperators);
router.put('/api/v3/operative_update/:id', updateOperator);
router.delete('/api/v4/operative_delete/:id', deleteOperator);
// •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••


module.exports = router;
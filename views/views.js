const Operator = require('../models/models.js');


// Create 
async function createOperator(req, res) {
    try {
        const newOperator = await Operator.create(req.body);
        res.json(newOperator); 
    } catch (error) {
        console.error('Error creating operator:', error);
        if (error.name === 'SequelizeValidationError') {
            const requiredFields = error.errors.map(err => err.path);
            res.status(400).json({ error: 'Error creating operator', requiredFields });
        } else {
            res.status(500).json({ error: 'Error creating operator' });
        }
    }
}


// Read 
async function getAllOperators(req, res) {
    try {
        const operators = await Operator.findAll();
        res.json(operators);
    } catch (error) {
        console.error('Error retrieving operators:', error);
        res.status(500).json({ error: 'Error retrieving operators' }); 
    }
}


// Update 
async function updateOperator(req, res) {
    const { id } = req.params;
    const data = req.body;

    try {
        const operator = await Operator.findOne({ where: { id } });

        if (!operator) {
            return res.status(404).json({ error: 'Operator not found' });
        }

        await Operator.update(data, { where: { id } });
        res.send('Operator data successfully updated');
    } catch (error) {
        console.error('Error updating operator:', error);
        res.status(500).json({ error: 'Error updating operator' });
    }
}



// Delete 
async function deleteOperator(req, res) {
    const { id } = req.params;

    try {
        const operator = await Operator.findOne({ where: { id } });

        if (!operator) {
            return res.status(404).json({ error: 'Operator not found' });
        }

        await Operator.destroy({ where: { id } });
        res.send('Operator successfully deleted');
    } catch (error) {
        console.error('Error deleting operator:', error);
        res.status(500).json({ error: 'Error deleting operator' });
    }
}


module.exports = {
    createOperator,
    getAllOperators,
    updateOperator,
    deleteOperator
};
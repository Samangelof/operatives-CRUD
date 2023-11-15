const { Sequelize, DataTypes } = require('sequelize');


const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'caliber.sqlite'
});

// Table
const Operator = sequelize.define('Operator', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [2, 50]
        }
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false
    },
    primaryWeapon: {
        type: DataTypes.STRING,
        allowNull: false
    },
    secondaryWeapon: {
        type: DataTypes.STRING,
        allowNull: false
    },
    gadgets: {
        type: DataTypes.STRING,
        allowNull: false
    },
    special_ability: {
        type: DataTypes.STRING,
        allowNull: false
    },
    health: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    armor: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});


// Create db (if not)
sequelize.sync()
    .then(() => {
        console.log('Таблица оперативников создана (или уже существует)');
    })
    .catch(err => {
        console.error('Ошибка при создании таблицы:', err);
    });


module.exports = Operator;
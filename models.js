const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/plantr');

db.define('Gardener', {
  name: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.INTEGER
  }
});

db.define('Plot', {
  size: {
    type: Sequelize.INTEGER
  },
  shaded: {
    type: Sequelize.BOOLEAN
  }
});

db.define('Vegetable', {
  name: {
    type: Sequelize.STRING
  },
  color: {
    type: Sequelize.STRING
  },
  plantedOn: {
    type: Sequelize.DATE
  }
});

module.exports = db;

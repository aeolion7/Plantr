const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/plantr');

const Gardener = db.define('gardener', {
  name: {
    type: Sequelize.STRING,
  },
  age: {
    type: Sequelize.INTEGER,
  },
});

const Plot = db.define('plot', {
  size: {
    type: Sequelize.INTEGER,
  },
  shaded: {
    type: Sequelize.BOOLEAN,
  },
});

const Vegetable = db.define('vegetable', {
  name: {
    type: Sequelize.STRING,
  },
  color: {
    type: Sequelize.STRING,
  },
  plantedOn: {
    type: Sequelize.DATE,
  },
});

Plot.belongsTo('Gardener');
Gardener.hasOne('Plot');

Vegetable.belongsToMany(Plot, { through: 'vegetablePlot' });
Plot.belongsToMany(Vegetable, { through: 'vegetablePlot' });

Gardener.belongsTo(Vegetable, { as: 'favoriteVegetable' });

module.exports = db;

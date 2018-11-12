const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/plantr');

const Gardener = db.define('Gardener', {
  name: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.INTEGER
  }
});

const Plot = db.define('Plot', {
  size: {
    type: Sequelize.INTEGER
  },
  shaded: {
    type: Sequelize.BOOLEAN
  }
});

const Vegetable = db.define('Vegetable', {
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

Vegetable.belongsToMany(Plot, { through: 'vegetablePlot' });
Plot.belongsToMany(Vegetable, { through: 'vegetablePlot' });

Gardener.belongsTo(Vegetable, { as: 'favoriteVegetable' });

Vegetable.create({
  name: 'Artichoke',
  color: 'Green',
  plantedOn: Date.now()
}).then(Vegetable.create({
  name: 'Eggplant',
  color: 'Purple',
  plantedOn: Date.now()
})).then(Vegetable.create({
  name: 'Asparagus',
  color: 'Green',
  plantedOn: Date.now() - 10
}));

module.exports = db;

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

const art = {
  name: 'Artichoke',
  color: 'Green',
  plantedOn: Date.now()
};

const egg = {
  name: 'Eggplant',
  color: 'Purple',
  plantedOn: Date.now()
};

const asp = {
  name: 'Asparagus',
  color: 'Green',
  plantedOn: Date.now() - 10
};

Promise.all([art, egg, asp]).then((vegetables) => {
  vegetables.forEach((vegetable) => {
    Vegetable.create(vegetable);
  });
});

module.exports = db;

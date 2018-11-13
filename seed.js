const db = require('./models');

const {
  vegetable: Vegetable,
  plot: Plot,
  gardener: Gardener
} = db.models;

const vegetableData = [
  { name: 'Asparagus', color: 'Green' },
  { name: 'Eggplant', color: 'Purple'},
  { name: 'Spinach', color: 'Green' },
  { name: 'Corn', color: 'yellow' }
];

const gardenerData = [
  { name: 'McGregor', age: 65 },
  { name: 'Hashimoto', age: 72 },
  { name: 'Smith', age: 57 }
];

const plotData = [
  { size: 50, shaded: true },
  { size: 120, shaded: false },
  { size: 150, shaded: true },
  { size: 75, shaded: false }
];

db.sync({ force: true })
  .then(() => {
    console.log('Database synced!');
    // returning: true returns representations of the created data
    return Promise.all([

    ]);
  })
  .catch(err => {
    console.log('Disaster! Something went wrong!');
    console.log(err)
  })
  .finally(() => {
    db.close();
  });


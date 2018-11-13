const db = require('./models');

const {
  vegetable: Vegetable,
  plot: Plot,
  gardener: Gardener
} = db.models;

db.sync({ force: true })
  .then(() => {
    console.log('Database synced!');
  })
  .catch(err => {
    console.log('Disaster! Something went wrong!');
    console.log(err)
  })
  .finally(() => {
    db.close();
  });


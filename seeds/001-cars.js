
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: 123, Make: 'rowValue1', Model: 'Focus'},
        {VIN: 232, Make: 'rowValue2', Model: 'Prime'},
        {VIN: 300, Make: 'rowValue3', Model: 'Rarri'}
      ]);
    });
};

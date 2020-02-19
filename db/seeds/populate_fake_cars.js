
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { id: 1, make: 'Toyota', model: 'Camry', vin: 12345, mileage: 5004.5 },
        { id: 2, make: 'Honda', model: 'Accord', vin: 56789, mileage: 201.5 },
        { id: 3, make: 'Dodge', model: 'Ram', vin: 98765, mileage: 27.54 }
      ]);
    });
};

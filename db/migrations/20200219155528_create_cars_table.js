
exports.up = function (knex) {
    return knex.schema.createTable("cars", tbl => {
        tbl.increments()

        tbl
            .string('make', 128)
            .notNullable()

        tbl.integer('vin')
            .notNullable()

        tbl.decimal('mileage')
            .notNullable()

        tbl.string('model', 128)
            .notNullable()

        tbl.string('trasmission_type', 128)

        tbl.string('title_status')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('cars')
};

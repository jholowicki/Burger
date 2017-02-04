//DataTypes is coming from SQL database, used to configure model for table.

module.exports = function(sequelize, DataTypes) {
    var Burgers = sequelize.define("burgers", {
        burger_name: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        devoured: {
            type: Datatypes.BOOLEAN,
            defaultValue: false
        },
        id: {
            type: Datatypes.INTEGER,
            timestamps: true,
            autoIncrement: true,
            primaryKey: true
        }
    });
    return Burgers;
}

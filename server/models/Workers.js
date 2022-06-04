module.exports = (sequelize, DataTypes) => {
    const Workers = sequelize.define("Workers", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    })
    return Workers
}
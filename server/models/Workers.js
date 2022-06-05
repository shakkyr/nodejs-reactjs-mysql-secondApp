module.exports = (sequelize, DataTypes) => {
    const Workers = sequelize.define("Workers", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
    })
    return Workers
}
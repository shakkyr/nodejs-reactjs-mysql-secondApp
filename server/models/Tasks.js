module.exports = (sequelize, DataTypes) => {
    const Tasks = sequelize.define("Tasks", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        taskText: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        acomplished: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        tasks: {
            type: DataTypes.INTEGER,
        }
    });

    Tasks.associate = (models) => {
        Tasks.hasMany(models.Workers)
    }
    return Tasks
}
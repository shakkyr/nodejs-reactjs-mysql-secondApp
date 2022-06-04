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
            default: 0
        },
        tasks: {
            type: DataTypes.INTEGER,
            default: 1
        }
    })

    return Tasks
}
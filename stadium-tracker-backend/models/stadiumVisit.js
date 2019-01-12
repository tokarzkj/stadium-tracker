module.exports = (sequelize, DataTypes) => {
    const stadiumTracker = sequelize.define('StadiumVisit', {
        stadiumName: DataTypes.STRING,
        visitDate: DataTypes.DATE,
        userId: DataTypes.STRING
    });

    return stadiumTracker;
}
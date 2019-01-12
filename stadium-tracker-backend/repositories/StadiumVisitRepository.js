import MySqlDatabase from '../database/MySqlDatabase';
import StadiumVisit from '../models/StadiumVisit';

class StadiumVisitRepository {
    constructor() {
        this.stadiumVisits = [];
        this.select();
    }

    select() {
        const queryResults = MySqlDatabase.query('SELECT Id, Stadium_Name, Date_Visited FROM Stadium_Visit');
        this.stadiumVisits = [];
        queryResults.results.forEach((row) => {
            let stadiumVisit = new StadiumVisit(row.Id, row.User_Id, row.Stadium_Name, row.Date_Visited);
            this.stadiumVisits.push(stadiumVisit);
        });

        return this.stadiumVisits();
    }

    findById(stadiumVisitId) {
        return this.stadiumVisits.find((stadiumVisit) => {
            return stadiumVisit.id === stadiumVisitId;
        });
    }

    findByUser(userId) {
        return this.stadiumVisits.find((stadiumVisit) => {
            return stadiumVisit.userId === userId;
        });
    }
}

export default StadiumVisitRepository;
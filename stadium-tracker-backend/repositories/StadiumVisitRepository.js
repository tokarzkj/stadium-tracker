import MySqlDatabase from '../database/MySqlDatabase';
import StadiumVisit from '../models/StadiumVisit';

class StadiumVisitRepository {
    constructor() {
        this.stadiumVisits = [];
        this.select();
    }

    select() {
        const queryResults = MySqlDatabase.query('SELECT Id, StadiumName, DateVisited');
        this.stadiumVisits = [];
        queryResults.results.forEach((row) => {
            let stadiumVisit = new StadiumVisit(row.Id, row.StadiumName, row.VisitedDate);
            this.stadiumVisits.push(stadiumVisit);
        });

        return this.stadiumVisits();
    }

    findById(stadiumVisitId) {
        return this.stadiumVisits.find((stadiumVisit) => {
            return stadiumVisit.id === stadiumVisitId;
        });
    }
}

export default StadiumVisitRepository;
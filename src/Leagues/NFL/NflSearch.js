import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

export class NflSearch extends React.Component {
    constructor(props) {
        super(props);

        const columns = [{
            Header: 'Team',
            accessor: 'team'
        },{
            Header: 'Stadium Name',
            accessor: 'stadiumName'
        }, {
            Header: 'City',
            accessor: 'city'
        }, {
            Header: 'State',
            accessor: 'state'
        }]

        this.state = {
            columns: columns
        }
    }

    getNflStadiums() {
        fetch('https://public.opendatasoft.com/api/records/1.0/search/?dataset=stadiums_nfl&rows=50&facet=primary_ty&facet=name1&facet=city&facet=state&facet=conference&facet=division&facet=team')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    stadiums: this.buildStadiumRecords(data.records)
                })
            });
    }

    buildStadiumRecords(stadiums) {
        return stadiums.map(stadium => {
            return {
                stadiumName: stadium.fields.name1,
                team: stadium.fields.team,
                city: stadium.fields.city,
                state: stadium.fields.state
            };
        });
    }

    componentDidMount() {
        this.getNflStadiums();
    }

    render() {
        return (
            <ReactTable data={this.state.stadiums} columns={this.state.columns} />
        )
    }
}

import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
const axios = require('axios');

class Stadiums extends React.Component {
    state = {
        stadiums: []
    }

    getStadiums() {
        debugger;
        axios.get('/stadium')
            .then((response) => {
                this.setState({stadiums: response.data});
            });
    }

    componentDidMount() {
        this.getStadiums();
    }

    render() {
        return (
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Stadium Name:</TableCell>
                        <TableCell>Visit Date:</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.state.stadiums.map(stadium => {
                        return (
                            <TableRow>
                                <TableCell>{stadium.stadiumName}</TableCell>
                                <TableCell>{new Date(stadium.visitDate).toLocaleDateString()}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        )
    }
}

export default Stadiums; 
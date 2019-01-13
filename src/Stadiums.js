import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class Stadiums extends React.Component {
    getStadiums() {

    }

    render() {
        const rows = this.getStadiums();
        return (
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Stadium Name:</TableCell>
                        <TableCell>Visit Date:</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => {
                        return (
                            <TableRow>
                                <TableCell>row.stadiumName</TableCell>
                                <TableCell>row.dateVisited</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        )
    }
}

export default Stadiums; 
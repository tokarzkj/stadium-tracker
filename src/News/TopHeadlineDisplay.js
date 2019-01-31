import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export class TopHeadlineDisplay extends React.Component {
    render() {
        return (
            <Paper>
                <Typography variant="h3">
                    {this.props.title}
                </Typography>
                <Typography variant="h5">
                    {this.props.author}
                </Typography>
            </Paper>
        )
    }
}
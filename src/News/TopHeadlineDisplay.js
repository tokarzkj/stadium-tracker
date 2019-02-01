import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export class TopHeadlineDisplay extends React.Component {
    render() {
        return (
            <a href={this.props.articleUrl} target='_blank' rel="noopener noreferrer" className='article-link'>
                <Paper>
                    <Typography variant="h3">
                        {this.props.title}
                    </Typography>
                    <Typography variant="h5">
                        {this.props.author}
                    </Typography>
                    <img src={this.props.imageUrl} alt="Article" className="article-image" />
                    <Typography>
                        {this.props.description}
                    </Typography>
                </Paper>
            </a>
        )
    }
}
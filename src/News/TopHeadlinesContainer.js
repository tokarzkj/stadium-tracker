import React from 'react';
import { GetTopHeadlinesFromEspn } from './espn';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { TopHeadlines } from './TopHeadlines';

export class TopHeadlinesContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            articles: null
        }

        this.updateSearch = this.updateSearch.bind(this);
        this.getArticles = this.getArticles.bind(this);
    }

    componentDidMount() {
        this.getArticles();
    }

    getArticles() {
        GetTopHeadlinesFromEspn(this.state.searchTerm)
        .then(response => response.json())
        .then(data => {
            this.setState({
                articles: data.articles
            });
        });
    }

    updateSearch(event) {
        this.setState({
            searchTerm: event.target.value
        });
    }

    render() {
        if (this.state.articles) {
            return ( 
                <div>
                    <Grid container>
                        <Grid item sm={4}></Grid>
                        <Grid item sm={4}>
                            <TextField
                                id="standard-search"
                                label="Search field"
                                type="search"
                                onChange={this.updateSearch}
                                className='search-bar'
                                margin="normal"
                            />
                        </Grid>
                        <Grid item sm={1} className='centered'>
                            <Button variant='contained' onClick={this.getArticles}>Search</Button>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <TopHeadlines articles={this.state.articles} />
                    </Grid>
                    <span>*Data provided from <a href="https://newsapi.org">News Api</a></span>
                </div>
            )
        }

        return null;
    }
}
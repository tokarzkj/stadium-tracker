import { connect } from 'react-redux';
import { TopHeadlines } from './TopHeadlines';
import { addRecentlyViewedArticle } from '../store/actions';

const mapDispatchToProps = dispatch => ({
    recentlyViewedArticles: article => dispatch(addRecentlyViewedArticle(article))
});

export default connect(
    null,
    mapDispatchToProps,

)(TopHeadlines);
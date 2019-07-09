import React from 'react';
import { connect } from 'react-redux';

import ArticlesWrapper from '../../components/ArticlesWrapper';
// import { getArticlesByPageStart } from '../../store/actions'

import articles  from '../../db/articles.json';

const ArticlesContainer = (props) => <ArticlesWrapper {...props} />;

// const mapDispatchToProps = (dispatch) => ({
//   getArticlesByPageStart: (articlePaginate) => dispatch(getArticlesByPageStart(articlePaginate)),
// })

const mapStateToProps = (store) => ({
    articlePaginate: articles,
  })

export default connect(mapStateToProps, null)(ArticlesContainer);
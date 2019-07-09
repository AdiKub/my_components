import React from 'react';
import { connect } from 'react-redux';

import ArticleAside from '../../components/ArticleAside';

import articles  from '../../db/articles.json';

const ArticleAsideContainer = (props) => <ArticleAside {...props} />;


const mapStateToProps = (store) => ({
  articlePaginate: articles,
  })

export default connect(mapStateToProps, null)(ArticleAsideContainer);
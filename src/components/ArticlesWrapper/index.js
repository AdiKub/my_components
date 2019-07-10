import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import Article from '../Article'
import ArticleAsideContainer from '../../containers/ArticleAside'
import './articlesWrapper.scss';

const ArticlesWrapper = (props) => {
  const {  articlePaginate } = props;

  return (
    <div className='articles-wrapper'>
      <div className='container'>
        <div className='articles-wrapper-main-content'>
          <div className='articles-wrapper-list'>
            {articlePaginate.slice(0, 3).map(articlePaginate => (
              <Article 
                articlePaginate={articlePaginate}
                key={articlePaginate._id}/>
            ))}
            <div className="pages-numbers">
              {[1, 2, 3, 4, 5, 6, 7].map(page => (
                <button
                  key={page}
                  value={page}
                  className="pages-numbers__button">
                  {page}
                </button>
              ))}
              <button
                className="pages-numbers__button">
                Next
                <FontAwesomeIcon
                  className='pages-numbers__button__icon'
                  icon={faAngleRight} />
              </button>
            </div>
          </div>
          <div className='articles-wrapper-aside'>
            <ArticleAsideContainer />
          </div>
        </div>
      </div>
    </div>
)}

export default ArticlesWrapper;
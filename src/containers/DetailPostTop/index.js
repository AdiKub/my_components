// @flow
import React from 'react';
import { connect } from 'react-redux';

import DetailPostTop from '../../components/DetailPostTop';
//import { fromArticles } from '../../store/selectors';

import categories  from '../../db/categories.json';
import places  from '../../db/places.json';

const DetailPostTopContainer = (props) => <DetailPostTop {...props} />;

const mapStateToProps = (store) => ({
  // articlePaginate: fromArticles.getState(store).articlePaginate,
  // placeDetail: fromArticles.getState(store).placeDetail,
  places: places,
  categories: categories
  })
  
export default connect(mapStateToProps, null)(DetailPostTopContainer);
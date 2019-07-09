import React from 'react';
import { connect } from 'react-redux';

import Places from '../../components/Places';
//import {getPlacesStart} from '../../store/actions';

import categories  from '../../db/categories.json';
import places  from '../../db/places.json';

const PlacesContainer = (props) => <Places {...props} />;

const mapStateToProps = (store) => ({
    places: places,
    categories: categories
  })

// const mapDispatchToProps = (dispatch) => ({
//   getPlacesStart: (requestParams='') => dispatch(getPlacesStart(requestParams)),
// })

export default connect(mapStateToProps, null)(PlacesContainer)
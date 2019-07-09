import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { withRouter } from "react-router";
import { formValueSelector } from 'redux-form'

import PlacesFilterForm from '../../components/PlacesFilterForm';
//import {getPlacesStart} from '../../store/actions';

import categories  from '../../db/categories.json';
import cities  from '../../db/cities.json';
import places  from '../../db/places.json';

const formConfig = {
    form: 'PlacesFilterForm',
}
const selector = formValueSelector('PlacesFilterForm')

const mapStateToProps = (store) => ({
    places: places,
    cities: cities,
    categories: categories,
    myValues: selector(store, 'keywords', 'location', 'categoriesForm')
})
// const mapDispatchToProps = (dispatch) => ({
//     changeFormValue: (field, value) => dispatch(change('PlacesFilterForm', field, value)),
//     getPlacesStart: (requestParams='') => dispatch(getPlacesStart(requestParams)),
// })
const PlacesFilterFormContainer = (props) => <PlacesFilterForm {...props} />;
export default connect(mapStateToProps, null)(reduxForm(formConfig)(withRouter(PlacesFilterFormContainer)));
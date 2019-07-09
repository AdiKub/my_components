import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import ListingForm from '../../components/ListingForm';
import { createListingStart } from '../../store/listing/actions';
import { createValidator, email, required } from '../../services/validations';

import categories  from '../../db/categories.json';
import cities  from '../../db/cities.json';


const validate = createValidator({
   name: [required],
   email: [required, email],
   categoriesId: [required],
   address: [required],
   citiesId: [required],
   phone: [required],
   segmentation: [required],
   minPrice: [required],
   maxPrice: [required],
   website: [required],
});
// was set default 
const mapStateToProps = (store) => ({
    categories: categories,
    cities: cities,
})
const formConfig = {
    form: 'ListingForm',
    validate
}

const ListingFormContainer = (props) => <ListingForm {...props} />;
const mapDispatchToProps = (dispatch) => ({
    createListingStart: (formValues) => dispatch(createListingStart(formValues)),
}) 
export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(formConfig)(ListingFormContainer));
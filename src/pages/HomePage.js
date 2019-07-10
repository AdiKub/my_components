import React, { Fragment } from 'react'
import PlacesFilterFormContainer from '../containers/PlacesFilterForm';
import PlacesContainer from '../containers/Places'
import ListingFormContainer from '../containers/ListingForm';
import PagesTopTitle from '../components/PagesTopTitle';
import ArticlesContainer from '../containers/Articles';
import DetailPostTopContainer from '../containers/DetailPostTop'
import "../assets/styles/main.scss";

function Home() {
  return (
    <Fragment>
    <DetailPostTopContainer />
      <PlacesContainer />
      <ArticlesContainer />
      <PagesTopTitle 
        title='Search'
        link={['HOME', 'search']}/>
      <PlacesFilterFormContainer />
      <PagesTopTitle 
        title='Add Listing'
        link={['HOME', 'add listing']}/>
      <ListingFormContainer />
    </Fragment>
  )
}

export default Home;

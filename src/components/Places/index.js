import { useEffect } from 'react';
import React from 'react'
import PlaceCard from '../PlaceCard';
import SectionTitle from '../SectionTitle';
import './places.scss'

const Places = props => {

  const { places, getPlacesStart } = props;
  
  useEffect(() => {
    getPlacesStart('isOpen=true&_limit=8')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getPlacesStart]);

    return (
    <section className='section-places'>
      <div className='container' >
        <SectionTitle
          name="Popular Thing To Do"
          text="popular exclusive listings in our directory"
        />
        <div className='places-tags-wrapper'>
          <button
            className='places__tag'
            id='all'>
            All
          </button>
          <button
            className='places__tag'>
            Hotel
          </button>
          <button
            className='places__tag'>
            Restaurant
          </button>
          <button
            className='places__tag'> 
            Cafe
          </button>
          <button
            className='places__tag'>
            Night Club
          </button>
          <button
           className='places__tag'>
            Guest House
          </button>
          <button
            className='places__tag'>
            Hostel
          </button>
        </div>
        <div
          className='place-cards-wrapper'>
          {places.places.slice(0, 8).map(placeObj => {
            return (
              <PlaceCard
                key={placeObj._id}
                place={placeObj}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Places;
import React from 'react'
import PlaceCard from '../PlaceCard';
import SectionTitle from '../SectionTitle';
import './places.scss'

const Places = props => {
  const { places, categories } = props;

    return (
    <div className='places'>
      <div className='container' >
        <SectionTitle
          name="Popular Thing To Do"
          text="popular exclusive listings in our directory"/>
        <div className='places-tags-wrapper'>
          {categories.map(tag=>(
            <button
            key={tag.name}
            className='places__tag'
            id={tag.name}>
            {tag.name}
          </button>
          ))}
        </div>
        <div
          className='places-cards-wrapper'>
          {places.slice(0, 8).map(placeObj => {
            return (
              <PlaceCard
                key={placeObj._id}
                place={placeObj}/>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Places;
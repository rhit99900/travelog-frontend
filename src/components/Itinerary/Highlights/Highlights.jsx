import React from 'react'

import '../../../pages/User/Itinerary/Itinerary.css'

import HighlightItem from './HighlightItem'
import HighlightMore from './HighlightMore'

const ItineraryHighlights = () => {
  return (
    <div className="itineraryHighlightsContainer ion-text-center">
      <HighlightItem/>
      <HighlightItem/>
      <HighlightItem/>
      <HighlightMore count={40}/>
    </div>
  )
}

export default ItineraryHighlights;
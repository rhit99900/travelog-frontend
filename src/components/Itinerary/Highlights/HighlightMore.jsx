import React from 'react'

const HightlightMore = ({count}) => {
  return (
    <div className="itineraryHighlightsItem">
      <div className="itineraryHighlightsButton">
        +{count}
      </div>      
    </div>
  )
}

export default HightlightMore
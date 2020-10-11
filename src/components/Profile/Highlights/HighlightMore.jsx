import React from 'react'

const HightlightMore = ({count}) => {
  return (
    <div className="profileHighlightsItem">
      <div className="profileHighlightsButton">
        +{count}
      </div>      
    </div>
  )
}

export default HightlightMore
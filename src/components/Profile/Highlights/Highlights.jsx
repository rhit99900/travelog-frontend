import React from 'react'

import '../../../pages/User/Profile/Profile.css'

import HighlightItem from './HighlightItem'
import HighlightMore from './HighlightMore'

const ProfileHighlights = () => {
  return (
    <div className="profileHighlightsContainer">
      <HighlightItem/>
      <HighlightItem/>
      <HighlightItem/>
      <HighlightMore count={3}/>
    </div>
  )
}

export default ProfileHighlights;
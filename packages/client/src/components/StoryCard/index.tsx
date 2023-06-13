import React from 'react'

export const StoryCard = ({children}) => {
  return (
    <div className='bg-white border rounded-lg drop-shadow-lg'>
      {children}
      Some story
    </div>
  )
}

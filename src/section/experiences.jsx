import React from 'react'
import Timeline from '../component/timeline'
import { experiences } from '../constants'
const Experiences = () => {
  return (
    <div className='w-full '>
      <Timeline data={experiences} />
    </div>
  )
}

export default Experiences
import { JellyTriangle } from '@uiball/loaders'
import React from 'react'

const Loading = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
        <JellyTriangle color='#627EEA' size={40} />
    </div>
  )
}

export default Loading
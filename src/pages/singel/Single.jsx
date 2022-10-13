import './single.css'
import Sidebar from '../../component/sidebar/Sidebar'

import React from 'react'
import SinglePost from '../../component/singlePost/SinglePost'

export default function Single() {
  return (
    <div className='single'>
        <SinglePost/>
        <Sidebar/>
    </div>
  )
}

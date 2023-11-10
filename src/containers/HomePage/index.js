'use client'

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import PostItem from './PostItem'

function HomePage({ posts }) {

  return (
    <div className='grid grid-cols-2 gap-4 pb-10'>
      {posts.map(post => <PostItem key={post._id} item={post} />)}
    </div>
  )
}

HomePage.propTypes = {
  posts: PropTypes.array
}

export default HomePage

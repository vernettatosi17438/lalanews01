'use client'

import React from 'react'
import PropTypes from 'prop-types'
import { format } from 'date-fns'
import PostContent from '@/components/post-content'

function PostPage({ post }) {
  return (
    <div className='prose !max-w-full pb-10'>
      <div>
        {/* <div className='flex flex-wrap text-xs mt-2 gap-2'>
          {post.categories.map((category) => (
            <span key={category._id} className='text-xs text-blue-600 hover:underline'>{category.name}</span>
          ))}
        </div> */}
        <h1 className='text-3xl font-normal text-black mb-1'>{post.title}</h1>
        <p className='mt-0 pt-0'>{format(new Date(post.createdAt), 'MMM d, yyyy hh:mm aaa')}</p>
      </div>
      {/* <PostContent html={post.content} /> */}
    </div>
  )
}

PostPage.propTypes = {
  post: PropTypes.object.isRequired,
}

export default PostPage

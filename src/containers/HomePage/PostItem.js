/* eslint-disable @next/next/no-img-element */
import React from 'react'
import PropTypes from 'prop-types'
import { format } from 'date-fns'

function PostItem({ item }) {
  return (
    <div className='col-span-1'>
      <div className='h-0 relative pb-[56.25%]'>
        <a href={`/post/${item.slug}`}>
          <img src={item.featured_image} alt={item.title} className='absolute w-full h-full object-cover' />
        </a>
      </div>
      <a href={`/post/${item.slug}`} className='font-semibold mt-2 block'>{item.title}</a>
      <p className='text-sm text-gray-500'>{format(new Date(item.createdAt), "yyyy/MM/dd HH:mm")}</p>
      <div className='flex flex-wrap text-xs mt-2 gap-2'>
        {item.categories.map((category) => (
          <span key={category._id} className='text-xs text-blue-600 hover:underline'>{category.name}</span>
        ))}
      </div>
    </div>
  )
}

PostItem.propTypes = {
  item: PropTypes.object
}

export default PostItem

import React from 'react'
import PropTypes from 'prop-types'
import { getPosts } from '@/api'
import HomePage from '@/containers/HomePage'

function Index({ posts }) {
  return (
    <div>
      <HomePage posts={posts} />
    </div>
  )
}

Index.propTypes = {}

export const getStaticProps = async () => {
  const posts = await getPosts()

  return {
    props: {
      posts: posts
    },
    revalidate: 900,
  }
}

export default Index

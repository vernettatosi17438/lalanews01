import React from 'react'
import PropTypes from 'prop-types'
import { getPost, getPosts } from '@/api'
import PostPage from '@/containers/PostPage'

function post({ post }) {
  return (
    <PostPage post={post} />
  )
}

post.propTypes = {}

export const getServerSideProps = async (ctx) => {
  const { req, res } = ctx;
  const slug = ctx.params.slug

  res.setHeader('Content-Type', 'text/html');

  const post = await getPost(slug)
  if(!post) {
    return {
      notFound: true
    }
  }

  res.end(`
    <meta property="og:image" content="${post.featured_image}" />
    <meta property="og:title" content="${post.title.replaceAll('"', '&quot;')}" />
    <meta property="og:type" content="article" />
    <meta property="og:description" content="${post.title}" />
    <meta property="og:url" content="${encodeURIComponent(slug)}" />
    <script>window.location.href = "${process.env.APP_URL}/${encodeURIComponent(slug)}"</script>

    <p>Redirecting...</p>
    <a href="${process.env.APP_URL}/${encodeURIComponent(slug)}">Click here if you are not redirect</a>
  `)

  return {
    props: {
      post: {}
    }
  }
}

export default post

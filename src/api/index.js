export async function getPost(slug) {
  const res = await fetch(`${process.env.API_URL}/client/posts/${slug}`, {
    next: {
      revalidate: 900
    }
  })
  const post = await res.json()
  return post.payload
}

export async function getPublishAds() {
  const res = await fetch(`${process.env.API_URL}/client/ads`, {
    next: {
      revalidate: 900
    }
  })
  const response = await res.json()
  return response.payload
}

export async function getPosts() {
  const res = await fetch(`${process.env.API_URL}/client/posts?page=1&limit=10`, {
    next: {
      revalidate: 900
    }
  })
  const posts = await res.json()
  return posts.payload.edges
}
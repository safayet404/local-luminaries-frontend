import React from 'react'
import CommonBanner from '../components/CommonBanner'
import Blog from '../components/Blog'

const BlogPage = () => {
  return (
    <div>
        <CommonBanner title="Blog Page" subTitle="Home | Blog" />
        <Blog/>
    </div>
  )
}

export default BlogPage
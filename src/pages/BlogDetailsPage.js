import React from 'react'
import CommonBanner from '../components/CommonBanner'
import BlogDetails from '../components/BlogDetails'

const BlogDetailsPage = () => {
  return (
    <div>
        <CommonBanner title="Blog Details" subTitle="Home | Blog Details" />
        <BlogDetails/>
    </div>
  )
}

export default BlogDetailsPage
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getBlogById } from '../api/blogApi'

const BlogDetail = () => {
  const { id } = useParams()
  const [blog, setBlog] = useState(null)
  useEffect(() => {
    getBlogById(Number(id)).then((data) => setBlog(data))
  }, [id])

  if (!blog) return <p>Loading...</p>
  return (
    <div className="p-6 dark:text-dark-text-color">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-500 mb-4">
        {blog.author} • {blog.date}
      </p>
      <p dangerouslySetInnerHTML={{ __html: blog.content }}></p>
    </div>
  )
}

export default BlogDetail

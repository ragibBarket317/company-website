import React, { useEffect, useState } from 'react'
import { getBlogs } from '../api/blogApi'
import { useNavigate } from 'react-router'

const Blog = () => {
  const [blogs, setBlogs] = useState([])
  let navigate = useNavigate()

  useEffect(() => {
    getBlogs().then((data) => setBlogs(data))
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 dark:text-dark-text-color">
        Our Blog
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            onClick={() => navigate(`/blog/${blog.id}`)}
            className="p-4 border rounded-lg dark:bg-dark-card-color dark:text-dark-text-color shadow-lg cursor-pointer transition hover:scale-102
           bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200
           dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-600 dark:to-gray-900
           "
          >
            <h2 className="text-xl font-semibold">{blog.title}</h2>
            <p className="">{blog.excerpt}</p>
            <span className="text-sm">
              {blog.author} • {blog.date}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog

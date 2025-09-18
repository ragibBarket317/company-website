import axios from './axiosConfig'
import { fetchLocalData } from '../utils/fetchLocalData'

// Switch flag: if API available, toggle this
const USE_LOCAL = true

export async function getBlogs() {
  if (USE_LOCAL) {
    return await fetchLocalData('blogData.json')
  } else {
    const res = await axios.get('/blogs')
    return res.data
  }
}

export async function getBlogById(id) {
  if (USE_LOCAL) {
    const blogs = await fetchLocalData('blogDetailsData.json')
    return blogs.find((b) => b.id === id)
  } else {
    const res = await axios.get(`/blogs/${id}`)
    return res.data
  }
}

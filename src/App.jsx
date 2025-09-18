import { Routes, Route } from 'react-router-dom'
import Navbar from './components/reuseableComponents/Navbar'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Industries from './pages/Industries'
import Blog from './pages/Blog'
import BlogDetail from './pages/BlogDetail'
import Careers from './pages/Careers'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="flex flex-col min-h-screen dark:bg-dark-bg">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

import { Routes, Route } from 'react-router-dom'
import Navbar from './components/reuseableComponents/Navbar'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Industries from './pages/Industries'
import Blog from './pages/Blog'
import BlogDetail from './pages/BlogDetail'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import Footer from './components/reuseableComponents/Footer'
import MobileAppDevelopment from './pages/appDevelopmentService/MobileAppDevelopment'

function App() {
  return (
    <div className="flex flex-col min-h-screen dark:bg-dark-bg">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/services/mobile-app-development"
            element={<MobileAppDevelopment />}
          />
          <Route path="/industries" element={<Industries />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App

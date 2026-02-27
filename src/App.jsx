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
import SoftwareDevelopmentPage from './pages/SoftwareDevelopmentPage'
import WebDevelopmentPage from './pages/WebDevelopmentPage'
import AIDevelopmentPage from './pages/AIDevelopmentPage'
import Expertise from './pages/Expertise'
import Intexa from './pages/Intexa'
import Legal from './pages/Legal'
import Impact from './pages/Impact'
import Whitepaper from './pages/Whitepaper'
import ScrollToTop from './components/reuseableComponents/ScrollToTop'
import HashLocation from './components/reuseableComponents/HashLocation'
import Governance from './pages/Governance'
import Compliance from './pages/Compliance'

function App() {
  return (
    <div className="overflow-x-hidden flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <ScrollToTop />
        <HashLocation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/intexa" element={<Intexa />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/technical-whitepaper" element={<Whitepaper />} />
          <Route path="/corporate-governance" element={<Governance />} />
          <Route path="/compliance" element={<Compliance />} />
          {/* <Route
            path="/services/mobile-app-development"
            element={<MobileAppDevelopment />}
          />
          <Route
            path="/services/software-development"
            element={<SoftwareDevelopmentPage />}
          />
          <Route
            path="/services/web-development"
            element={<WebDevelopmentPage />}
          />
          <Route
            path="/services/ai-development"
            element={<AIDevelopmentPage />}
          />

          <Route path="/industries" element={<Industries />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} /> */}
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App

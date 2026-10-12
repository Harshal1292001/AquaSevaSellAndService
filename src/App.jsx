import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import FloatingActions from './components/FloatingActions.jsx';
import MobileBar from './components/MobileBar.jsx';
import CookieNotice from './components/CookieNotice.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Home from './pages/Home.jsx';

// Pages other than Home are split into their own chunks.
const About = lazy(() => import('./pages/About.jsx'));
const Service = lazy(() => import('./pages/Service.jsx'));
const Tools = lazy(() => import('./pages/Tools.jsx'));
const Blog = lazy(() => import('./pages/Blog.jsx'));
const BlogPost = lazy(() => import('./pages/BlogPost.jsx'));
const Enquiry = lazy(() => import('./pages/Enquiry.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

const Loading = () => (
  <div className="route-loading" role="status" aria-label="Loading">
    <span className="spinner-border text-primary"></span>
  </div>
);

export default function App() {
  return (
    <>
      <ScrollToTop />
      <a href="#main" className="skip-link">Skip to content</a>
      <TopBar />
      <Header />
      <main id="main">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/enquiry" element={<Enquiry />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <FloatingActions />
      <MobileBar />
      <CookieNotice />
    </>
  );
}

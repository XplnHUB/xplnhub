import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Community from './pages/Community';
import Contributors from './pages/Contributors';
import Join from './pages/Join';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home key="home" onNavigate={setCurrentPage} />;
      case 'about':
        return <About key="about" />;
      case 'projects':
        return <Projects key="projects" />;
      case 'community':
        return <Community key="community" />;
      case 'contributors':
        return <Contributors key="contributors" />;
      case 'join':
        return <Join key="join" />;
      case 'contact':
        return <Contact key="contact" />;
      default:
        return <Home key="home" onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.3 }}
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default App;

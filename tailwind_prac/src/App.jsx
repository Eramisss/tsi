import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Button from './components/ui/Button';
import About from './pages/About';
import Blog from './pages/Blog';
import Products from './pages/Products';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <BrowserRouter>
        <Header />
        <main className="flex-grow container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
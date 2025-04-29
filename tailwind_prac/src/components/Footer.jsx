import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 shadow-inner mt-auto">
      <div className="container mx-auto py-8 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="mb-4">Example.</p>
            <p>© 2025 Eramisss. All rights reserved.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white transition duration-300">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition duration-300">About</Link></li>
              <li><Link to="/blog" className="hover:text-white transition duration-300">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>Email: zedicklol239@gmail.com</li>
              <li>Phone: +79999999999</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
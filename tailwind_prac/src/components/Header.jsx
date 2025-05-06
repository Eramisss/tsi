import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto py-4 px-6">
        <div className="flex justify-between items-center">
          <nav className="flex space-x-6">
            <Link to="/" className="font-medium hover:text-yellow-200 transition duration-300 ease-in-out">
              Home
            </Link>
            <Link to="/about" className="font-medium hover:text-yellow-200 transition duration-300 ease-in-out">
              About
            </Link>
            <Link to="/blog" className="font-medium hover:text-yellow-200 transition duration-300 ease-in-out">
              Blog
            </Link>
            <Link to="/products" className="font-medium hover:text-yellow-200 transition duration-300 ease-in-out">
             Товары
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
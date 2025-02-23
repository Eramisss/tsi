import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/about" className="hover:text-gray-300">About</Link>
        <Link to="/blog" className="hover:text-gray-300">Blog</Link>
      </div>
    </header>
  );
}

export default Header;
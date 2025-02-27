import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-700 text-white font-semibold py-4 px-6 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold tracking-wide">
          Study<span className="text-yellow-300">Notion</span>
        </h1>

        {/* Navigation Links */}
        <div className="space-x-6 text-lg">
          <Link to="/" className="hover:text-yellow-300 transition duration-300">
            Home
          </Link>
          <Link to="/login" className="hover:text-yellow-300 transition duration-300">
            Login
          </Link>
          <Link to="/register" className="hover:text-yellow-300 transition duration-300">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

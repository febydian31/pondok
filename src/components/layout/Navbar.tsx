import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Profile', path: '/profile' },
    { title: 'Artikel', path: '/articles' },
    { title: 'Kegiatan', path: '/kegiatan' },
    { title: 'Prestasi', path: '/prestasi' },
    { title: 'Donatur', path: '/donor' },
    { title: 'Pendaftaran', path: '/registration' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            {/* <BookOpen className="h-8 w-8 text-primary-700" /> */}
            <img className='w-12 y-12 rounded-full bg-white' src={logo} alt="logo" />
            <span className="ml-2 text-xl font-heading font-bold text-primary-800">
            Pondok Pesantren Zuhriyah
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors duration-300 font-medium hover:text-primary-600 ${
                  isActive(link.path)
                    ? 'text-primary-700 border-b-2 border-primary-500'
                    : scrolled
                    ? 'text-gray-700'
                    : 'text-gray-800'
                }`}
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`py-2 px-4 ${
                  isActive(link.path)
                    ? 'text-primary-700 bg-primary-50 font-semibold'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
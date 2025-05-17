import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { 
  Phone, 
  Mail, 
  MapPin,
  Box, 
  // Facebook, 
  // Twitter, 
  // Instagram, 
  // Youtube 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center mb-4">
              {/* <BookOpen className="h-8 w-8 text-secondary-400" /> */}
              <img className='w-12 y-12 rounded-full bg-white' src={logo} alt="logo" />
              <h3 className="ml-2 text-xl font-heading font-bold">
              Pondok Pesantren Zuhriyah 
              </h3>
            </div>
            <p className="text-gray-300 mb-4">
            SK Menkumham RI No: AHU-0012559. AH.01.04 Tahun 2018 No.2 Tgl. 07 September 2018 NSP: 510034041047 IJOP No.24925/2022
            </p>
            {/* <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-secondary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-primary-700 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-secondary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-gray-300 hover:text-secondary-400 transition-colors">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/articles" className="text-gray-300 hover:text-secondary-400 transition-colors">
                  Artikel
                </Link>
              </li>
              <li>
                <Link to="/donor" className="text-gray-300 hover:text-secondary-400 transition-colors">
                  Donatur
                </Link>
              </li>
              <li>
                <Link to="/registration" className="text-gray-300 hover:text-secondary-400 transition-colors">
                  Pendaftaran
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-primary-700 pb-2">
              Donasi
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Box className="h-5 w-5 text-secondary-400 mt-0.5 mr-2" />
                <span className="text-gray-300">BRI</span><br />
                <span className="text-gray-300 ml-4">No. Rekening: 105601004767509
                a/n Muhammad Adam Ilhami</span>
              </li>
              <li className="flex items-start">
                <Box className="h-5 w-5 text-secondary-400 mt-0.5 mr-2" />
                <span className="text-gray-300">BPD DIY</span>
                <span className="text-gray-300 ml-4"> No. Rekening: 005221039170
                a/n Muhammad Adam Ilhami</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-primary-700 pb-2">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-secondary-400 mt-0.5 mr-2" />
                <span className="text-gray-300">
                Rejodani I RT/RW 03/02 Sariharjo ngaglik
                Sleman Yogyakrta
                </span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-secondary-400 mt-0.5 mr-2" />
                <span className="text-gray-300">0811 1600 17 (Gus Adam) /  0812 2626 7274 (Ning)</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-secondary-400 mt-0.5 mr-2" />
                <span className="text-gray-300"> pp.zuhriyah@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-700 mt-8 pt-6 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} pondok pesantren zuhriyah
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
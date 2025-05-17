import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import myImage from '../../assets/gambar-3.jpg';

const HeroSection = () => {
  return (
    <section className="relative pt-20 pb-20 md:pt-24 md:pb-32 overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-10 bg-repeat" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230F766E' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="container mx-auto px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-xl pl-8 text-primary-700 font-medium mb-2">Selamat Datang di</h2>
            <h1 className="text-4xl pl-8 md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-6">
            Pondok Pesantren Zuhriyah
            </h1>
            <div className="flex flex-wrap pl-8 gap-4">
              <Link 
                to="/registration" 
                className="bg-primary-700 hover:bg-primary-800 text-white font-medium px-6 py-3 rounded-md transition-colors flex items-center"
              >
                Daftar
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img 
                // src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4nocjy-yzvNvlnSHmKYTGPJXZ4397AoIPtw50WPP_KhKyEvGOGSmP40YEI7wty7vw_Lhbdc7JNR7RyP-FsxDUsSfBoDQakQe_YEwJsTjJ4C7hrCGlgrGj86E94878zGVijWOx_7Dbj0viT49=s1360-w1360-h1020" 
                src={myImage}
                alt="Pondok Pesantren Zuhriyah" 
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-900/30 to-transparent pointer-events-none"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary-400 rounded-full opacity-80 z-0"></div>
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-primary-500 rounded-full opacity-70 z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
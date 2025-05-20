import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Prestasi } from '../../types';

interface PrestasiCardProps {
    prestasi: Prestasi;
}

const PrestasiCard = ({ prestasi }: PrestasiCardProps) => {
  return (
      

    <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 overflow-hidden">
        <img 
          src={prestasi.image} 
          alt={prestasi.title} 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-3">
          <span className="text-xs font-medium text-gray-500">{prestasi.date}</span>
          <span className="mx-2 text-gray-300">•</span>
          {/* <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary-100 text-primary-700">
            {kegiatan.category}
          </span> */}
        </div>
        <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
          {prestasi.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {prestasi.excerpt}
        </p>
        <Link 
          to={`/prestasis/${prestasi.id}`} 
          className="inline-flex items-center text-primary-700 hover:text-primary-800 font-medium"
        >
          Read More
          <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>

  );
};

export default PrestasiCard;
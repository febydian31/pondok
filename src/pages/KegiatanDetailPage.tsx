import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Calendar, User, Clock, Share2 } from 'lucide-react';
import { kegiatans } from '../data/kegiatansData';
import { Kegiatan } from '../types';

const ArticleDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [kegiatan, setKegiatan] = useState<Kegiatan | null>(null);
  const [relatedKegiatans, setRelatedKegiatans] = useState<Kegiatan[]>([]);

  useEffect(() => {
    // Find the article with the matching ID
    const foundKegiatan = kegiatans.find((a) => a.id === id);
    
    if (foundKegiatan) {
        setKegiatan(foundKegiatan);
      
      // Find related articles in the same category
      const related = kegiatans
        .filter((a) => a.category === foundKegiatan.category && a.id !== id)
        .slice(0, 3);
      
      setRelatedKegiatans(related);
    }
    
    // Scroll to top when article changes
    window.scrollTo(0, 0);
  }, [id]);

  if (!kegiatan) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-4">Kegiatan tidak ditemukan</p>
          <Link 
            to="/kegiatans" 
            className="inline-flex items-center text-primary-700 hover:text-primary-800 font-medium"
          >
            <ChevronLeft size={16} className="mr-1" /> Kembali ke Kegiatan
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 md:pt-20">
      {/* Article Header */}
      <div className="bg-gray-900 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <Link 
            to="/kegiatans" 
            className="inline-flex items-center text-primary-100 hover:text-white mb-6 transition-colors"
          >
            <ChevronLeft size={16} className="mr-1" /> Kembali ke Kegiatan
          </Link>
          
          <h1 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            {kegiatan.title}
          </h1>
          
          <div className="flex flex-wrap items-center text-gray-300 text-sm md:text-base gap-4 md:gap-6">
            <div className="flex items-center">
              <Calendar size={16} className="mr-2" />
              <span>{kegiatan.date}</span>
            </div>
            <div className="flex items-center">
              <User size={16} className="mr-2" />
              <span>{kegiatan.author}</span>
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-2" />
              <span>{kegiatan.readTime} min read</span>
            </div>
            <div className="inline-block px-3 py-1 rounded-full bg-primary-700 text-white">
              {kegiatan.category}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Featured Image */}
            <div className="rounded-xl overflow-hidden mb-8">
              <img 
                src={kegiatan.image} 
                alt={kegiatan.title} 
                className="w-full h-auto"
              />
            </div>
            
            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl leading-relaxed text-gray-700 font-medium mb-6">
                {kegiatan.excerpt}
              </p>
              
            </div>
            
            {/* Share Options */}
            <div className="border-t border-gray-200 mt-10 pt-6">
              <div className="flex items-center">
                {/* <span className="text-gray-700 font-medium mr-4">Share this article:</span> */}
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-500 hover:text-primary-700 transition-colors">
                    <Share2 size={20} />
                  </a>
                  {/* More share icons could be added here */}
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Author Info */}
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">
                About the Author
              </h3>
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://images.pexels.com/photos/7601367/pexels-photo-7601367.jpeg" 
                    alt={kegiatan.author}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{kegiatan.author}</h4>
                  <p className="text-gray-600 text-sm">Content Writer & Educator</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                {kegiatan.author} is an educator and writer with over 10 years of experience in 
                Islamic education. They are passionate about integrating traditional Islamic 
                knowledge with modern educational methods.
              </p>
            </div>
            
            {/* Related Articles */}
            <div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">
              Kegiatan terkait.
              </h3>
              <div className="space-y-6">
                {relatedKegiatans.map((related) => (
                  <div key={related.id} className="flex items-start">
                    <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0 mr-4">
                      <img 
                        src={related.image} 
                        alt={related.title}
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1 line-clamp-2">
                        <Link 
                          to={`/kegiatans/${related.id}`}
                          className="hover:text-primary-700 transition-colors"
                        >
                          {related.title}
                        </Link>
                      </h4>
                      <p className="text-gray-500 text-sm">{related.date}</p>
                    </div>
                  </div>
                ))}
                
                {relatedKegiatans.length === 0 && (
                  <p className="text-gray-500">Tidak ada Kegiatan terkait yang ditemukan.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailPage;
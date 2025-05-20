import { useState } from 'react';
import KegiatanCard from '../components/kegiatan/KegiatanCard';
import { kegiatans } from '../data/kegiatansData';
import { ArrowRight } from 'lucide-react';

const ARTICLES_PER_PAGE = 6;

const KegiatanPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  
  const filteredKegiatans = activeCategory && activeCategory !== 'All'
    ? kegiatans.filter(kegiatan => kegiatan.category === activeCategory)
    : kegiatans;

  const indexOfLastKegiatan = currentPage * ARTICLES_PER_PAGE;
  const indexOfFirstKegiatan = indexOfLastKegiatan - ARTICLES_PER_PAGE;
  const currentKegiatans = filteredKegiatans.slice(indexOfFirstKegiatan, indexOfLastKegiatan);

  const handleCategoryFilter = (category: string) => {
    setActiveCategory(category === 'All' ? null : category);
    setCurrentPage(1);
  };

  return (
    <div className="pt-16 md:pt-20">
      {/* Page Header */}
      <div className="bg-primary-900 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">  
          <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Kegiatan
          </h1>
            <p className="text-primary-100 max-w-3xl text-lg">
            Pondok Pesantren Zuhriyah melaksanakan berbagai kegiatan yang mendukung pembelajaran dan pengembangan spiritual santri, seperti pengajian, doa bersama, dan kegiatan sosial. Kegiatan ini bertujuan untuk memperkuat iman dan meningkatkan kualitas pendidikan di lingkungan pesantren
            </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Category Filters */}
        {/* <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                (category === 'All' && !activeCategory) || category === activeCategory
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div> */}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentKegiatans.map((kegiatan) => (
            <KegiatanCard key={kegiatan.id} kegiatan  ={kegiatan} />
          ))}
        </div>


        <a className="mt-4 flex items-center justify-center mt-5 text-primary-700 hover:text-primary-800 font-medium">
          Lihat Semua Kegiatan
          <ArrowRight size={18} className="ml-2" />
        </a>


        {/* Empty State */}
        {currentKegiatans.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg mb-4">tidak ada Kegiatan di temukan di kategori ini.</p>
            <button
              onClick={() => handleCategoryFilter('All')}
              className="px-4 py-2 bg-primary-600 text-white rounded-md"
            >
              Lihat Semua Kegiatan
            </button>
          </div>
        )}

        {/* Pagination */}
        {/* {filteredArticles.length > ARTICLES_PER_PAGE && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )} */}
      </div>
    </div>
  );
};

export default KegiatanPage;
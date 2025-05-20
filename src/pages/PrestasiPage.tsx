import { useState } from 'react';
import PrestasiCard from '../components/prestasi/PrestasiCard';
// import Pagination from '../components/articles/Pagination';
import { prestasis } from '../data/prestasiData';
import { ArrowRight } from 'lucide-react';

const ARTICLES_PER_PAGE = 6;

const PrestasiPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Get unique categories
  // const categories = ['All', ...new Set(kegiatans.map(kegiatan => kegiatan.category))];

  // Filter articles by category
  const filteredArticles = activeCategory && activeCategory !== 'All'
    ? prestasis.filter(prestasis => prestasis.category === activeCategory)
    : prestasis;

  // Calculate pagination
  // const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);
  const indexOfLastArticle = currentPage * ARTICLES_PER_PAGE;
  const indexOfFirstArticle = indexOfLastArticle - ARTICLES_PER_PAGE;
  const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);

  // const handlePageChange = (pageNumber: number) => {
  //   setCurrentPage(pageNumber);
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // };

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
            Prestasi
          </h1>
            <p className="text-primary-100 max-w-3xl text-lg">
            Prestasi yang ada di Pondok Pesantren Zuhriyah
            </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
       

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentArticles.map((prestasi) => (
            <PrestasiCard key={prestasi.id} prestasi  ={prestasi} />
          ))}
        </div>


        <a className="mt-4 flex items-center justify-center mt-5 text-primary-700 hover:text-primary-800 font-medium">
          Lihat Semua Prestasi
          <ArrowRight size={18} className="ml-2" />
        </a>


        {/* Empty State */}
        {currentArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg mb-4">tidak ada artikel di temukan di kategori ini.</p>
            <button
              onClick={() => handleCategoryFilter('All')}
              className="px-4 py-2 bg-primary-600 text-white rounded-md"
            >
              View All Articles
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

export default PrestasiPage;
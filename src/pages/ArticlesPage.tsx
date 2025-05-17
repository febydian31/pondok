import { useState } from 'react';
import ArticleCard from '../components/articles/ArticleCard';
import Pagination from '../components/articles/Pagination';
import { articles } from '../data/articlesData';

const ARTICLES_PER_PAGE = 6;

const ArticlesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Get unique categories
  const categories = ['All', ...new Set(articles.map(article => article.category))];

  // Filter articles by category
  const filteredArticles = activeCategory && activeCategory !== 'All'
    ? articles.filter(article => article.category === activeCategory)
    : articles;

  // Calculate pagination
  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);
  const indexOfLastArticle = currentPage * ARTICLES_PER_PAGE;
  const indexOfFirstArticle = indexOfLastArticle - ARTICLES_PER_PAGE;
  const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
            Artikel
          </h1>
          <p className="text-primary-100 max-w-3xl text-lg">
            Segala kegiatan yang ada di pondok pesantren Zuhriyah
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Category Filters */}
        <div className="mb-8 flex flex-wrap gap-2">
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
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

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
        {filteredArticles.length > ARTICLES_PER_PAGE && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
};

export default ArticlesPage;
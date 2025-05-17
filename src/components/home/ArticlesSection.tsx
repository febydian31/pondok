import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { articles } from '../../data/articlesData';

const ArticlesSection = () => {
  // Display only the latest 3 articles
  const latestArticles = articles.slice(0, 3);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 ml-5 sm:ml-0 mb-4">
              Artikel 
            </h2>
          </div>
          <Link 
            to="/articles" 
            className="mt-4 md:mt-0 inline-flex items-center text-primary-700 hover:text-primary-800 font-medium"
          >
            Lihat Semua Artikel
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="text-xs font-medium text-gray-500">{article.date}</span>
                  <span className="mx-2 text-gray-300">•</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <Link 
                  to={`/articles/${article.id}`} 
                  className="inline-flex items-center text-primary-700 hover:text-primary-800 font-medium"
                >
                  Read More
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
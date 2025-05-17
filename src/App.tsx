import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import ArticlesPage from './pages/ArticlesPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import DonorPage from './pages/DonorPage';
import RegistrationPage from './pages/RegistrationPage';
import ScrollToTop from './components/utils/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/articles/:id" element={<ArticleDetailPage />} />
          <Route path="/donor" element={<DonorPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
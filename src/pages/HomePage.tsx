import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import VideoSection from '../components/home/VideoSection';
import HistorySection from '../components/home/HistorySection';
import ArticlesSection from '../components/home/ArticlesSection';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <HistorySection />
      <ArticlesSection />
      <VideoSection />
      <StatsSection />
    </div>
  );
};

export default HomePage;
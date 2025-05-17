import VisionMission from '../components/profile/VisionMission';
// import HistoryDetail from '../components/profile/HistoryDetail';
import OrganizationStructure from '../components/profile/OrganizationStructure';

const ProfilePage = () => {
  return (
    <div className="pt-16 md:pt-20">
      {/* Page Header */}
      <div className="bg-primary-900 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">
          Pondok Pesantren Zuhriyah
          </h1>
          <p className="text-primary-100 max-w-3xl text-lg">
          Pelajari tentang sejarah, misi, visi, dan orang-orang berdedikasi yang menjadikan pesantren kami sebagai pusat keunggulan dalam pendidikan Islam.
          </p>
        </div>
      </div>

      <VisionMission />
      {/* <HistoryDetail /> */}
      <OrganizationStructure />
    </div>
  );
};

export default ProfilePage;
import { motion } from 'framer-motion';

const organizationData = [
  
  {
    name: 'Miftakhurrohmad Sidik Wahyudi',
    position: 'Ketua Yayasan',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nocjy-yzvNvlnSHmKYTGPJXZ4397AoIPtw50WPP_KhKyEvGOGSmP40YEI7wty7vw_Lhbdc7JNR7RyP-FsxDUsSfBoDQakQe_YEwJsTjJ4C7hrCGlgrGj86E94878zGVijWOx_7Dbj0viT49=s1360-w1360-h1020',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente culpa rerum beatae ipsum natus ut quae, doloremque a vitae impedit ipsa voluptas tempora ad iure iusto vero molestias nobis! Officia.',
  },
  {
    name: 'Shohiba Mazaya Mubaroka, S.H., M.Kn.',
    position: 'Pengasuh Pondok',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nocjy-yzvNvlnSHmKYTGPJXZ4397AoIPtw50WPP_KhKyEvGOGSmP40YEI7wty7vw_Lhbdc7JNR7RyP-FsxDUsSfBoDQakQe_YEwJsTjJ4C7hrCGlgrGj86E94878zGVijWOx_7Dbj0viT49=s1360-w1360-h1020',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente culpa rerum beatae ipsum natus ut quae, doloremque a vitae impedit ipsa voluptas tempora ad iure iusto vero molestias nobis! Officia.',
  },
  {
    name: 'H. Sulaiman Hamid',
    position: 'Kepala Panti Asuhan',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nocjy-yzvNvlnSHmKYTGPJXZ4397AoIPtw50WPP_KhKyEvGOGSmP40YEI7wty7vw_Lhbdc7JNR7RyP-FsxDUsSfBoDQakQe_YEwJsTjJ4C7hrCGlgrGj86E94878zGVijWOx_7Dbj0viT49=s1360-w1360-h1020',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente culpa rerum beatae ipsum natus ut quae, doloremque a vitae impedit ipsa voluptas tempora ad iure iusto vero molestias nobis! Officia.',
  },
];

const OrganizationStructure = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Pengurus Pondok Pesantren Zuhriah
          </h2>
        </div>

        {/* Leadership Grid */}
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {organizationData.map((person, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={person.image} 
                  alt={person.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-1">
                  {person.name}
                </h3>
                <p className="text-primary-700 font-medium mb-4">
                  {person.position}
                </p>
                <p className="text-gray-600">
                  {person.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Organization Chart */}
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-8 text-center">
            Struktur Organisasi
          </h3>
          
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 overflow-x-auto">
            <div className="min-w-[800px]">
              {/* Principal */}
              <div className="flex justify-center mb-8">
                <div className="bg-primary-100 border-2 border-primary-500 rounded-lg p-4 text-center w-64">
                  <h4 className="font-bold text-gray-900">Ketua Yayasan</h4>
                  <p className="text-primary-700">Miftakhurrohmad Sidik Wahyudi</p>
                </div>
              </div>
              
              {/* Vice Principals */}
              <div className="flex justify-center space-x-8 mb-8">
                <div className="bg-primary-50 border border-primary-300 rounded-lg p-4 text-center w-64">
                  <h4 className="font-bold text-gray-900">Pengasuh Pondok</h4>
                  <p className="text-primary-700">H. Muhammad Adam Ilhami, M.Pd.</p>
                </div>
                <div className="bg-primary-50 border border-primary-300 rounded-lg p-4 text-center w-64">
                  <h4 className="font-bold text-gray-900">Kepala Panti Asuhan</h4>
                  <p className="text-primary-700">Shohiba Mazaya Mubaroka, S.H., M.Kn.</p>
                </div>
              </div>
              
              {/* Department Heads */}
              <div className="flex justify-center space-x-6 mb-4">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center w-56">
                  <h4 className="font-bold text-gray-900">Staff & Tenaga Pengajar</h4>
                  <p className="text-gray-700">27 Orang</p>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center w-56">
                  <h4 className="font-bold text-gray-900">Santri dan Anak Asuh</h4>
                  <p className="text-gray-700">60 Orang</p>
                </div>
              </div>
              
              {/* Connecting lines using SVG */}
              <svg className="absolute left-0 right-0 w-full" style={{ height: 0 }}>
                {/* No SVG lines since they're not well-supported in this context */}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizationStructure;
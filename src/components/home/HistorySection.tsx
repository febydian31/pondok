import { motion } from 'framer-motion';
import gambar from '../../assets/gambar-5.jpg';

const HistorySection = () => {
  return (
    <section className="py-16 bg-primary-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src={gambar} 
                alt="Historic photo of Pesantren Al-Hikmah" 
                className="w-full h-auto"
              />
            </div>
            {/* Decorative border */}
            <div className="absolute -bottom-4 -right-4 h-full w-full border-4 border-primary-500 rounded-xl -z-10"></div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* <h2 className="text-xl text-primary-700 font-medium mb-2">Our Journey</h2> */}
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
            Profile Singkat
            </h3>
            <p className="text-gray-700 mb-6">
            Panti Asuhan dan pondok pesantren dengan sistem campuran salafiyah dan kholafiyah. Konsentrasi ilmu Qur’an dan Fiqih. Usaha Pesantren koperasi, agribisnis, homestay. Sarana pra sarana Ponpes Plus Madrasah. Bangunan fisik ada musholla, rumah kiai, pondok, dan madrasah pembelajaran sistem klasikal dan wetonan. Kurikulum telah dilengkapi mapel diniyah dan umum, ditambah keterampilan, olahraga, kesenian, berorganisasi,  pendidikan dan sebagian telah melaksanakan program pengembangan masyarakat.
            </p>
            <div className="flex items-center space-x-4">
              <div>
                <p className="text-3xl font-heading font-bold text-primary-700">30</p>
                <p className="text-sm text-gray-600">Pengurus Santri</p>
              </div>
              <div>
                <p className="text-3xl font-heading font-bold text-primary-700">60</p>
                <p className="text-sm text-gray-600">Santri</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
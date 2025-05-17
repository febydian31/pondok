import { motion } from 'framer-motion';
import { Lightbulb, Target, UserCheck } from 'lucide-react';

const VisionMission = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Visi & Misi
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-md p-8"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-primary-100 rounded-full text-primary-700 mr-4">
                <Lightbulb size={24} />
              </div>
              <h3 className="text-2xl font-heading font-bold text-gray-900">Visi</h3>
            </div>

            <p className="text-gray-700 mb-6">
            TERWUJUDNYA SANTRI PENGHAFAL QUR’AN YANG RELIGIUS, BERINTEGRITAS, BERKOMPETEN, DAN BERWAWASAN GLOBAL
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-md p-8"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-primary-100 rounded-full text-primary-700 mr-4">
                <Target size={24} />
              </div>
              <h3 className="text-2xl font-heading font-bold text-gray-900">Misi</h3>
            </div>

            <ul className="space-y-4">
              <li className="flex">
                <UserCheck className="h-6 w-6 text-primary-700 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">
                MENJADIKAN MUSLIM BERKARAKTER RELIGIUS BERAQIDAH AHLUSSUNNAH WAL JAMAAH
                </p>
              </li>
              <li className="flex">
                <UserCheck className="h-6 w-6 text-primary-700 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">
                MEMBANGUN PRIBADI SANTRI YANG BERINTEGRITAS TINGGI
                </p>
              </li>
              <li className="flex">
                <UserCheck className="h-6 w-6 text-primary-700 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">
                MELAKSANAKAN PENDIDIKAN TERPADU YANG BERKEARIFAN LOKAL DAN BERWAWASAN GLOBAL
                </p>
              </li>
              <li className="flex">
                <UserCheck className="h-6 w-6 text-primary-700 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">
                MENGHANTARKAN SANTRI YANG BERKOMPETEN DALAM BERILMU DAN BERAMAL
                </p>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-8 text-center">
            Program Unggulan
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'F Pendidikan Tahfidzul Qur’an dan Madrasah Diniyah',
                // description: 'Balancing spiritual growth with intellectual development',
              },
              {
                title: 'Madrasah Formal (MTs/MA) dan Bimbingan Belajar Al-Qur’an',
                // description: 'Building moral integrity and ethical behavior in all endeavors',
              },
              {
                title: 'Pelatihan kemandirian, akhlak, dan kepemimpinan',
                // description: 'Fostering a spirit of service and community responsibility',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-primary-50 rounded-lg p-6 border-t-4 border-primary-500"
              >
                <h4 className="text-xl font-heading font-bold text-gray-900 mb-3">
                  {value.title}
                </h4>
                {/* <p className="text-gray-700">{value.description}</p> */}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
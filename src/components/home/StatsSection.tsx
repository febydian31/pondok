import { motion } from 'framer-motion';
import { Users, Building, Hand } from 'lucide-react';

const stats = [
  {
    icon: <Building />,
    count: 'Yayasan',
    label: 'Donasi dari keluarga yasan PAPP Zuhriyah',
  },
  {
    icon: <Users />,
    count: 'Santri',
    label: 'SPP dari santri regular tiap bulan dan usaha santri',
  },
  {
    icon: <Hand />,
    count: 'Donatur',
    label: 'Donatur insidental baik dari CSR, para dermawan, maupun lembaga filantropi',
  },
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-primary-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
          Sumber Dana
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-8 text-center transform hover:-translate-y-1 transition-transform"
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 text-primary-700 mb-6">
                {stat.icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-2">
                {stat.count}
              </h3>
              <h4 className="text-lg font-semibold text-primary-700 mb-3">
                {stat.label}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
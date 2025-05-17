import { motion } from 'framer-motion';

const timelineEvents = [
  {
    year: '1985',
    title: 'Foundation',
    description:
      'Kyai Haji Abdullah Syafi\'i established Pesantren Al-Hikmah with just 15 students and 3 teachers in a small building.',
  },
  {
    year: '1992',
    title: 'First Campus Expansion',
    description:
      'Constructed new dormitories and classrooms to accommodate growing student population of 150 students.',
  },
  {
    year: '1998',
    title: 'Formal Recognition',
    description:
      'Received official recognition from the Ministry of Religious Affairs, establishing our curriculum standards.',
  },
  {
    year: '2005',
    title: 'Academic Excellence Program',
    description:
      'Introduced integrated academic program combining national curriculum with intensive Islamic studies.',
  },
  {
    year: '2010',
    title: 'Technology Integration',
    description:
      'Built computer laboratories and digital library to enhance our educational resources and teaching methods.',
  },
  {
    year: '2015',
    title: 'International Partnerships',
    description:
      'Established partnerships with Islamic institutions in Malaysia, Egypt, and Saudi Arabia for student exchanges.',
  },
  {
    year: '2020',
    title: 'Modern Campus Development',
    description:
      'Completed construction of modern classroom facilities, sports complex, and sustainable green spaces.',
  },
  {
    year: 'Present',
    title: 'Continuing Our Legacy',
    description:
      'Currently serving over 1,200 students with a staff of 150 dedicated teachers and support personnel.',
  },
];

const HistoryDetail = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Our History
          </h2>
          <p className="text-gray-600">
            Since our founding in 1985, Pesantren Al-Hikmah has evolved from a small traditional 
            Islamic school to a comprehensive educational institution while maintaining our core values.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline center line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary-200"></div>

          {/* Timeline events */}
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative md:flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Content */}
              <div className="md:w-1/2 md:pr-12 md:pl-12">
                <div
                  className={`bg-white p-6 rounded-lg shadow-md border-l-4 ${
                    index % 2 === 0 ? 'md:text-right border-primary-500' : 'border-secondary-400'
                  }`}
                >
                  <div
                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-2 ${
                      index % 2 === 0
                        ? 'bg-primary-100 text-primary-700'
                        : 'bg-secondary-100 text-secondary-700'
                    }`}
                  >
                    {event.year}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-700">{event.description}</p>
                </div>
              </div>

              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary-500 border-4 border-white shadow"></div>
            </motion.div>
          ))}
        </div>

        {/* Founders quote */}
        <div className="bg-primary-50 rounded-xl p-8 mt-16 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <div className="w-32 h-32 mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-white shadow-md">
                <img
                  src="https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg"
                  alt="Founder Kyai Haji Abdullah Syafi'i"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3 md:pl-8">
              <blockquote className="italic text-gray-700 text-lg mb-4">
                "Our mission is not merely to fill minds with knowledge, but to illuminate hearts 
                with faith, shape character with discipline, and inspire souls with purpose. 
                A true education prepares one for both worlds."
              </blockquote>
              <div className="font-semibold text-gray-900">
                <p>Kyai Haji Abdullah Syafi'i</p>
                <p className="text-sm text-primary-700">Founder of Pesantren Al-Hikmah (1930-2005)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoryDetail;
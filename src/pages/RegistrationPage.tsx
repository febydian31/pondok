import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Calendar, Clock, Book, Users, Award, GraduationCap } from 'lucide-react';
import RegistrationForm from '../components/registration/RegistrationForm';

const RegistrationPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleRegistrationSubmit = (formData: any) => {
    // In a real application, this would send the data to a server
    console.log('Registration data:', formData);
    setFormSubmitted(true);
  };

  return (
    <div className="pt-16 md:pt-20">
      {/* Page Header */}
      <div className="bg-primary-900 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Pendaftaran Santri
          </h1>
          <p className="text-primary-100 max-w-3xl text-lg">
          Mulailah perjalanan pendidikan Anda bersama Pondok Pesantren Zuhriyah. Daftarkan diri Anda pada program-program kami dan bergabunglah dengan komunitas pembelajaran dan pertumbuhan kami.
          </p>
        </div>
      </div>

      {/* Information Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Admission Information
            </h2>
            <p className="text-gray-600">
              Learn about our registration process, requirements, and important dates for 
              the upcoming academic year.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: 'Application Deadlines',
                description: 'Regular admission: April 30, 2025. Late admission (subject to availability): June 15, 2025.',
                icon: <Calendar className="h-12 w-12 text-primary-700" />,
              },
              {
                title: 'Academic Year Schedule',
                description: 'Academic year begins: July 15, 2025. Orientation week: July 8-14, 2025.',
                icon: <Clock className="h-12 w-12 text-primary-700" />,
              },
              {
                title: 'Admission Requirements',
                description: 'Previous academic records, character recommendation, entrance examination, interview.',
                icon: <Book className="h-12 w-12 text-primary-700" />,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-md border-t-4 border-primary-500"
              >
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3 text-center">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-center">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 mb-16">
            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">
              Our Programs
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Tahfiz Program',
                  description: 'Focused on Quran memorization and understanding, with supporting Islamic studies.',
                  icon: <Book className="h-6 w-6 text-primary-600" />,
                  details: [
                    'Ages: 12-18',
                    'Duration: 4-6 years',
                    'Focus: Quran memorization',
                  ],
                },
                {
                  title: 'Academic Focus Program',
                  description: 'Balanced curriculum with national academic standards and core Islamic studies.',
                  icon: <Users className="h-6 w-6 text-primary-600" />,
                  details: [
                    'Ages: 12-18',
                    'Duration: 6 years',
                    'Focus: Academic excellence with Islamic foundation',
                  ],
                },
                {
                  title: 'Combined Program',
                  description: 'Comprehensive program integrating Quranic studies with full academic curriculum.',
                  icon: <Award className="h-6 w-6 text-primary-600" />,
                  details: [
                    'Ages: 12-18',
                    'Duration: 6 years',
                    'Focus: Balanced Quranic and academic education',
                  ],
                },
                {
                  title: 'Intensive Arabic Program',
                  description: 'Specialized focus on Arabic language mastery for religious and academic purposes.',
                  icon: <GraduationCap className="h-6 w-6 text-primary-600" />,
                  details: [
                    'Ages: 15+',
                    'Duration: 2-3 years',
                    'Focus: Arabic language proficiency',
                  ],
                },
              ].map((program, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start">
                    <div className="p-2 bg-primary-50 rounded-full mr-4">
                      {program.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-heading font-bold text-gray-900 mb-2">
                        {program.title}
                      </h4>
                      <p className="text-gray-600 mb-4">{program.description}</p>
                      <ul className="space-y-1">
                        {program.details.map((detail, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-center">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary-500 mr-2"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div> */}

          <div className="grid grid-cols-1 lg:w-1/2 mx-auto">
            <div>
              <h3 className="text-2xl font-heading text-center font-bold text-gray-900 mb-6">
                Form Pendaftaran
              </h3>
              <RegistrationForm onSubmit={handleRegistrationSubmit} />
            </div>
            
            {/* <div>
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                {[
                  {
                    question: 'What is the tuition fee for the programs?',
                    answer: 'Tuition varies by program. The Tahfiz Program is IDR 15,000,000/year, Academic Focus Program is IDR 18,000,000/year, Combined Program is IDR 20,000,000/year, and Intensive Arabic Program is IDR 12,000,000/year. Scholarships are available for qualified students.',
                  },
                  {
                    question: 'Are there scholarships available?',
                    answer: 'Yes, we offer merit-based and need-based scholarships. Merit scholarships cover up to 75% of tuition for academically exceptional students. Need-based scholarships provide financial assistance based on family income and circumstances.',
                  },
                  {
                    question: 'What are the dormitory facilities like?',
                    answer: 'Our dormitories provide comfortable accommodations with separate facilities for boys and girls. Each dormitory has dedicated supervisors, study areas, prayer spaces, and recreation zones. Rooms typically accommodate 4-6 students with individual storage spaces.',
                  },
                  {
                    question: 'What is the daily schedule for students?',
                    answer: 'A typical day begins with Fajr prayer at 4:30 AM, followed by Quran recitation. Academic classes run from 8:00 AM to 3:00 PM with breaks for prayers. Evening activities include additional Islamic studies, extracurricular activities, and supervised study time until 9:30 PM.',
                  },
                  {
                    question: 'How can parents stay involved?',
                    answer: 'We maintain regular communication with parents through quarterly progress reports, parent-teacher meetings, and our online portal where parents can monitor academic progress and attendance. We also host family days and encourage parental involvement in school events.',
                  },
                ].map((faq, index) => (
                  <details key={index} className="bg-white rounded-lg shadow-sm p-6 open:shadow-md transition-all duration-300">
                    <summary className="text-lg font-medium text-gray-900 cursor-pointer">
                      {faq.question}
                    </summary>
                    <p className="mt-4 text-gray-600">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegistrationPage;
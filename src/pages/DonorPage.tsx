import { useState } from 'react';
import DonorForm from '../components/donor/DonorForm';
import DonorTable from '../components/donor/DonorTable';
import { Donor } from '../types';
import { initialDonors } from '../data/donorData';
import { Users, Building, Hand } from 'lucide-react';

const DonorPage = () => {
  const [donors, setDonors] = useState<Donor[]>(initialDonors);

  const handleDonorSubmit = (formData: any) => {
    const newDonor: Donor = {
      name: formData.anonymousDonation ? 'Hamba Allah' : formData.name,
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      amount: formData.amount,
      purpose: formData.message || 'General Support',
    };

    setDonors([newDonor, ...donors]);
  };

  return (
    <div className="pt-16 md:pt-20">
      {/* Page Header */}
      <div className="bg-primary-900 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Donatur
          </h1>
          <p className="text-primary-100 max-w-3xl text-lg">
            Sumber Dana yang digunakan untuk pendanaan pengembangan dan kegiatan pondok pesantren Zuhriyah
          </p>
        </div>
      </div>

      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Sumber Dana
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Building />,
                title: 'Yayasan',
                description: 'Donasi dari keluarga yasan PAPP Zuhriyah',
              },
              {
                icon: <Users />,
                title: 'Santri',
                description: 'SPP dari santri regular tiap bulan dan usaha santri',
              },
              {
                icon: <Hand />,
                title: 'Donatur',
                description: 'Donatur insidental baik dari CSR, para dermawan, maupun lembaga filantropi',
              },
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 text-primary-700 mb-6">{item.icon}</div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <DonorForm onSubmit={handleDonorSubmit} />
            <DonorTable donors={donors} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorPage;
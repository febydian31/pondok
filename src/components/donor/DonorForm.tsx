import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Check } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  amount: string;
  paymentMethod: string;
  anonymousDonation: boolean;
  message: string;
}

interface DonorFormProps {
  onSubmit: (data: FormData) => void;
}

const DonorForm = ({ onSubmit }: DonorFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    amount: '',
    paymentMethod: 'transfer',
    anonymousDonation: false,
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: (e.target as HTMLInputElement).checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        amount: '',
        paymentMethod: 'transfer',
        anonymousDonation: false,
        message: '',
      });
    }, 3000);
  };

  const donationAmounts = ['100,000', '250,000', '500,000', '1,000,000', '5,000,000'];

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="bg-primary-700 py-6 px-8">
        <h3 className="text-2xl font-heading font-bold text-white flex items-center">
          <Heart className="mr-2" /> Donasi Kepada Pondok Pesantren Zuhriah
        </h3>
        <p className="text-primary-100 mt-2">
        Kontribusi Anda membantu kami menyediakan pendidikan Islam yang berkualitas kepada para Santri.
        </p>
      </div>

      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="py-12 px-8 text-center"
        >
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <Check className="h-8 w-8 text-green-600" />
          </div>
          <h4 className="text-2xl font-heading font-bold text-gray-900 mb-2">
            Terimakasih Sudah Berdonasi
          </h4>
          <p className="text-gray-600">
          Kedermawanan Anda membantu kami melanjutkan misi pendidikan kami. Konfirmasi telah dikirim ke email Anda dengan rincian donasi.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="py-8 px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Nama Lengkap *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
              Nomor Telp
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Nominal *
            </label>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-2 mb-3">
              {donationAmounts.map((amount) => (
                <button
                  key={amount}
                  type="button"
                  onClick={() => setFormData({ ...formData, amount })}
                  className={`py-2 px-3 rounded-md transition-colors ${
                    formData.amount === amount
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  {amount}
                </button>
              ))}
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500">Rp</span>
              </div>
              <input
                type="text"
                id="amount"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="Custom amount"
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="paymentMethod" className="block text-gray-700 font-medium mb-2">
              Metode Pembayaran *
            </label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="transfer">Bank Transfer</option>
              <option value="credit">Credit Card</option>
              <option value="ewallet">E-Wallet</option>
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Pesan (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Semoga Bermanfaat .."
            ></textarea>
          </div>

          <div className="mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="anonymousDonation"
                checked={formData.anonymousDonation}
                onChange={handleChange}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-gray-700">Buat Keterangan Donasi ini menjadi Hamba Allah</span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-4 rounded-md transition-colors"
          >
            Donasi
          </button>

        </form>
      )}
    </div>
  );
};

export default DonorForm;
import { useState } from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Check } from 'lucide-react';

interface FormData {
  studentName: string;
  birthDate: string;
  nomorInduk: string;
  nisn: string;
  gender: string;
  address: string;
  namaAayah: string;
  namaIbu: string;
  alamatAyah: string;
  alamatIbu: string;
  pekerjaanAyah: string;
  pekerjaanIbu: string;
  parentPhone: string;
  education: string;
  program: string;
  howDidYouHear: string;
}

interface RegistrationFormProps {
  onSubmit: (data: FormData) => void;
}

const RegistrationForm = ({ onSubmit }: RegistrationFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    studentName: '',
    birthDate: '',
    nomorInduk: '',
    nisn: '',
    gender: '',
    address: '',
    namaAayah: '',
    namaIbu: '',
    alamatAyah: '',
    alamatIbu: '',
    pekerjaanAyah: '',
    pekerjaanIbu: '',
    parentPhone: '',
    education: '',
    program: '',
    howDidYouHear: '',
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  // const [checked, setChecked] = useState(false);
  // const handleChange = () => setChecked(!checked);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setIsSubmitted(true);
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="bg-primary-700 py-6 px-8">
        <h3 className="text-2xl font-heading font-bold text-white flex items-center">
          <UserPlus className="mr-2" /> Form Pendaftaran Santri
        </h3>
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
            Pendaftaran telah berhasil
          </h4>
          <p className="text-gray-600 mb-6">
            Terimakasih telah mendaftar di pondok pesantren zuhriyah
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="py-8 px-8">
          {/* Progress Steps */}
          <div className="flex justify-between mb-8">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
                    currentStep >= step
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {step}
                </div>
                <span
                  className={`text-sm ${
                    currentStep >= step ? 'text-primary-700' : 'text-gray-500'
                  }`}
                >
                  {step === 1
                    ? 'Biodata Siswa'
                    : step === 2
                    ? 'Biodata Orang Tua'
                    : 'Kategori dan Persyaratan'}
                </span>
              </div>
            ))}
          </div>

          {/* Step 1: Student Information */}
          {currentStep === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-xl font-medium text-gray-900 mb-4">Data Siswa</h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="studentName" className="block text-gray-700 font-medium mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    id="studentName"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="nomorInduk" className="block text-gray-700 font-medium mb-2">
                    Nomor Induk Santri *
                  </label>
                  <input
                    type="number"
                    id="nomorInduk"
                    name="nomorInduk"
                    value={formData.nomorInduk}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="nisn" className="block text-gray-700 font-medium mb-2">
                    NISN
                  </label>
                  <input
                    type="number"
                    id="nisn"
                    name="nisn"
                    value={formData.nisn}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="birthDate" className="block text-gray-700 font-medium mb-2">
                    Tanggal Lahir *
                  </label>
                  <input
                    type="date"
                    id="birthDate"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="gender" className="block text-gray-700 font-medium mb-2">
                  Jenis Kelamin *
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Pilih Jenis Kelamin</option>
                  <option value="male">Laki Laki</option>
                  <option value="female">Perempuan</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
                  Alamat *
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                ></textarea>
              </div>

              <div>
                <label htmlFor="education" className="block text-gray-700 font-medium mb-2">
                  Jenjang Pendidikan *
                </label>
                <select
                  id="education"
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Pilih Jenjang Pendidikan</option>
                  <option value="elementary">MTS</option>
                  <option value="junior">MA</option>
                  <option value="senior">Kuliah</option>
                  <option value="other">Lulus</option>
                </select>
              </div>
            </motion.div>
          )}

          {/* Step 2: Parent Information */}
          {currentStep === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-xl font-medium text-gray-900 mb-4">Data Orang tua / Wali</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="namaAayah" className="block text-gray-700 font-medium mb-2">
                    Nama Ayah *
                  </label>
                  <input
                    type="text"
                    id="namaAayah"
                    name="namaAayah"
                    value={formData.namaAayah}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="namaIbu" className="block text-gray-700 font-medium mb-2">
                    Nama Ibu *
                  </label>
                  <input
                    type="text"
                    id="namaIbu"
                    name="namaIbu"
                    value={formData.namaIbu}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="pekerjaanAyah" className="block text-gray-700 font-medium mb-2">
                    Pekerjaan Ayah *
                  </label>
                  <input
                    type="text"
                    id="pekerjaanAyah"
                    name="pekerjaanAyah"
                    value={formData.namaAayah}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="pekerjaanIbu" className="block text-gray-700 font-medium mb-2">
                  Pekerjaan Ibu
                  </label>
                  <input
                    type="text"
                    id="pekerjaanIbu"
                    name="pekerjaanIbu"
                    value={formData.namaIbu}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>
              
                <div className='mb-6'>
                  <label htmlFor="alamatAyah" className="block text-gray-700 font-medium mb-2">
                    Alamat Ayah *
                  </label>
                  <textarea
                  id="alamatAyah"
                  name="alamatAyah"
                  value={formData.alamatAyah}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                ></textarea>
                </div>
                <div className='mb-6'>
                  <label htmlFor="alamatIbu" className="block text-gray-700 font-medium mb-2">
                  Alamat Ibu *
                  </label>
                  <textarea
                  id="alamatIbu"
                  name="alamatIbu"
                  value={formData.alamatIbu}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                ></textarea>
                </div>
              

                <div className='mb-6'>
                  <label htmlFor="parentPhone" className="block text-gray-700 font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="parentPhone"
                    name="parentPhone"
                    value={formData.parentPhone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
              </div>
            </motion.div>
          )}

          {/* Step 3: Program Selection */}
          {currentStep === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-xl font-medium text-gray-900 mb-4">Program Selection</h4>

              <div className="mb-6">
                <label htmlFor="program" className="block text-gray-700 font-medium mb-2">
                  Kategori Santri
                </label>
                <select
                  id="program"
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Pilih Kategori</option>
                  <option value="tahfiz">Reguler</option>
                  <option value="academic">Dhuafa</option>
                  <option value="combined">Yatim / Piatu</option>
                </select>
              </div>

            {/* check box */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <div className="flex items-center space-x-3 p-2  primary-700 rounded shadow-md">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      // checked={checked}
                      onChange={handleChange}
                      className="form-checkbox h-4 w-6 text-primary-700 rounded focus:ring-primary-700 focus:ring-2"
                    />
                    <span className="ml-2 text-gray-700 font-medium select-none">
                      Akte Kelahiran
                    </span>
                  </label>
                  <div className="ml-auto text-sm text-primary-700">
                    {/* {checked ? 'Checked' : 'Unchecked'} */}
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-3 p-2  primary-700 rounded shadow-md">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      // checked={checked}
                      onChange={handleChange}
                      className="form-checkbox h-4 w-6 text-primary-700 rounded focus:ring-primary-700 focus:ring-2"
                    />
                    <span className="ml-2 text-gray-700 font-medium select-none">
                      Kartu Keluarga
                    </span>
                  </label>
                  <div className="ml-auto text-sm text-primary-700">
                    {/* {checked ? 'Checked' : 'Unchecked'} */}
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <div className="flex items-center space-x-3 p-2  primary-700 rounded shadow-md">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      // checked={checked}
                      onChange={handleChange}
                      className="form-checkbox h-4 w-6 text-primary-700 rounded focus:ring-primary-700 focus:ring-2"
                    />
                    <span className="ml-2 text-gray-700 font-medium select-none">
                      Ijazah Terakhir
                    </span>
                  </label>
                  <div className="ml-auto text-sm text-primary-700">
                    {/* {checked ? 'Checked' : 'Unchecked'} */}
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-3 p-2  primary-700 rounded shadow-md">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      // checked={checked}
                      onChange={handleChange}
                      className="form-checkbox h-4 w-6 text-primary-700 rounded focus:ring-primary-700 focus:ring-2"
                    />
                    <span className="ml-2 text-gray-700 font-medium select-none">
                      KTP Ortu / Wali
                    </span>
                  </label>
                  <div className="ml-auto text-sm text-primary-700">
                    {/* {checked ? 'Checked' : 'Unchecked'} */}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <div className="flex items-center space-x-3 p-2  primary-700 rounded shadow-md">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      // checked={checked}
                      onChange={handleChange}
                      className="form-checkbox h-4 w-6 text-primary-700 rounded focus:ring-primary-700 focus:ring-2"
                    />
                    <span className="ml-2 text-gray-700 font-medium select-none">
                      BPJS / KIP
                    </span>
                  </label>
                  <div className="ml-auto text-sm text-primary-700">
                    {/* {checked ? 'Checked' : 'Unchecked'} */}
                  </div>
                </div>
              </div>
            </div>


              {/* <div className="mb-6">
                <label htmlFor="howDidYouHear" className="block text-gray-700 font-medium mb-2">
                  How did you hear about us?
                </label>
                <select
                  id="howDidYouHear"
                  name="howDidYouHear"
                  value={formData.howDidYouHear}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select Option</option>
                  <option value="friend">Friend or Family</option>
                  <option value="social">Social Media</option>
                  <option value="website">Website</option>
                  <option value="event">Community Event</option>
                  <option value="other">Other</option>
                </select>
              </div> */}

              
            </motion.div>
          )}

          <div className="flex justify-between mt-8">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
              >
                Back
              </button>
            )}
            {currentStep < 3 ? (
              <button
                type="button"
                onClick={nextStep}
                className="ml-auto px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md transition-colors"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="ml-auto px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md transition-colors"
              >
                Daftar
              </button>
            )}
          </div>
        </form>
      )}
    </div>
  );
};

export default RegistrationForm;
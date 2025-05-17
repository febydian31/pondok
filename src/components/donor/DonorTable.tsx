import { useState } from 'react';
import { Donor } from '../../types';

interface DonorTableProps {
  donors: Donor[];
}

const DonorTable = ({ donors }: DonorTableProps) => {
  const [sortField, setSortField] = useState<keyof Donor>('date');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSort = (field: keyof Donor) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedDonors = [...donors]
    .filter((donor) => 
      donor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      donor.purpose.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        if (sortDirection === 'asc') {
          return aValue.localeCompare(bValue);
        } else {
          return bValue.localeCompare(aValue);
        }
      } else if (sortField === 'amount') {
        if (sortDirection === 'asc') {
          return Number(a.amount) - Number(b.amount);
        } else {
          return Number(b.amount) - Number(a.amount);
        }
      }

      return 0;
    });

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-heading font-bold text-gray-900">
            Data Donatur
          </h3>
          <div className="relative">
            <input
              type="text"
              placeholder="Cari Donatur..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <svg 
              className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th 
                  onClick={() => handleSort('name')}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:text-gray-700"
                >
                  <div className="flex items-center">
                    Nama Donatur
                    {sortField === 'name' && (
                      <svg 
                        className={`ml-1 h-4 w-4 ${sortDirection === 'asc' ? 'transform rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </div>
                </th>
                <th 
                  onClick={() => handleSort('date')}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:text-gray-700"
                >
                  <div className="flex items-center">
                    Tanggal
                    {sortField === 'date' && (
                      <svg 
                        className={`ml-1 h-4 w-4 ${sortDirection === 'asc' ? 'transform rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </div>
                </th>
                <th 
                  onClick={() => handleSort('amount')}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:text-gray-700"
                >
                  <div className="flex items-center">
                    Nominal
                    {sortField === 'amount' && (
                      <svg 
                        className={`ml-1 h-4 w-4 ${sortDirection === 'asc' ? 'transform rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </div>
                </th>
                <th 
                  onClick={() => handleSort('purpose')}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:text-gray-700"
                >
                  <div className="flex items-center">
                    Keterangan
                    {sortField === 'purpose' && (
                      <svg 
                        className={`ml-1 h-4 w-4 ${sortDirection === 'asc' ? 'transform rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {sortedDonors.map((donor, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{donor.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                    {donor.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-primary-700 font-medium">Rp {donor.amount}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                    {donor.purpose}
                  </td>
                </tr>
              ))}
              {sortedDonors.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-6 py-4 text-center text-gray-500">
                    Tidak ada Donatur yang dicari
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DonorTable;
import React from 'react';

const TableComponent = ({ data }) => {
  return (
    <div className="my-4 text-white bg-gray-800 rounded-lg p-4">
      <h2 className='text-[22px] font-bold mb-4'>Recent Orders</h2>    
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-900 shadow-lg border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-4 px-2 text-left">Customer</th>
              <th className="py-4 px-2 text-left">Order No.</th>
              <th className="py-4 px-2 text-left">Amount</th>
              <th className="py-4 px-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {data.map((row, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 px-2">{row.customer}</td>
                <td className="py-2 px-2">{row.orderNo}</td>
                <td className="py-2 px-2">{row.amount}</td>
                <td className="py-2 px-2">
                  <button 
                    className={`px-4 py-2 rounded ${
                      row.status === 'Delivered' ? 'bg-green-500 text-white' :
                      row.status === 'Cancelled' ? 'bg-red-500 text-white' : 'bg-gray-300 text-black'
                    }`}
                  >
                    {row.status}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableComponent;

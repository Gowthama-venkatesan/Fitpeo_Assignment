import React, { useState } from 'react';
import InfoBox from '../components/InfoBox';
import BarChart from '../components/BarChart';
import TableComponent from '../components/Tablecomponent'; // Ensure the file name matches
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Reviews from '../components/Reviews';
import home from '../image/avatar.png';
import arrowimg from '../image/arrow.svg';
import targetimg from '../image/targetimg.jpg';
import revenue from '../image/revenue.png';
import profitIcon from '../image/profitIcon.png';
import lossIcon from '../image/lossIcon.png';
import total_order from '../image/total_order.png';
import total_revenue from '../image/total_revenue.png';
import total_Deliver from '../image/total_Deliver.png';
import total_cancell from '../image/remove.png';
import Goal from '../pages/Goal'
import Modal from '../pages/Modal'

const Home = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const data = [
    { name: "Total Orders", number: "75", profitLoss: "3", icon: total_order, color: 'white' },
    { name: "Total Delivered", number: "70", profitLoss: "-3", icon: total_revenue, color: 'gray' },
    { name: "Total Cancelled", number: "05", profitLoss: "3", icon: total_cancell, color: 'pink' },
    { name: "Total Revenue", number: "$12k", profitLoss: "-3", icon: total_revenue, color: 'white' }
  ];

  const tableData = [
    { customer: 'John Doe', orderNo: '1001', amount: '$250.00', status: 'Delivered' },
    { customer: 'Jane Smith', orderNo: '1002', amount: '$125.00', status: 'Cancelled' },
    { customer: 'Alice Johnson', orderNo: '1003', amount: '$450.00', status: 'Delivered' },
    { customer: 'Bob Brown', orderNo: '1004', amount: '$75.00', status: 'Cancelled' }
  ];

  const reviews = [
    { id: 1, rating: 5, comment: 'Excellent product! Highly recommend it.', avatar: home, name: 'Jenny Willison' },
    { id: 2, rating: 4, comment: 'Very good, but there is room for improvement.', avatar: home, name: 'Jane Smith' },
    { id: 3, rating: 3, comment: 'It’s okay, but I expected better quality.', avatar: home, name: 'Willison' },
    { id: 4, rating: 5, comment: 'Excellent product! Highly recommend it.', avatar: home, name: 'Alice Johnson' },
    { id: 5, rating: 4, comment: 'Very good, but there is room for improvement.', avatar: home, name: 'Bob Brown' },
    { id: 6, rating: 3, comment: 'It’s okay, but I expected better quality.', avatar: home, name: 'Jenny' }
  ];

  return (
    <div className="p-4 w-full bg-gray-900">
      <h1 className="text-2xl text-white font-bold mb-4">Dashboard</h1>
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="flex-1">
          <div className="flex flex-wrap gap-4 mb-4">
            {data.map((item, index) => (
              <InfoBox
                key={index}
                image={item.icon}
                name={item.name}
                number={item.number}
                profitLoss={item.profitLoss}
                color={item.color}
              />
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex-1">
              <BarChart />
            </div>
            <div className="flex-1">
              <TableComponent data={tableData} />
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="bg-gray-800 flex justify-between items-center p-4 shadow-lg rounded-lg mb-4">
            <div className="text-left">
              <p className="text-lg text-white font-bold mb-2">Net Profit</p>
              <p className="text-2xl text-white font-bold mb-2">$6759.25</p>
              <p className="text-lg flex items-center font-bold text-green-500">
                <img
                  className="w-3 h-3 mr-1"
                  src={profitIcon}
                  alt="Profit icon"
                />
                {3}%
              </p>
            </div>
            <div className="relative flex items-center justify-center" style={{ width: 100, height: 100 }}>
              <CircularProgressbar
                value={40}
                text={'40%'}
                styles={{
                  path: { stroke: '#4caf50' },
                  text: { fill: '#fff', fontSize: '16px' },
                  trail: { stroke: '#d6d6d6' },
                }}
              />
              <p className="absolute bottom-[-14px] -ml-20 text-white text-[10px]">
                *The Values here have been rounded off
              </p>
            </div>
          </div>
          <div className="bg-gray-800 text-white p-4 shadow-lg rounded-lg mb-4">
            {['Goals', 'Popular Dishes', 'Menus'].map((item, index) => (
              <div
                className="flex justify-between items-center my-4 cursor-pointer"
                key={index}
                onClick={() => handleItemClick(item)}
              >
                <div className="flex items-center text-left">
                  <img src={targetimg} alt={`Icon ${index + 1}`} className="w-6 h-6 rounded-full" />
                  <p className="ml-3">{item}</p>
                </div>
                <img src={arrowimg} alt="Arrow" className="w-6 h-6" />
              </div>
            ))}
          </div>
          <Reviews reviews={reviews} />
        </div>
      </div>

      <Modal isOpen={!!selectedItem} onClose={() => setSelectedItem(null)}>
        {selectedItem && <Goal item={selectedItem} />}
      </Modal>

    </div>
  );
};

export default Home;

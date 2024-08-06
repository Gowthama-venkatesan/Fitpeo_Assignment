import React from 'react';
import profitIcon from '../image/profitIcon.png';
import lossIcon from '../image/lossIcon.png';

const InfoBox = ({ image, name, number, profitLoss, color }) => {
  return (
    <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden md:w-[180px] w-[160px]">
      <div className="p-4">
        <img 
          src={image} 
          alt={name} 
          className="h-10 object-cover  p-2 rounded-lg"
          style={{ backgroundColor: color }} // Apply dynamic background color using inline styles
        />
        <h2 className="text-[18px] text-white font-semibold my-2">{name}</h2>
        <div className="flex justify-between items-center w-full">
          <p className="text-[22px] text-white font-bold my-2">{number}</p>
          <p 
            className={`text-lg flex items-center pl-2 font-bold ${profitLoss >= 0 ? 'text-green-500' : 'text-red-500'}`}
          >
            <img 
              className='w-3 h-3 mr-1' 
              src={profitLoss >= 0 ? profitIcon : lossIcon} 
              alt={profitLoss >= 0 ? 'Profit icon' : 'Loss icon'} 
            />
            {profitLoss}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoBox;

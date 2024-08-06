import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title);

const BarChart = () => {
  const [selectedOption, setSelectedOption] = useState('option1');

  // Data for each option
  const dataOptions = {
    option1: {
      labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
      datasets: [ 
        {
          label: 'Dataset 1',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          borderRadius: 10,
          barThickness: 8,
          categoryPercentage: 0.5,
          barPercentage: 0.8,
        },
        {
          label: 'Dataset 2',
          data: [ 7, 10, 18, 12, 11, 10],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
          borderRadius: 10,
          barThickness: 8,
          categoryPercentage: 0.5,
          barPercentage: 0.8,
        },
      ],
    },
    option2: {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      datasets: [
        {
          label: 'Dataset A',
          data: [5, 10, 15, 20],
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
          borderRadius: 10,
          barThickness: 10,
          categoryPercentage: 0.5,
          barPercentage: 0.8,
        },
        {
          label: 'Dataset B',
          data: [10, 15, 20, 25],
          backgroundColor: 'rgba(255, 159, 64, 0.2)',
          borderColor: 'rgba(255, 159, 64, 1)',
          borderWidth: 1,
          borderRadius: 10,
          barThickness: 10,
          categoryPercentage: 0.5,
          barPercentage: 0.8,
        },
      ],
    },
    option3: {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      datasets: [
        {
          label: 'Revenue',
          data: [200, 300, 400, 500],
          backgroundColor: 'rgba(255, 205, 86, 0.2)',
          borderColor: 'rgba(255, 205, 86, 1)',
          borderWidth: 1,
          borderRadius: 10,
          barThickness: 15,
          categoryPercentage: 0.5,
          barPercentage: 0.8,
        },
        {
          label: 'Expenses',
          data: [150, 250, 350, 450],
          backgroundColor: 'rgba(153, 102, 255, 0.2)',
          borderColor: 'rgba(153, 102, 255, 1)',
          borderWidth: 1,
          borderRadius: 10,
          barThickness: 15,
          categoryPercentage: 0.5,
          barPercentage: 0.8,
        },
      ],
    },
  };

  // Use data based on selected option
  const data = dataOptions[selectedOption];

  // Options for the chart
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        padding: {
          top: 5,
          bottom: 10,
        },
      },
    },
    scales: {
      x: {
        stacked: false,
        grid: {
          display: false,
        },
        barPercentage: 0.6,
        categoryPercentage: 1,
        ticks: {
          padding: 3,
        },
      },
      y: {
        grid: {
          borderDash: [1],
        },
      },
    },
  };

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="p-4 overflow-auto shadow-lg bg-gray-800 rounded-lg mt-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-white">Activity</h2>
        <select
          value={selectedOption}
          onChange={handleDropdownChange}
          className="p-2 border rounded bg-gray-500 text-white"
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;

import React from 'react';
import Dish1 from '../image/Dish1.jpg'
import Dish2 from '../image/dish2.jpg'
import Dish3 from '../image/dish3.jpg'

const Goal = ({ item }) => {
  switch (item) {
    case 'Goals':
      return (
        <div>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Goals</h2>
          <p className="text-gray-700 mb-4">
            At our hotel, we are committed to providing the best guest experience through exceptional service and top-notch amenities. Our goals include:
          </p>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Delivering personalized guest experiences</li>
            <li>Maintaining the highest standards of cleanliness and comfort</li>
            <li>Offering a wide range of services and facilities</li>
            <li>Ensuring the safety and well-being of our guests</li>
            <li>Promoting sustainability and environmental responsibility</li>
          </ul>
        </div>
      );
    case 'Popular Dishes':
      return (
        <div>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Popular Dishes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img src={Dish3} alt="Dish 1" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fish Dish</h3>
              <p className="text-gray-600">A delicious dish made with fresh ingredients and traditional spices.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img src={Dish2} alt="Dish 2" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">Meat Dish</h3>
              <p className="text-gray-600">A mouth-watering recipe that brings out the best in local cuisine.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img src={Dish1} alt="Dish 3" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">Pepper Chicken</h3>
              <p className="text-gray-600">A crowd favorite with a unique blend of flavors and textures.</p>
            </div>
          </div>
        </div>
      );
    case 'Menus':
      return (
        <div>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Menu</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-700">Breakfast</h3>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Eggs Benedict</li>
                <li>Pancakes with Maple Syrup</li>
                <li>Fruit Smoothie</li>
                <li>Avocado Toast</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-700">Lunch</h3>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Grilled Chicken Salad</li>
                <li>Beef Burger with Fries</li>
                <li>Vegetable Stir-Fry</li>
                <li>Club Sandwich</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-700">Dinner</h3>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Roasted Salmon with Vegetables</li>
                <li>Spaghetti Carbonara</li>
                <li>Vegetarian Lasagna</li>
                <li>Chicken Alfredo</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-700">Desserts</h3>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Chocolate Lava Cake</li>
                <li>Cheesecake</li>
                <li>Tiramisu</li>
                <li>Fruit Tart</li>
              </ul>
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default Goal;

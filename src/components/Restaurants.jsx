import React from 'react'
import RestaurantCard from './RestaurantCard'
import CardCrousel from './CardCrousel';

function Restaurants({YoursDishes = [] , restaurant = []}) {
  return (
  <div>
  <h1 className="text-center text-2xl font-bold mb-6">Top restaurant chains in Hyderabad</h1>
  <div className="w-11/12 mx-auto overflow-x-auto whitespace-nowrap scrollbar-hide">
    {YoursDishes.map((item, i) => (
     <RestaurantCard 
        key={i}
     item = {item.info}
     image={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.info.cloudinaryImageId}`}/>
    ))}
  </div>
  <h1>Restaurants with online food delivery in Hyderabad</h1>
   
    {restaurant.map((item, i) => (
     <RestaurantCard 
        key={i}
     item = {item.info}
     image={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.info.cloudinaryImageId}`}/>
    ))}
  </div>

  )
}

export default Restaurants


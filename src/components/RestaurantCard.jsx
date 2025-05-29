import React from 'react'

function RestaurantCard({image,item:{
    name ,  areaName , avgRatingString
}}) {

  return (
    <>
    

 <div
   
        className="inline-block w-60 p-2 group hover:scale-95 transition-transform duration-300"
      >
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            className="w-full h-40 object-cover"
            src={image}
            
          />
          <div className="p-3">
            <h5 className="text-lg font-bold text-gray-700">{name}</h5>
            <p className="text-sm mt-1 font-semibold flex items-center gap-1">
              <span
              >
                &#9733;
              </span>
              {avgRatingString }
            </p>
            <p>{areaName}</p>
          </div>
        </div>
      </div>
    </>
  
      
  )
}

export default RestaurantCard
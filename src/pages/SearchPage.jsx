import React, { useEffect, useState } from 'react'
import axios from "axios"

function SearchPage() {

   const [PopularRestuarant, setPopularRestuarant] = useState([])

  useEffect(() => {
    axios.get("https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=17.38430&lng=78.45830")
    .then((res)=>{
      console.log(res.data.data.cards[1].card.card.gridElements.infoWithStyle.info);
      setPopularRestuarant(res.data.data.cards[1].card.card.gridElements.infoWithStyle.info)
    })
  }, [])
  
  return (
    <div>
        <input type="text" className='bg-gray-300' />
  <div className='flex '>
 {PopularRestuarant.map((item , i )=>(
   <div key={i}>
   <img  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${item.imageId}`} alt="" />
   </div>
   
  ))}
  </div>
      
         
    </div>
  )
}

export default SearchPage
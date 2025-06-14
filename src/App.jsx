
import { useEffect, useState } from 'react'
import './App.css'
import Restaurants from './components/Restaurants'
import axios from 'axios'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import SearchPage from './pages/SearchPage'


function App() {
    
    const [YoursDishes, setYoursDishes] = useState([])
    const [restaurant, setrestaurant] = useState([])
     
    useEffect(() => {

        axios.get("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3843&lng=78.4583&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
  .then((res)=>{
    
   setYoursDishes(res.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    console.log(res.data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
  setrestaurant(res.data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

  })
    }, [])
  return (
 <>
   <Routes>
   <Route path='/' element = {
    <>
    <Header/>
    <Restaurants YoursDishes ={YoursDishes} restaurant={restaurant}/>
    </>
    }/>
   
    <Route path='/search' element ={
      <>
      <Header/>
      <SearchPage/>
      </>
      }/>
      </Routes>
  
   
  


 </>
  )
}

export default App


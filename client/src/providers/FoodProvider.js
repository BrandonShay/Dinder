import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const FoodContext = React.createContext();

export const FoodConsumer = FoodContext.Consumer;

const FoodProvider = ({ children }) => {
  const [foods, setFoods] = useState([])
  const [randFoods, setRandFoods] = useState([])

  useEffect( () => {
    axios.get('/api/foods')
      .then( res => setFoods(res.data) )
      .catch( err => console.log(err))
  }, [])

  const addFood = (food) => {
    axios.post('/api/food', { food })
      .then( res => setFoods([...foods, res.data]) )
      .catch( err => console.log(err))
  }

  const updateFood = (id, food) => {
    axios.put(`/api/foods/${id}`, { food })
      .then( res => {
        const newUpdatedFoods = foods.map( f => {
          if (f.id === id) {
            return res.data
          }
          return f
        })
        setFoods(newUpdatedFoods)
      })
      .catch( err => console.log(err))
  }

  const deleteFood = (id) => {
    axios.delete(`/api/foods/${id}`)
      .then( res => setFoods(foods.filter( f => f.id !== id)))
      .catch( err => console.log(err))
  }

  const randomFoods = () => {
    axios.get('/api/foods/randomFoods')
      .then( res => setRandFoods(res.data) )
      .catch( err => console.log(err))
  }

  const switchOwner = (id) => {
    axios.put(`/api/foods/${id}/switchOwner`)
      .then( res => {
        setFoods([...foods, res.data])
        setRandFoods(randFoods.filter( f => f.id !== id))
      } )
      .catch( err => console.log(err))
  }

  return (
    <FoodContext.Provider value={{
      foods,
      randomFoods,
      addFood,
      updateFood,
      deleteFood,
      randomFoods, 
      switchOwner,
    }}>
      { children }
    </FoodContext.Provider>
  )
}

export default FoodProvider;
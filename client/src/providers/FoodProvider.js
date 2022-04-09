import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthConsumer } from './AuthProvider';

export const FoodContext = React.createContext();

export const FoodConsumer = FoodContext.Consumer;

const FoodProvider = ({ children, user }) => {
  const [foods, setFoods] = useState([])
  const [randFoods, setRandFoods] = useState([])

  const navigate = useNavigate()

  const getAllFoods = () => {
    axios.get(`/api/users/${user.id}/foods`)
      .then( res => setFoods(res.data) )
      .catch( err => console.log(err))
  }

  const addFood = (food) => {
    axios.post(`/api/users/${user.id}/foods`, { food })
      .then( res => setFoods([...foods, res.data]) )
      .catch( err => console.log(err))
  }

  const updateFood = (id, food) => {
    axios.put(`/api/users/${user.id}/foods/${id}`, { food })
      .then( res => {
        const newUpdatedFoods = foods.map( f => {
          if (f.id === id) {
            return res.data
          }
          return f
        })
        setFoods(newUpdatedFoods)
        navigate('/foods')
      })
      .catch( err => console.log(err))
  }

  const deleteFood = (id) => {
    axios.delete(`/api/users/${user.id}/foods/${id}`)
      .then( res => {
        setFoods(foods.filter( f => f.id !== id))
        navigate('/foods')
      })
      .catch( err => console.log(err))
  }

  const randomFoods = () => {
    axios.get(`/api/foods/${user.id}/randomFoods`)
      .then( res => setRandFoods(res.data) )
      .catch( err => console.log(err))
  }

  const switchOwner = (id) => {
    axios.put(`/api/users/${user.id}/foods/${id}/switchOwner`)
      .then( res => {
        setFoods([...foods, res.data])
        setRandFoods(randFoods.filter( f => f.id !== id))
      } )
      .catch( err => console.log(err))
  }

  return (
    <FoodContext.Provider value={{
      foods,
      randFoods,
      getAllFoods,
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

const ConnectedFoodProvider = (props) => (
  <AuthConsumer>
    { value => <FoodProvider {...value} {...props} /> }
  </AuthConsumer>
)

export default ConnectedFoodProvider;
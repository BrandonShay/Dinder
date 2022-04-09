import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const DinnerContext = React.createContext();

export const DinnerConsumer = DinnerContext.Consumer;

const DinnerProvider = ({ children }) => {
  const [dinners, setDinners] = useState([])

  const navigate = useNavigate()

  const getAllDinners = (foodId) => {
    axios.get(`/api/cats/${foodId}/dinners`)
      .then( res => setDinners(res.data) )
      .catch( err => console.log(err) )
  }

  const addDinner = (foodId, dinner) => {
    axios.post(`/api/foods/${foodId}/dinners`, { dinner })
    .then( res => setDinners([...dinners, res.data]) )
    .catch( err => console.log(err) )
  }

  const updateDinner = (foodId, id, dinner) => {
    axios.put(`/api/foods/${foodId}/dinners/${id}`, { dinner })
      .then( res => {
        const newUpdatedDinners = dinners.map( d => {
          if (d.id === id) {
            return res.data
          }
          return d
        })
        setDinners(newUpdatedDinners)
        navigate(`/foods/${foodId}/dinners`)
      })
      .catch( err => console.log(err) )
  }

  const deleteDinner = (foodId, id) => {
    axios.delete(`/api/foods/${foodId}/dinners/${id}`)
      .then( res => {
        setDinners(dinners.filter(d => d.id !== id))
      })
      .catch( err => console.log(err) )
  }

  return (
    <DinnerContext.Provider value={{
      dinners,
      getAllDinners, 
      addDinner,
      updateDinner,
      deleteDinner,
    }}>
      { children }
    </DinnerContext.Provider>
  )
}

export default DinnerProvider;
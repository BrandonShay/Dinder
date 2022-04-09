import FoodList from './FoodList';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import FoodForm from './FoodForm';

const Foods = () => {
  const [adding, setAdd] = useState(false)

  return (
    <>
      <p onClick={() => setAdd(true)}>+</p>
      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <FoodForm setAdd={setAdd} />
        </Modal.Body>
      </Modal>
      <FoodList />
    </>
  )
}

export default Foods;
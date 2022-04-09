import DinnerList from './DinnerList';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import DinnerForm from './DinnerForm';

const Dinners = () => {
  // const [adding, setAdd] = useState(false);

  return(
    <>
      {/* <Button onClick={() => setAdd(true)}>
        +
      </Button>
      <Modal show ={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <DinnerForm 
            setAdd={setAdd}
          />
        </Modal.Body>
      </Modal>
      <h1>All Dinners</h1> */}
      <DinnerList />
      <DinnerForm />
    </>
  )
}

export default Dinners;
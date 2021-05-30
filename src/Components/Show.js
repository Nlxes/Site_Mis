import React from 'react';
import { useState} from 'react';
import { Modal, Button} from 'react-bootstrap';

function Example() {

    const [show, setShow] = useState(false);
  
    return (
      <>
        <Button variant="success" onClick={() => setShow(true)}>
          Custom Width Modal
        </Button>
  
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Custom Modal Styling
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Seme Loh
            </p>
          </Modal.Body>
        </Modal>
      </>
    );
  }
  
  export default Example;
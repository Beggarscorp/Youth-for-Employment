import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function Example() {
  const [show, setShow] = useState(false);

//   const open_popup=()=>{
//     alert("Hello jay");
// }

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  
  useEffect(()=>{
    handleShow();
  },0);

  return (
    <>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title style={{border:"none"}}></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <video autoPlay={true} muted controls src="/Assets/videos/InShot_20241028_140139834.mp4" width="100%" height="380">
            </video>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;
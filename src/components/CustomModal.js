import {Button, Modal} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'video-react/dist/video-react.css';
import {Player,BigPlayButton} from 'video-react'
const CustomModal = ({show,onHide,onClick,handleClose,handleShow}) => {
   
  return (
    <Modal size="lg" show={show} onHide={handleClose}>
    <Modal.Body>
      <Player>
        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
        <BigPlayButton position="center" />
      </Player>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="primary" onClick={handleClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
  )
}

export default CustomModal
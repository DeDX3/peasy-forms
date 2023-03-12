import { Modal } from "react-bootstrap";
import "./PFModal.css";

export function PFModal({
  size,
  isOpen,
  children,
  backdrop,
  className,
  handleClose,
}) {
  let modalSize = "modal-md";

  size === "large" ? (modalSize = "modal-xl") : (modalSize = "modal-md");

  return (
    <Modal
      show={isOpen}
      onHide={handleClose}
      backdrop={backdrop}
      className={className}
      dialogClassName={modalSize}
      centered
    >
      <Modal.Body>
        <div className="d-flex justify-content-end">
          <button className="modal-close button-flushed" onClick={handleClose}>
            Close X
          </button>
        </div>
        {children}
      </Modal.Body>
    </Modal>
  );
}

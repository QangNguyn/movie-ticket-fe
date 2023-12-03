import React from "react";
import "./getTicketModal.scss";
import { Modal } from "react-bootstrap";

export default function GetTicketModal(props) {
  return <>
    <Modal
     {...props}
     dialogClassName="modal-90w"
    >
      <Modal.Header closeButton>
        <div className="date-showtime">
          <div className="date-showtime__item">
            123
          </div>
          <div className="date-showtime__item">
            123
          </div>
          <div className="date-showtime__item">
            123
          </div>
        </div>
      </Modal.Header>
    </Modal>
  </>
}

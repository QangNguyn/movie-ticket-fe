import React from "react";
import { Button, Modal } from "react-bootstrap";
import ReactPlayer from "react-player";

export default function TrailerModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
        <ReactPlayer url={props.linkTrailer} width={"100%"} />
    </Modal>
  );
}

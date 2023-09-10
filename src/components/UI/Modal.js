import React,{ Fragment } from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

// console.log('React version:', React.version);

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlays = (props) => {
  return <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
};
const portalElement = document.getElementById("overlays");

function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlays>{props.children}</ModalOverlays>,
        portalElement
      )}
    </Fragment>
  );
}

export default Modal;

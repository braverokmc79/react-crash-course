import React from "react";
import classes from "./Modal.module.css";

interface ModalProps{
    children:React.ReactNode;
    onClose:()=>void;
}
const Modal:React.FC<ModalProps> = ({children, onClose}) => {
  return (
    <>
      <div className={classes.backdrop}  onClick={onClose}/>
      <dialog  open={true}  className={classes.modal}>
         {children}
      </dialog>
    </>
  );
};

export default Modal;

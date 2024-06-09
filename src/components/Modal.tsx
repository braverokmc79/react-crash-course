import React from "react";
import classes from "./Modal.module.css";
import { useNavigate } from "react-router-dom";

interface ModalProps{
    children:React.ReactNode;   
}
const Modal:React.FC<ModalProps> = ({children}) => {
  const navigate=useNavigate()
  const onClose = () => {
    navigate("/");
  };
  
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

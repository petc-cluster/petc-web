import React, { useEffect } from "react";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import style from "./Modal.module.css";

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent background scroll
    } else {
      document.body.style.overflow = ""; // Restore scrolling
    }
    return () => {
      document.body.style.overflow = ""; // Clean up on unmount
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={style.modal_overlay}>
      <div className={style.modal_content}>
        <IconButton
          onClick={onClose}
          style={{
            position: "absolute",
            top: "20px",
            right: "0",
            transform: "translateX(-50%)", // Center horizontally
            background: "none",
            border: "none",
            fontSize: "1.8rem",
            cursor: "pointer",
            color: "#034e7b",
          }}
        >
          <Close />
        </IconButton>
        {children}
      </div>
    </div>
  );
};

export default Modal;

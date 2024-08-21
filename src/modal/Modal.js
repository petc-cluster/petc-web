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

  const handleBackgroundClick = () => {
    onClose(); // Close the modal when background is clicked
  };

  const handleContentClick = (e) => {
    e.stopPropagation(); // Prevent closing when clicking inside the modal content
  };

  return (
    <div className={style.modal_overlay} onClick={handleBackgroundClick}>
      <div className={style.modal_content} onClick={handleContentClick}>
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

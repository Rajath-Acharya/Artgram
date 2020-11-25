import React from "react";
import { motion } from "framer-motion";

const Modal = ({ selectedImage, setSelectedImage }) => {
  const handleShow = (e) => {
    if (e.target.classList.contains("modal-show")) setSelectedImage(null);
  };
  return (
    <motion.div
      className="modal-show"
      onClick={handleShow}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedImage}
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        alt="full sized pic"
      />
    </motion.div>
  );
};

export default Modal;

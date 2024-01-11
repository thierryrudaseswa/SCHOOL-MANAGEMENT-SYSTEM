// BasicModal.tsx
import React, { ReactNode } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 400,
  p: 2,
  borderRadius: 10,
};

interface BasicModalProps {
  open: boolean;
  handleClose: () => void;
  children: ReactNode; 
}

const BasicModal: React.FC<BasicModalProps> = ({ children, open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>{children}</Box>
    </Modal>
  );
};

export default BasicModal;

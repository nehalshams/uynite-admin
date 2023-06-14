import {
    Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import React from "react";

const Modal = ({size, openModal, handleOpen, children, modalHeader, confirmBtn }) => {
  return (
    <Dialog size={size} open={openModal} handler={handleOpen}>
      <DialogHeader>{modalHeader}</DialogHeader>
      <DialogBody className="flex-col" divider>
        {
            children
        }
      </DialogBody>
      <DialogFooter>
      {
        confirmBtn && confirmBtn
      }
        <Button
          variant="text"
          color="red"
          onClick={handleOpen}
          className="mr-1"
        >
          <span>Close</span>
        </Button>
    
      </DialogFooter>
    </Dialog>
  );
};

export default Modal;

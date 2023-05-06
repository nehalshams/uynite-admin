import {
    Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import React from "react";

const Modal = ({ openModal, handleOpen, children, modalHeader }) => {
  return (
    <Dialog open={openModal} handler={handleOpen}>
      <DialogHeader>{modalHeader}</DialogHeader>
      <DialogBody className="flex-col" divider>
        {
            children
        }
      </DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          color="red"
          onClick={handleOpen}
          className="mr-1"
        >
          <span>Close</span>
        </Button>
        {/* <Button variant="gradient" color="green" onClick={handleOpen}>
          <span>Confirm</span>
        </Button> */}
      </DialogFooter>
    </Dialog>
  );
};

export default Modal;

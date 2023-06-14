import Modal from '@/components/Modal';
import { Button, Typography } from '@material-tailwind/react';
import React, { useState } from 'react'

const Setting = () => {
    const [state, setState ] = useState({});
    const { modalOpen } = state
  return (
    <div className="mt-6">
      <div onClick={() => setState({ ...state, modalOpen: true})}
      className="flex w-1/3 cursor-pointer items-center rounded-md bg-blue-600 px-3 py-4 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="h-10 w-10"
        >
          <path
            fill-rule="evenodd"
            d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zM9.75 14.25a.75.75 0 000 1.5H15a.75.75 0 000-1.5H9.75z"
            clip-rule="evenodd"
          />
          <path d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z" />
        </svg>
        <div className="ml-3">
          Clear cache <br />
          Current app size : 113.65 MB
        </div>
      </div>
      <div className="mt-3 flex w-1/3 cursor-pointer items-center rounded-md bg-blue-600 px-3 py-4 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="h-10 w-10"
        >
          <path
            fill-rule="evenodd"
            d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zM9.75 14.25a.75.75 0 000 1.5H15a.75.75 0 000-1.5H9.75z"
            clip-rule="evenodd"
          />
          <path d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z" />
        </svg>
        <div className="ml-3">
          App version : 2.3.6 <br />
          Dev version : 3.4.2
        </div>
      </div>
      {
        <Modal
          size={"sm"}
          confirmBtn={
            <Button variant="text" color="#685767" className="mr-3">
              <span>Yes</span>
            </Button>
          }
          modalHeader={
            <Typography className="text-md">Are you sure?</Typography>
          }
          openModal={modalOpen}
          handleOpen={() => setState({ ...state, modalOpen: false })}
        >
          <Typography className="text-gray-900">
            This will delete cache data
          </Typography>
        </Modal>
      }
    </div>
  );
}

export default Setting
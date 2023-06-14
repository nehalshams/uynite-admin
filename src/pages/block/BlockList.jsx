import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Tooltip,
  Progress,
  Input,
  Button,
  Textarea,
} from "@material-tailwind/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { authorsTableData, projectsTableData } from "@/data";
import Dropdown from "@/components/Dropdown";
import Modal from "@/components/Modal";
import { useState } from "react";

export function BlockList({ thead, statusOption = [] }) {
  const [state, setState] = useState({});
  const { openModal, actionType, confirmationModal, rejectModal } = state;

  const celebrityOption = [
    { name: "All" },
    { name: "Pending" },
    { name: "Verified" },
    { name: "Rejected" },
  ];

  const filterOptions = [
    {name: ''}
  ]

  const handleProfileClick = (name) => {
    setState({ ...state, openModal: true });
  };

  const handleAction = (e) => {
    if (e === "Open") {
    } else if (e === "Reject user") {
      setState({ ...state, rejectModal: true });
    } else setState({ ...state, actionType: e, confirmationModal: true });
  };

  const modalData = {
    "Block user": {
      heading: "Reason for blocking",
      btn: "Block user",
    },
    "Delete user": {
      heading: "Reason for delete",
      btn: "Delete user",
    },
  }[actionType];
  const closedReport = true;

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader
          variant="gradient"
          color="blue"
          className="mb-8 flex overflow-visible p-6 pb-4"
        >
          <div>
            <Typography variant="h4" color="white">
              {'Block'}
            </Typography>
            <div className="flex gap-2">
              {/* {subheading.map((item) => {
                return (
                  <Typography className="text-sm">Pending 66 |</Typography>
                );
              })} */}

              <Typography className="text-sm">Block 43 |</Typography>
              <Typography className="text-sm">Delete 75 |</Typography>
            </div>
          </div>
          <div className="ml-auto overflow-visible">
            {/* <Dropdown label={"Select Status"} options={statusOption} /> */}
          </div>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {['S.N', 'Select All', 'Profile', 'Reason for blocking', 'Post', 'Action'].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] whitespace-nowrap font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {authorsTableData.map(
                ({ img, name, email, job, online, date, status }, key) => {
                  const className = `py-3 px-5 ${
                    key === authorsTableData.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={name} className="cursor-pointer">
                      <td className={className}>
                        <div>
                          <Typography>{key + 1}</Typography>
                        </div>
                      </td>
                      <td className={className}>
                        <input type="checkbox" />
                      </td>
                      <td
                        className={className}
                        onClick={() => handleProfileClick(name)}
                      >
                        <div className="flex items-center gap-4">
                          <Avatar src={img} alt={name} size="sm" />
                          <div>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {name}
                            </Typography>
                            <Typography className="text-xs font-normal text-blue-gray-500">
                              {email}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <Typography variant="small" color="blue-gray">
                          Harrasment
                        </Typography>
                      </td>
                      <td className={`${className} flex gap-1`}>
                        <Avatar src={img} />
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="text-xs"
                        >
                          This is post
                        </Typography>
                      </td>
                      <td className={className}>
                        <Button onClick={() => setState({...state, openModal: true})}>
                            Un-block
                        </Button>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>

      {
        <Modal
          confirmBtn={
            <Button className="mr-3">Submit</Button>
          }
          size={"sm"}
          modalHeader={<Typography className='font-semibold text-gray-700 text-center  w-full'>Reason for un-blocking</Typography>}
          openModal={openModal}
          handleOpen={() => setState({ ...state, openModal: false })}
        >
            <Textarea label="Reason"/>
        </Modal>
      }

      {
        <Modal
          modalHeader={
            <div className="w-full text-center">{modalData?.heading}</div>
          }
          openModal={confirmationModal}
          handleOpen={() => setState({ ...state, confirmationModal: false })}
          
        >
          <Textarea label="Type your feedback here" />
          <Button
            variant="gradient"
            fullWidth
            color="red"
            className="mt-4"
            // onClick={() }
          >
            {modalData?.btn}
          </Button>
        </Modal>
      }
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
          openModal={rejectModal}
          handleOpen={() => setState({ ...state, rejectModal: false })}
        >
          <Typography className="text-gray-900">
            Are you sure to reject this report, this will delete the report.
          </Typography>
        </Modal>
      }
    </div>
  );
}

export default BlockList;

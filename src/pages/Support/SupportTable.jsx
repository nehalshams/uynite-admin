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

export function SupportTable({ thead, tableHeading, statusOption }) {
  const [state, setState] = useState({});
  const { openModal, actionType, confirmationModal, rejectModal } = state;

  const celebrityOption = [
    { name: "All" },
    { name: "Pending" },
    { name: "Verified" },
    { name: "Rejected" },
  ];

  const filterOption = [
    { name: 'Open issues'}, { name: 'Replied issues'}, { name: 'Ignored issues'}
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

  const ModalHeader = () => {
    return (
      <div className="flex w-full items-center gap-4">
        <Avatar
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSrdB8rRgA1qgkw0ckcTrhIa0kpV2ILvbMWg&usqp=CAU"
          }
          alt={""}
          size="xl"
        />
        <div>
          <div className="flex items-center gap-1">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-semibold"
            >
              {"Nhhasas"}
            </Typography>
            <Typography variant="small">reported</Typography>
            <Typography
              color="blue-gray"
              className="font-semibold"
              variant="small"
            >
              Raj Kumar
            </Typography>
            <Typography className="text-xs font-normal text-blue-gray-500">
              {"ggrt@yopmail.com"}
            </Typography>
          </div>
          <Typography variant="small">22/04/2023</Typography>
        </div>
        <Typography
          as="a"
          href="#"
          className="ml-auto text-xs font-semibold text-blue-gray-600"
        >
          {"Verified"}
        </Typography>
      </div>
    );
  };
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
              {"Supports"}
            </Typography>
            <div className="flex gap-2">
              {/* {subheading.map((item) => {
                return (
                  <Typography className="text-sm">Pending 66 |</Typography>
                );
              })} */}

              <Typography className="text-sm">Open issues 43 |</Typography>
              <Typography className="text-sm">Replied issues 75 |</Typography>
              <Typography className="text-sm">Ignored issues 15 |</Typography>
            </div>
          </div>
          <div className="ml-auto overflow-visible">
            <Dropdown label={"Select Status"} options={filterOption} />
          </div>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {['S.N', 'Select All', 'Profile', 'Issues details', 'Reply',  ].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
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
                        // onClick={() => handleProfileClick(name)}
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
                        <Input
                          disabled
                          value={"This is issues is raised by user"}
                        />
                      </td>
                      <td
                        className={className}
                        // onClick={() => handleProfileClick(name)}
                      >
                        <div className="flex items-center gap-4">
                          <Input label="Reply" />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-6 w-6"
                          >
                            <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                          </svg>
                        </div>
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
          size={"md"}
          modalHeader={<ModalHeader />}
          openModal={openModal}
          handleOpen={() => setState({ ...state, openModal: false })}
        >
          <Typography
            color="blue-gray"
            className="border-bottom-blue-gray-700 mb-3 border border-b-2"
          >
            This is the post content related to reported post
          </Typography>
          <div className="flex justify-center">
            <div className="w-2/3">
              <img
                className="min-h-[180px]"
                src={
                  "https://images.template.net/wp-content/uploads/2019/06/College-ID-Card-.jpg"
                }
              />
            </div>
          </div>
          <div className="my-3 flex justify-center gap-3">
            <div className="flex justify-center gap-5">
              <Button
                variant="gradient"
                fullWidth
                color="orange"
                // onClick={() }
              >
                Block
              </Button>
              <Button
                variant="gradient"
                fullWidth
                color="red"
                // onClick={() }
              >
                Delete
              </Button>
              <Button
                variant="gradient"
                fullWidth
                // onClick={() }
              >
                Reject
              </Button>
            </div>
          </div>
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
          {/* <div className="flex justify-end">

            <Button
              variant="gradient"
              color="red"
              className="mt-4 mr-4"
              // onClick={() }
            >
              Yes
            </Button>
          </div> */}
        </Modal>
      }
    </div>
  );
}

export default SupportTable;

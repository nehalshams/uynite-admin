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
} from "@material-tailwind/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { authorsTableData, projectsTableData } from "@/data";
import Dropdown from "@/components/Dropdown";
import Modal from "@/components/Modal";
import { useState } from "react";

export function EventTable() {
  const [state, setState] = useState({});
  const { openModal } = state;

  const eventOptions = [
    { name: "All" },
    { name: "Upcomming Events" },
    { name: "Ongoing Events" },
    { name: "Completed" },
  ];

  const handleProfileClick = (name) => {
    setState({ ...state, openModal: true });
  };
  const ModalHeader = () => {
    return (
      <div className="flex w-full items-center gap-4">
        <Avatar
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSrdB8rRgA1qgkw0ckcTrhIa0kpV2ILvbMWg&usqp=CAU"
          }
          alt={""}
          size="xxl"
        />
        <div>
          <Typography
            variant="small"
            color="blue-gray"
            className="font-semibold"
          >
            {"Nhhasas"}
          </Typography>
          <Typography className="text-xs font-normal text-blue-gray-500">
            {"ggrt@yopmail.com"}
          </Typography>
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
              Events
            </Typography>
            <Typography className="text-sm">
              Upcomming 66 | Ongoing 66 | Completed 88
            </Typography>
          </div>
          <div className="ml-auto overflow-visible">
            <Dropdown label={"Select Status"} options={eventOptions} />
          </div>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {[
                  "S.N",
                  "Select All",
                  "Event Name",
                  "Picture 1",
                  "Picture 2",
                  "Terms & Condition",
                  "From Date",
                  "To Date",
                  "Status",
                ].map((el) => (
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
                        onClick={() => handleProfileClick(name)}
                      >
                        <div className="flex items-center gap-4">
                          {/* <Avatar src={img} alt={name} size="sm" /> */}
                          <div>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {name}
                            </Typography>
                            {/* <Typography className="text-xs font-normal text-blue-gray-500">
                              {email}
                            </Typography> */}
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <img
                          className="max-w-[60px]"
                          src={
                            "https://imgk.timesnownews.com/story/1566234362-Pan_Card.jpg?tr=w-1200,h-900"
                          }
                        />
                      </td>
                      <td className={className}>
                        <img
                          className="max-w-[60px]"
                          src={
                            "https://imgk.timesnownews.com/story/1566234362-Pan_Card.jpg?tr=w-1200,h-900"
                          }
                        />
                      </td>
                      <td className={className}>
                        <Typography className="break-words text-xs text-blue-gray-600">
                          adipisicing elit. Nobis, earum!
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="break-words font-semibold text-xs text-blue-gray-600">
                          {`22/05/2023`}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="break-words font-semibold text-xs text-blue-gray-600">
                          {`01/06/2023`}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography
                          href="#"
                          className="text-xs font-semibold text-blue-gray-600"
                        >
                          {status}
                        </Typography>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>

      {/* {
        <Modal
          modalHeader={<ModalHeader />}
          openModal={openModal}
          handleOpen={() => setState({ ...state, openModal: false })}
        >
          <div
            className="flex gap-2
          "
          >
            <div>
              <img
                className="min-h-[180px]"
                src={
                  "https://images.template.net/wp-content/uploads/2019/06/College-ID-Card-.jpg"
                }
              />
              <Typography color="blue-gray" className="text-center">
                ID Name
              </Typography>
            </div>
            <div>
              <img
                className="min-h-[180px]"
                src={
                  "https://images.template.net/wp-content/uploads/2019/06/College-ID-Card-.jpg"
                }
              />
              <Typography color="blue-gray" className="text-center ">
                ID Name
              </Typography>
            </div>
            <div></div>
          </div>

          <div className="flex gap-3">
            <Input disabled value={"www.myurl.com "} />
            <Input disabled value={"www.myproof.com"} />
          </div>
          <div className="my-3 flex gap-3">
            <Button
              variant="gradient"
              fullWidth
              // onClick={() }
            >
              Confirm
            </Button>
            <Button
              variant="gradient"
              fullWidth
              color="red"
              // onClick={() }
            >
              Reject
            </Button>
          </div>
        </Modal>
      } */}
      {/* <Card>
        <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Projects Table
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["companies", "members", "budget", "completion", ""].map(
                  (el) => (
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
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {projectsTableData.map(
                ({ img, name, members, budget, completion }, key) => {
                  const className = `py-3 px-5 ${
                    key === projectsTableData.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={name}>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <Avatar src={img} alt={name} size="sm" />
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            {name}
                          </Typography>
                        </div>
                      </td>
                      <td className={className}>
                        {members.map(({ img, name }, key) => (
                          <Tooltip key={name} content={name}>
                            <Avatar
                              src={img}
                              alt={name}
                              size="xs"
                              variant="circular"
                              className={`cursor-pointer border-2 border-white ${
                                key === 0 ? "" : "-ml-2.5"
                              }`}
                            />
                          </Tooltip>
                        ))}
                      </td>
                      <td className={className}>
                        <Typography
                          variant="small"
                          className="text-xs font-medium text-blue-gray-600"
                        >
                          {budget}
                        </Typography>
                      </td>
                      <td className={className}>
                        <div className="w-10/12">
                          <Typography
                            variant="small"
                            className="mb-1 block text-xs font-medium text-blue-gray-600"
                          >
                            {completion}%
                          </Typography>
                          <Progress
                            value={completion}
                            variant="gradient"
                            color={completion === 100 ? "green" : "blue"}
                            className="h-1"
                          />
                        </div>
                      </td>
                      <td className={className}>
                        <Typography
                          as="a"
                          href="#"
                          className="text-xs font-semibold text-blue-gray-600"
                        >
                          <EllipsisVerticalIcon
                            strokeWidth={2}
                            className="h-5 w-5 text-inherit"
                          />
                        </Typography>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card> */}
    </div>
  );
}

export default EventTable;

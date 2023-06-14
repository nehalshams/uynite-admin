import Dropdown from "@/components/Dropdown";
import UploadImage from "@/components/UploadImage";
import { Button, Input } from "@material-tailwind/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateEvent = () => {
    const navigate = useNavigate()
  const eventType = [{ name: "Sponsored Event" }];
  const eventOption = [
    { name: "Create" },
    { name: "Upcomming" },
    { name: "Ongoing" },
    { name: "Result" },
    { name: "Completed" },
  ];

  const [state, setState] = useState({});
  const { startDate = "", endDate = "" } = state;

  function formatExpires(value) {
    return value
      .replace(/[^0-9]/g, "")
      .replace(/^([2-9])$/g, "0$1")
      .replace(/^(1{1})([3-9]{1})$/g, "0$1/$2")
      .replace(/^0{1,}/g, "0")
      .replace(/^([0-1]{1}[0-9]{1})([0-9]{1,2}).\*/g, "$1/$2");
  }
  return (
    <div className="w-2/3 bg-white p-10  mt-6 shadow-lg md:mx-auto">
      <div className="w-full">
        <div className="my-3 flex flex-wrap gap-4">
          <Dropdown label={"Sponsored Event"} options={eventType} />
          <Dropdown label={"Event Type"} options={eventOption} />
        </div>
        <div className="w-full">
          <Input label="Event Name" />
        </div>
        <div className=" my-3 flex w-full flex-wrap gap-3">
          <Input
            type="datetime-local"
            label="From"
            value={startDate}
            onChange={(event) =>
              setState({ ...state, startDate: event.target.value })
            }
            containerProps={{ className: "min-w-[72px] w-[347px]" }}
          />
          <Input
            type="datetime-local"
            label="To"
            value={endDate}
            onChange={(event) =>
              setState({ ...state, endDate: event.target.value })
            }
            containerProps={{ className: "min-w-[72px] w-[347px]" }}
          />
        </div>
        <div className="flex flex-wrap gap-3">
          {/* {[1, 2, 3, 4].map((item) => {
          return <UploadImage />;
        })} */}

          <UploadImage />
        </div>

        <div className="my-3 mt-6 flex gap-3">
          <Button
            variant="gradient"
            fullWidth
            // onClick={() }
          >
            Create Event
          </Button>
          <Button
            variant="gradient"
            fullWidth
            color="red"
            onClick={() => navigate("/dashboard/events")}
          >
            Cnacel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;

import { Select, Option } from "@material-tailwind/react";

export default function Dropdown() {
  return (
    <div className="w-50">
      <Select label="Select Status" className="bg-white active:color-white">
        <Option>All</Option>
        <Option>Pending</Option>
        <Option>Verified</Option>
        <Option>Rejected</Option>
      </Select>
    </div>
  );
}

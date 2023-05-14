import { Select, Option } from "@material-tailwind/react";

export default function Dropdown({label, options, handleDropdown, selectedValue}) {
  // console.log(selectedValue, '_______________ IIIIIIIIIII');
  return (
    <div className="w-full">
      <Select label={label} value={selectedValue} className="bg-white text-gray-700 active:color-white" onChange={handleDropdown}>
      {
        options.map(({name}) => {
          return <Option value={name}>{name}</Option>;
        })
      }
        {/* <Option>All</Option>
        <Option>Pending</Option>
        <Option>Verified</Option>
        <Option>Rejected</Option> */}
      </Select>
    </div>
  );
}

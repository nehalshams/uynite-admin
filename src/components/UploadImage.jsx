import { Typography } from "@material-tailwind/react";
import { useState } from "react";

export default function UploadImage() {
  const [state, setState ] = useState({});
  const { imageList = []} = state;

  const handleImage = (e) => {
    console.log(e.target.files[0]);
    const objURL = URL.createObjectURL(e.target.files[0])
    setState({...state, imageList: [...imageList, objURL]})
  };

  const removeImage = (url) => {
    const data = imageList.filter((item) => item !== url)
    setState({...state, imageList: data})
  }

  return (
    <>
      <input type="file" id="pic" className="hidden" onChange={(e) => handleImage(e)} />
      <label
        htmlFor="pic"
        className="border-ridge flex h-[80px] w-full items-center justify-center rounded-lg border border-gray-400 text-gray-900 "
      >
        <span className="bg-gray-300 cursor-pointer px-5 py-2 rounded-lg">Upload Image</span>
      </label>
      <div className="flex flex-wrap">
          {
            imageList.map((item, index) => {
              return(
              <figure key={index} className="my-6 mr-3 w-[185px]">
                <img
                  className="h-full w-full rounded-lg object-cover"
                  src={item}
                  alt="nature image"
                />
                <Typography
                  as="caption"
                  variant="small"
                  className="mb-3text-center font-normal cursor-pointer px-3 py-2"
                  onClick={() => removeImage(item)}
                >
                  Remove
                </Typography>
              </figure>

              )
            })
          }

      </div>
    </>
  );
}

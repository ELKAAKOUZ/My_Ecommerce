import Image from "next/image";
import { useDispatch } from "react-redux";
import {
  removeFromItems,
  toggle,
  addToItems,
  editItem,
} from "../slices/advsSlice";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import { DotsHorizontalIcon, XIcon } from "@heroicons/react/solid";
import { useState, useRef } from "react";
import AdminForm from "./AdminForm";

const SingleAdvertisment = ({ id, image, video, from_time, to_time }) => {
  const { data: session, status } = useSession();
  const imageInputRef = useRef();
  const videoInputRef = useRef();
  const startDateInputRef = useRef();
  const startTimeInputRef = useRef();
  const endDateInputRef = useRef();
  const endTimeInputRef = useRef();
  const [show, setShow] = useState(true);
  const showEditForm = useSelector((state) => state.advertisments.showEditForm);

  const dispatch = useDispatch();
  const deleteAdvHandler = () => {
    dispatch(removeFromItems({ id }));
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    const image = imageInputRef.current.value;
    const video = videoInputRef.current.value;
    const from_time =
      startDateInputRef.current.value + " " + startTimeInputRef.current.value;
    const to_time =
      endDateInputRef.current.value + " " + endTimeInputRef.current.value;
    const editedAdv = {
      id,
      image,
      video,
      from_time,
      to_time,
    };
    dispatch(editItem(editedAdv));
    // props.onAddNewAdvs(newAdvs)
  };
  const editAdvHandler = () => {
    // dispatch(toggle())
    console.log(id);
    setShow(!show);
  };
  if (image || video) {
    return (
      <section className="relative border-2 my-10  w-[95%] rounded-2xl mx-auto p-2  md:p-10 flex items-center">
        {status === "authenticated" && (
          <div className="absolute top-2 right-5 flex items-center space-x-4">
            <DotsHorizontalIcon
              onClick={editAdvHandler}
              className="h-8 cursor-pointer  text-gray-600"
            />
            <XIcon
              onClick={deleteAdvHandler}
              className="h-10 cursor-pointer  text-gray-600"
            />
          </div>
        )}
        {!show && (
          <form
            onSubmit={formSubmitHandler}
            className="p-4 w-full rounded-2xl  md:p-5 "
          >
            <h1 className="font-semibold text-2xl md:text-4xl">Edit Adv</h1>
            <div className="input">
              <input
                ref={imageInputRef}
                className="text-xs md:text-sm p-2 px-2 md:p-5 bg-transparent  outline-none "
                type="url"
                placeholder="Enter the URL of the Image"
              />
            </div>
            <div className="input">
              <input
                ref={videoInputRef}
                className="text-xs md:text-sm p-2 px-2 md:p-5 bg-transparent  outline-none "
                type="url"
                placeholder="Enter the URL of the Video"
              />
            </div>
            <div className="input1">
              <div className="input3">
                <label className="text-left" htmlFor="startdate">
                  Start Date :
                </label>
                <input
                  className="input2"
                  ref={startDateInputRef}
                  id="startdate"
                  type="date"
                  name="bday"
                  required
                  pattern="\d{4}-\d{2}-\d{2}"
                />
              </div>
              <div className="input3">
                <label className="text-left" htmlFor="starttime">
                  Start Time :
                </label>
                <input
                  className="input2"
                  ref={startTimeInputRef}
                  type="time"
                  id="starttime"
                  name="appt"
                  min="09:00"
                  max="18:00"
                  required
                />
              </div>
            </div>
            <div className="input1">
              <div className="input3">
                <label htmlFor="enddate">End Date :</label>
                <input
                  className="input2"
                  ref={endDateInputRef}
                  id="enddate"
                  type="date"
                  name="bday"
                  required
                  pattern="\d{4}-\d{2}-\d{2}"
                />
              </div>
              <div className="input3">
                <label htmlFor="endtime">End Time :</label>
                <input
                  className="input2"
                  ref={endTimeInputRef}
                  type="time"
                  id="endtime"
                  name="appt"
                  min="09:00"
                  max="18:00"
                  required
                />
              </div>
            </div>
            <div className=" mx-auto text-center">
              <button className="button" type="submit">
                Submit Changes
              </button>
            </div>
          </form>
        )}
        {show && (
          <div className="w-full p-10 md:flex md:items-center">
            <div className="w-full md:w-1/2 mx-auto ">
              {image && (
                <div className="relative md:w-[90%] h-[300px] md:h-[400px]">
                  <Image className="rounded-2xl" src={image} layout="fill" />
                </div>
              )}
              {!image && (
                <div>
                  <p className="text-sm md:text-2xl  text-center  ">
                    no image here
                  </p>
                </div>
              )}
            </div>
            <div className="w-1/2 mx-auto">
              {video && (
                <div className="md:w-[90%] pt-2">
                  <video
                    className="w-[400px] h-[300px]  md:h-[400px]"
                    autoPlay
                    controls
                    loop
                  >
                    <source src={video} />
                  </video>
                </div>
              )}
              {!video && (
                <div>
                  <p className="text-sm md:text-2xl  text-center pt-5 md:pt-0 ">
                    no video here
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </section>
    );
  }
};

export default SingleAdvertisment;

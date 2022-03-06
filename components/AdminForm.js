import React,{useRef} from 'react'
import { useDispatch } from 'react-redux';
import {addToItems} from "../slices/advsSlice";
const AdminForm =()=> {
    const dispatch=useDispatch();

    const imageInputRef=useRef();
    const videoInputRef=useRef();
    const startDateInputRef=useRef();
    const startTimeInputRef=useRef();
    const endDateInputRef=useRef();
    const endTimeInputRef=useRef();
   
    

    const formSubmitHandler=(event)=>{
        event.preventDefault();
        const image=imageInputRef.current.value;
        const video=videoInputRef.current.value;
        const from_time=startDateInputRef.current.value +" "+ startTimeInputRef.current.value;
        const to_time=endDateInputRef.current.value +" "+ endTimeInputRef.current.value;
        const newAdvs={
            id:Math.random().toString(16).slice(2),
            image,video,from_time,to_time
        }
        dispatch(addToItems(newAdvs));
        alert("New Advertisment is added :D");
        // props.onAddNewAdvs(newAdvs)
    }
    
 
  return (
      <div className='h-auto w-full p-5'>
            <form onSubmit={formSubmitHandler}  className='p-4 rounded-2xl   border-2 md:p-10 mx-auto'>
            <h1 className='font-semibold text-2xl md:text-4xl' >Add new Advs</h1>
            <div className='input'>  
                <input ref={imageInputRef} className='text-xs md:text-sm p-2 px-2 md:p-5 bg-transparent  outline-none ' type="url" placeholder='Enter the URL of the Image' />
            </div>
            <div className='input'>  
                <input ref={videoInputRef} className='text-xs md:text-sm p-2 px-2 md:p-5 bg-transparent  outline-none ' type="url" placeholder='Enter the URL of the Video' />
            </div>
            <div className='input1'>
                <div className='input3'>
                    <label className='text-left' htmlFor='startdate'>Start Date :</label>
                    <input className='input2' ref={startDateInputRef} id='startdate' type="date" name="bday" required pattern="\d{4}-\d{2}-\d{2}"/>
                </div>
                <div className='input3'>
                    <label className='text-left' htmlFor='starttime' >Start Time :</label>
                    <input className='input2' ref={startTimeInputRef} type="time" id="starttime" name="appt" min="09:00" max="18:00" required/>
                </div>
            </div>
            <div className='input1'>
                <div className='input3'>
                    <label  htmlFor='enddate'>End Date :</label>
                    <input className='input2' ref={endDateInputRef} id='enddate' type="date" name="bday" required pattern="\d{4}-\d{2}-\d{2}"/>
                </div>
                <div className='input3'>
                    <label htmlFor='endtime'>End Time :</label>
                    <input className='input2' ref={endTimeInputRef} type="time" id="endtime" name="appt" min="09:00" max="18:00" required/>
                </div>
            </div>
            <div className=' mx-auto text-center'>
                <button className='button' type="submit">Add New Adv</button>
            </div>
        </form>
      </div>
    
  )
}

export default AdminForm
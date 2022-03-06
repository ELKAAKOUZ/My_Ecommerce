import React ,{useEffect,useState} from 'react'
import SingleAdvertisment from './SingleAdvertisment';
import { useSelector } from 'react-redux';

const FetchedAdvs =()=> {
        const addedAdvs=useSelector((state)=>state.advertisments.advsItems)
        console.log(addedAdvs);
        // const [fetchedAdvs,setFetchedAdvs]=useState([]);
        // useEffect(()=>{
        //     const newAdvsFetched =async ()=>{
        //         const request =await fetch("https://penta-value-e37e9-default-rtdb.firebaseio.com/advs.json");
        //         const response=await request.json();
        //         const loadedadvs=[];
        //         for(const key in response){
        //             loadedadvs.push({
        //                 id:key,
        //                 image:response[key].image,
        //                 video:response[key].video,
        //                 from_time:response[key].from_time,
        //                 to_time:response[key].to_time,

        //             })
        //             setFetchedAdvs(loadedadvs);

        //         }
        //     }
        //     newAdvsFetched();
        // },[])
    
  return (
    <div>
        { addedAdvs.slice(1,addedAdvs.length).map(ad=>(<SingleAdvertisment id={ad.id} key={ad.id} video={ad.video} image={ad.image} from_time={ad.from_time} to_time={ad.to_time}/>))} 
    </div>
  )
}

export default FetchedAdvs
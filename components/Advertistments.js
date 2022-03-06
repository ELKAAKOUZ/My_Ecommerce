import React from 'react'
import SingleAdvertisment from './SingleAdvertisment'
import { useSelector } from 'react-redux';
const Advertistments =()=> {
  const addedAdvs=useSelector((state)=>state.advertisments.advsItems)
  console.log(addedAdvs)
  return (
    <div>{addedAdvs?.map(ad =>(
        <SingleAdvertisment key={ad.id} id={ad.id} image={ad.image} video={ad.video} from_time={ad.from_time} to_time={ad.to_time} />
    ))}</div>
  )
}

export default Advertistments
import React from 'react';
import HogCard from './HogCard'

const HogList = (props) => {

  console.log(props.hogs);
  return <div>{props.hogs.map(hog => {
    return <HogCard key={hog.name} hog={hog}/>
  })}</div>
}

export default HogList;

import React from 'react'
import Images from './Images';
import LiveScore from "./LiveScore";
import NewsFeed from './NewsFeed';
import Upcoming from './Upcoming';

const Body = () => {
  return (
    <div className="flex flex-row grow ">
      <div className="sm:bg-transparent sm:basis-[20%] basis-[10%] "></div>

      <div className='flex flex-col h-fit content-center sm:basis-[60%] '>
        <LiveScore />
        <Images/>
        <Upcoming/>
        
      </div>

      

      <NewsFeed/>

      {/* <div className="basis-1/4">
        <h1>News</h1>
      </div> */}

      

    </div>
  )
};

export default Body;

import React from 'react'


const upcomingMatches = [
  {
    id:1,
    team1:"AFG",
    team2:"PAK",
    series:"1st T20Is Series",
    time:" 20.00 PST ",
    schedule:"1 Oct",
    venue:"Gaddafi Stadium"
  },

  {
    id:2,
    team1:"SA",
    team2:"WI",
    series:"3rd T20Is Series",
    time:" 20.00 GMT+2 ",
    schedule:"4 Oct",
    venue:"Sabina Park"
  },

  {
    id:3,
    team1:"AFG",
    team2:"PAK",
    series:"1st T20Is Series",
    time:" 20.00 PST ",
    schedule:"1 Oct",
    venue:"Gaddafi Stadium"
  },

  {
    id:4,
    team1:"SA",
    team2:"WI",
    series:"3rd T20Is Series",
    time:" 20.00 GMT+2 ",
    schedule:"4 Oct",
    venue:"Sabina Park"
  }
  

]



const Upcoming = () => {
  return (
    <div className=" flex flex-col basis-[60%] bg-opacity-40  " >
    <h2 className='text-left text-4xl font-bold p-2 text-[orange] bg-black w-full'>Upcoming Matches</h2>
   
    <div className='flex flex-row basis-1/4 p-2 h-fit ' >

      {/* first match card starts */}

      {upcomingMatches.map(({id, team1, team2, series, time, schedule, venue})=>(
          <div key={id} className='flex flex-col basis-1/4 w-max mx-2' >
            <h2 className='bg-black mt-2 mb-2 w-full h-max text-white text-1xl' >{team1} VS {team2}</h2>
          
          
          {/* livescore  */}
            <div className='bg-white border  scorecard-container '>
            <h2 className='font-bold' > {series} </h2>
  
            <div className=' shadow-sm shadow-[orange] flex flex-row justify-between p-2 m-1' >
              <h2>Time</h2>
              <h2>{time}</h2>
          
            </div>
  
            <div className=' shadow-sm shadow-[orange] flex flex-row justify-between p-2 m-1' >
              <h2>Date</h2>
              <h2>{schedule}</h2>
          
            </div>
  
  
            <div className=' shadow-sm shadow-[orange] flex flex-row justify-between p-2 m-1'>
              <h2>Venue</h2>
              <h2>{venue}</h2>     
            </div>
  
           
          </div>       
  
        </div>  
      ))}

      

      {/* first match card ends */}

    </div>

  </div>
  )
}

export default Upcoming
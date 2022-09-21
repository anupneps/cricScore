import React from 'react'



// const countries= ["IND","PAK","AUS","ENG","SA","WI","SL","AFG","NZ"]


const gameScoreCard = [
  {
    id:1,
    team1:"IND",
    team2:"PAK",
    series:"1st T20Is Series",
    score1:220,
    score2:200,
    wicket1:4,
    wicket2:8
    
  },

  {
    id:1,
    team1:"END",
    team2:"AUS",
    series:"2st T20Is Series",
    score1:120,
    score2:200,
    wicket1:4,
    wicket2:8
    
  },

  {
    id:1,
    team1:"IND",
    team2:"PAK",
    series:"1st T20Is Series",
    score1:220,
    score2:200,
    wicket1:4,
    wicket2:8
    
  },


  {
    id:1,
    team1:"IND",
    team2:"PAK",
    series:"1st T20Is Series",
    score1:220,
    score2:200,
    wicket1:4,
    wicket2:8
    
  },


]

const LiveScore = () => {
  return (
  <div className=" flex flex-col grow  " >
    <h2 className='text-left text-4xl font-bold p-2 text-[orange] bg-black w-full'>Live Matches</h2>
   
    <div className='flex flex-row basis-1/4 p-2 h-fit ' >

      {/* first match card starts */}

      {gameScoreCard.map(({id, team1, team2, series, score1, score2, wicket1, wicket2})=>(
        <div key={id} className='flex flex-col basis-1/4 w-max mx-2' >
        <h2 className='bg-black mt-2 mb-2 w-full h-max text-white text-1xl' >{team1} VS {team2}</h2>
        
        
        {/* livescore  */}
        <div className='bg-white border border-[black] scorecard-container flex-wrap '>
          <h2 className='font-bold ' > {series} </h2>

          <div className='shadow-sm shadow-[orange] flex flex-row justify-between p-2 m-1' >
            <h2>{team1}</h2>
            <h2>{score1}/{wicket1}</h2>
        
          </div>

          <div className='shadow-sm shadow-[orange] flex flex-row justify-between p-2 m-1'>
            <h2>{team2}</h2>
            <h2>{score2}/{wicket2}</h2>     
          </div>

          <div className='flex flex-col justify-between  p-2'>
            <h2 className='w-full border border-x-white p-1 shadow-sm shadow-[orange] '> {score1>score2? `${team1} wins by ${score1-score2} runs`:`${team2} wins by ${wicket2-wicket1} wickets`} </h2>
            <button className='border border-x-white p-1 shadow-sm shadow-[orange]' >Scorecard</button>
          </div>

        </div>       

      </div>  

      
      ))}

      

    </div>

  </div>
  )
};

export default LiveScore;

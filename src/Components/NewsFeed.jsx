import React from 'react'


const newsContent = [
  {
    id:1,
    title: "ICC playing conditions tweaks: Saliva ban permanent; overrate penalty in ODIs"
  },

  {
    id:2,
    title: "Shelly Nitschke appointed Australia women's head coach"
  },

  {
    id:3,
    title: "Bracewell, Allen get maiden World Cup call-up"
  },

  {
    id:4,
    title: "SA20 Auction: Tristan Stubbs bags the highest bid in maiden auction"
  },

  {
    id:5,
    title: "ICC playing conditions tweaks: Saliva ban permanent; overrate penalty in ODIs"
  },

  {
    id:6,
    title: "Shelly Nitschke appointed Australia women's head coach"
  },

  {
    id:7,
    title: "Bracewell, Allen get maiden World Cup call-up"
  },

  {
    id:8,
    title: "SA20 Auction: Tristan Stubbs bags the highest bid in maiden auction"
  },
  {
    id:9,
    title: "Shelly Nitschke appointed Australia women's head coach"
  },

  {
    id:10,
    title: "Bracewell, Allen get maiden World Cup call-up"
  },

  {
    id:11,
    title: "SA20 Auction: Tristan Stubbs bags the highest bid in maiden auction"
  }


]



export const NewsFeed = () => {
  return (
    <div className="flex flex-col basis-[20%] mx-2 flex-wrap right-0 content-center">
      <h1 className=' w-full text-center text-4xl font-bold p-2 text-[orange] bg-black border border-l-white'>News</h1>

      <div className="newsContent text-center mt-2  ">

        {newsContent.map(({id, title})=>(
          <h2 key={id} className='p-4 mt-4 bg-white'>{title}</h2>
        ))}

                
      </div>
        
        <button className='w-full text-[orange] font-bold underline'>More News</button>

    </div>
  )
}



export default NewsFeed;
